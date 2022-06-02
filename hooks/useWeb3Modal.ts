import { useState } from 'react';
import { BigNumber, BigNumberish, ethers } from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';
import MetaHistoryContractAbi from '../abi/FairXYZMH.json';
import IERC721InterfaceAbi from '../abi/IERC721.json';
import MetaHistoryDropContractAbi from '../abi/DropMH.json';
import { createAlchemyWeb3, GetNftsResponse } from '@alch/alchemy-web3';
import { AbiItem } from 'web3-utils';
import {
  AVATARS_ADDRESS,
  FIRST_DROP_ADDRESS,
  KALUSH_BID,
  PROJECT_WALLET_ADDRESS,
  SECOND_DROP_ADDRESS,
  UKRAINE_WALLET_ADDRESS,
} from '@sections/Constants';
import { AuctionVersion, NFTAuctionConnect } from '@museum-of-war/auction';
import { ExternalProvider } from '@ethersproject/providers';
import { Drop1Data, Drop2Data } from '@sections/Warline/WarlineData';
import AuctionCollectionData from '@sections/Auction/AuctionCollectionData';
import AuctionData from '@sections/Auction/AuctionData';
import { Nft } from '@alch/alchemy-web3/dist/esm/alchemy-apis/types';

const apiKey = <string>process.env.NEXT_PUBLIC_ALCHEMY_API;

const ProjectWalletNo = PROJECT_WALLET_ADDRESS;
const CountryWalletNo = UKRAINE_WALLET_ADDRESS;
const MetaHistoryAddress = FIRST_DROP_ADDRESS;
const SecondDropAddress = SECOND_DROP_ADDRESS;

const chain = 'mainnet';

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_API,
    },
  },
};

let triedToConnect = false;
let web3Modal: Web3Modal | null = null;
const getWeb3Modal = () => {
  if (typeof window === 'undefined') return null;
  if (!web3Modal)
    web3Modal = new Web3Modal({
      network: chain,
      cacheProvider: true,
      providerOptions,
    });
  return web3Modal;
};

type getAuctionInfoType = ReturnType<typeof useWeb3Modal>['_getAuctionInfo'];
const auctionInfoMemo = {
  cachingTime: 5000, // in ms
  pending: new Set<ReturnType<getAuctionInfoType>>(),
  maxPending: 5,
  cached: {} as {
    [contractAddress: string]: {
      [tokenId: number]: {
        [version: string]: [ReturnType<getAuctionInfoType>, Date];
      };
    };
  },
  async tryGetAuctionInfo(
    getAuctionInfo: getAuctionInfoType,
    contractAddress: string,
    tokenId: number,
    version: AuctionVersion,
    externalBid?: BigNumberish,
  ): Promise<Awaited<ReturnType<getAuctionInfoType>>> {
    const prevVal = this?.cached?.[contractAddress]?.[tokenId]?.[version];
    if (prevVal && +new Date() - +prevVal[1] < this.cachingTime) {
      return prevVal[0];
    } else {
      const canBeStarted = this.pending.size < this.maxPending;
      const promise = canBeStarted
        ? getAuctionInfo(contractAddress, tokenId, version, externalBid)
        : new Promise<Awaited<ReturnType<getAuctionInfoType>>>(
            async (resolve) => {
              while (this.pending.size >= this.maxPending) {
                await Promise.any(this.pending);
              }
              const startedPromise = getAuctionInfo(
                contractAddress,
                tokenId,
                version,
                externalBid,
              );
              this.pending.add(startedPromise);
              startedPromise.finally(() => this.pending.delete(startedPromise));
              resolve(startedPromise);
            },
          );
      const byAddress =
        this.cached[contractAddress] ?? (this.cached[contractAddress] = {});
      const byTokenId = byAddress[tokenId] ?? (byAddress[tokenId] = {});
      byTokenId[version] = [promise, new Date()];
      if (canBeStarted) {
        this.pending.add(promise);
        promise.finally(() => this.pending.delete(promise));
      }
      promise.then(() => {
        byTokenId[version] = [promise, new Date()];
      });
      return promise;
    }
  },
};

export function useWeb3Modal() {
  const [provider, setProvider] = useState<
    ethers.providers.Web3Provider | undefined
  >(undefined);
  // Automatically connect if the provider is cached but has not yet been set (e.g. page refresh)
  if (!triedToConnect && getWeb3Modal()?.cachedProvider && !provider) {
    connectWallet();
    triedToConnect = true;
  }

  async function connectWallet(): Promise<ethers.providers.Web3Provider | null> {
    try {
      const externalProvider = await getWeb3Modal()?.connect();
      const ethersProvider = new ethers.providers.Web3Provider(
        externalProvider,
      );

      const network = await ethersProvider.getNetwork();

      if (
        (chain === 'mainnet' && network.chainId !== 1) ||
        (chain !== 'mainnet' && network.name !== chain)
      ) {
        alert('Wrong network! Please, connect to ' + chain);
        return null;
      }

      setProvider(ethersProvider);

      return ethersProvider;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  function disconnectWallet() {
    getWeb3Modal()?.clearCachedProvider();
    setProvider(undefined);
  }

  async function donate(amount: string, target: 'country' | 'project') {
    const externalProvider = await getWeb3Modal()?.connect();
    const ethersProvider = new ethers.providers.Web3Provider(externalProvider);
    setProvider(ethersProvider);
    const signer = ethersProvider.getSigner();
    const signerAddress = await signer.getAddress();
    const web3 = new Web3(externalProvider);
    const amountInWei = web3.utils.toWei(amount, 'ether');
    web3.eth.sendTransaction({
      to: target === 'country' ? CountryWalletNo : ProjectWalletNo,
      from: signerAddress,
      value: amountInWei,
    });
  }

  async function viewNFTs(owner: string) {
    // Initialize an alchemy-web3 instance:
    const web3 = createAlchemyWeb3(
      `https://eth-${chain}.alchemyapi.io/v2/${apiKey}`,
    );

    const ownerAddr = owner;

    const ownedNfts = [] as Nft[];

    let pageKey = undefined as string | undefined;

    do {
      const res = await web3.alchemy
        .getNfts({
          pageKey,
          owner: ownerAddr,
          contractAddresses: [
            MetaHistoryAddress,
            SECOND_DROP_ADDRESS,
            ...Object.values(AuctionCollectionData).map(
              (d) => d.contractAddress,
            ),
          ].filter((v, i, a) => a.indexOf(v) === i),
        })
        .catch((e) => {
          console.error(e);
          return {
            ownedNfts: [],
            totalCount: 0,
          } as GetNftsResponse;
        });

      ownedNfts.push(...res.ownedNfts);
      pageKey = res.pageKey;
    } while (pageKey);

    function fixNftForDrop1(
      nft: typeof ownedNfts[number],
    ): typeof ownedNfts[number] {
      const tokenId = parseInt(nft.id.tokenId, 16);
      const tokenNumber = ((tokenId - 5) % 99) + 5;
      const editionNumber = (tokenId - tokenNumber) / 99 + 1;
      const event = Drop1Data.flatMap((day) => day.events).find(
        (event) => '' + tokenNumber == event.Tokenid,
      )!;
      return {
        ...nft,
        metadata: {
          name: `Day ${event.DayNo}, ${event.Time}`,
          description: event.Headline,
          image: event.ImageType,
          item_number: event.Tokenid,
          attributes: [
            {
              trait_type: 'Edition',
              max_value: 22,
              value: editionNumber,
            },
          ],
        },
      };
    }

    function recreateNftForDrop2(
      nft: typeof ownedNfts[number],
    ): typeof ownedNfts[number] {
      const tokenId = parseInt(nft.id.tokenId);
      const event = Drop2Data.flatMap((day) => day.events).find((event) =>
        event.ImageType?.includes(`drop2/${tokenId}`),
      )!;
      return {
        ...nft,
        metadata: {
          name: `Day ${event.DayNo}, ${event.Time}`,
          description: event.Headline,
          image: event.ImageType,
          item_number: event.Tokenid,
          attributes: [
            {
              trait_type: 'Edition',
              max_value: 16,
              value: 'x',
            },
          ],
        },
      };
    }

    return ownedNfts
      .map((nft) =>
        nft.contract.address === FIRST_DROP_ADDRESS.toLowerCase()
          ? nft.metadata?.image === undefined
            ? fixNftForDrop1(nft)
            : nft
          : nft.contract.address === SECOND_DROP_ADDRESS.toLowerCase()
          ? recreateNftForDrop2(nft)
          : nft,
      )
      .sort((a, b) => parseInt(a.id.tokenId) - parseInt(b.id.tokenId))
      .sort((a, b) =>
        a.contract.address > b.contract.address
          ? 1
          : b.contract.address > a.contract.address
          ? -1
          : 0,
      );
  }

  async function getOwnerOfNFT(contractAddress: string, tokenId: number) {
    // Initialize an alchemy-web3 instance:
    const web3 = createAlchemyWeb3(
      `https://eth-${chain}.alchemyapi.io/v2/${apiKey}`,
    );
    const nftContract = new web3.eth.Contract(
      IERC721InterfaceAbi as AbiItem[],
      contractAddress,
    );
    return await nftContract.methods
      .ownerOf(tokenId)
      .call({ from: MetaHistoryAddress });
  }

  async function getAuctionInfo(
    contractAddress: string,
    tokenId: number,
    version: AuctionVersion,
    externalBid?: BigNumberish,
  ) {
    return auctionInfoMemo.tryGetAuctionInfo(
      _getAuctionInfo,
      contractAddress,
      tokenId,
      version,
      externalBid,
    );
  }

  async function _getAuctionInfo(
    contractAddress: string,
    tokenId: number,
    version: AuctionVersion,
    externalBid?: BigNumberish,
  ) {
    const web3 = createAlchemyWeb3(
      `https://eth-${chain}.alchemyapi.io/v2/${apiKey}`,
    );
    const ethersProvider = new ethers.providers.Web3Provider(
      web3.currentProvider as ExternalProvider,
    );
    const auction = NFTAuctionConnect(ethersProvider, chain, version);

    const auctionInfo = await auction.nftContractAuctions(
      contractAddress,
      tokenId,
    );

    const isSold =
      version === AuctionVersion.V1
        ? auctionInfo.nftSeller === ethers.constants.AddressZero
        : auctionInfo.feeRecipient === ethers.constants.AddressZero;

    /*
    const bidInfos = isSold
      ? await Promise.all(
          ((await auction.queryFilter(auction.filters.BidMade())) as any[])
            .filter(
              (bid: any) =>
                bid.args.nftContractAddress === contractAddress &&
                bid.args.tokenId.eq(tokenId),
            )
            .map(
              async (bid: any) =>
                ({
                  eth: web3.utils.fromWei(bid.args.ethAmount.toString()),
                  bidder: bid.args.bidder,
                  date: new Date(
                    +(await web3.eth.getBlock(bid.blockNumber)).timestamp *
                      1000,
                  ),
                  full: bid,
                } as BidInfo & { full: any }),
            ),
        )
      : [];
      */

    const hasBid =
      auctionInfo.nftHighestBid?.gte(auctionInfo.minPrice) || !!externalBid;
    const internalBid = (
      hasBid
        ? auctionInfo.nftHighestBid
        : auctionInfo.minPrice ?? auctionInfo.buyNowPrice ?? BigNumber.from(0)
    ) as BigNumber;

    const isExternalBidGreater = !!externalBid && internalBid.lt(externalBid);

    const bid = isExternalBidGreater
      ? BigNumber.from(externalBid)
      : internalBid;

    const increasePercentage =
      auctionInfo.bidIncreasePercentage > 0
        ? auctionInfo.bidIncreasePercentage
        : (await auction.defaultBidIncreasePercentage?.()) ?? 0;

    const nextMinBid = hasBid
      ? bid.mul(10000 + increasePercentage).div(10000)
      : auctionInfo.minPrice ?? auctionInfo.buyNowPrice ?? BigNumber.from(0);

    const bidStep = ethers.constants.WeiPerEther.div(4);
    const nearestPrettyBid = nextMinBid.div(bidStep).mul(bidStep);

    const proposedBidsWei: BigNumber[] = [
      nextMinBid,
      nearestPrettyBid.add(bidStep),
      nearestPrettyBid.add(bidStep.mul(2)),
      nearestPrettyBid.add(bidStep.mul(3)),
    ];
    const proposedBidsETH = proposedBidsWei
      .map((bn) => bn.toString())
      .map((wei) => web3.utils.fromWei(wei));

    return {
      isExternalBidGreater,
      hasBid,
      isSold,
      isSale:
        version === AuctionVersion.V1
          ? auctionInfo.minPrice.eq(0) && auctionInfo.buyNowPrice.gt(0)
          : version === AuctionVersion.Seller,
      //bidHistory: bidInfos,
      bidHistory: [],
      bid: web3.utils.fromWei(bid.toString()),
      nextMinBid: web3.utils.fromWei(nextMinBid.toString()),
      proposedBids: proposedBidsETH,
      fullInfo: auctionInfo,
      buyNowPrice:
        version === AuctionVersion.V1 || version === AuctionVersion.Seller
          ? web3.utils.fromWei(auctionInfo.buyNowPrice.toString())
          : undefined,
      startsAt: auctionInfo.auctionStart
        ? new Date(auctionInfo.auctionStart * 1000)
        : undefined,
      endsAt: auctionInfo.auctionEnd
        ? new Date(auctionInfo.auctionEnd * 1000)
        : undefined,
    };
  }

  async function makeBid(
    contractAddress: string,
    tokenId: number,
    value: BigNumberish,
    version: AuctionVersion,
  ) {
    const ethersProvider = await connectWallet();
    if (!ethersProvider) return;
    const signer = ethersProvider.getSigner();

    const auction = NFTAuctionConnect(signer, chain, version);

    if (version === AuctionVersion.V1) {
      const estimatedGas = await auction.estimateGas.makeBid(
        contractAddress,
        tokenId,
        ethers.constants.AddressZero,
        0,
        {
          value: ethers.utils.parseEther(value.toString()),
        },
      );
      const tx = await auction.makeBid(
        contractAddress,
        tokenId,
        ethers.constants.AddressZero,
        0,
        {
          value: ethers.utils.parseEther(value.toString()),
          gasLimit: estimatedGas.mul(11).div(10),
        },
      );
      await tx.wait();
    } else {
      const estimatedGas = await auction.estimateGas.makeBid(
        contractAddress,
        tokenId,
        {
          value: ethers.utils.parseEther(value.toString()),
        },
      );
      const tx = await auction.makeBid(contractAddress, tokenId, {
        value: ethers.utils.parseEther(value.toString()),
        gasLimit: estimatedGas.mul(11).div(10),
      });
      await tx.wait();
    }
  }

  async function getFirstDropMintedCount() {
    const web3 = createAlchemyWeb3(
      `https://eth-${chain}.alchemyapi.io/v2/${apiKey}`,
    );

    try {
      const nftContract = new web3.eth.Contract(
        MetaHistoryContractAbi as AbiItem[],
        MetaHistoryAddress,
      );

      return +(await nftContract.methods
        .viewMinted()
        .call({ from: MetaHistoryAddress }));
    } catch (e) {
      console.warn(e);
      return 0;
    }
  }

  async function getSecondDropMintedCount() {
    const web3 = createAlchemyWeb3(
      `https://eth-${chain}.alchemyapi.io/v2/${apiKey}`,
    );

    try {
      const nftContract = new web3.eth.Contract(
        MetaHistoryDropContractAbi as AbiItem[],
        SecondDropAddress,
      );

      return +(await nftContract.methods
        .viewMinted()
        .call({ from: SecondDropAddress }));
    } catch (e) {
      console.warn(e);
      return 0;
    }
  }

  async function canMint() {
    // Initialize an alchemy-web3 instance:
    const web3 = createAlchemyWeb3(
      `https://eth-${chain}.alchemyapi.io/v2/${apiKey}`,
    );
    const nftContract = new web3.eth.Contract(
      MetaHistoryContractAbi as AbiItem[],
      MetaHistoryAddress,
    );
    const isPaused = await nftContract.methods
      .paused()
      .call({ from: MetaHistoryAddress });

    if (isPaused) return false;

    const maxTokens = +(await nftContract.methods
      .maxTokens()
      .call({ from: MetaHistoryAddress }));
    const mintedCount = +(await nftContract.methods
      .viewMinted()
      .call({ from: MetaHistoryAddress }));

    return mintedCount < maxTokens;
  }

  async function canMintSecondDrop() {
    const web3 = createAlchemyWeb3(
      `https://eth-${chain}.alchemyapi.io/v2/${apiKey}`,
    );

    try {
      const nftContract = new web3.eth.Contract(
        MetaHistoryDropContractAbi as AbiItem[],
        SecondDropAddress,
      );
      const isPaused = await nftContract.methods
        .paused()
        .call({ from: SecondDropAddress });

      if (isPaused) return false;

      const maxTokens = +(await nftContract.methods
        .getMaxTokens()
        .call({ from: SecondDropAddress }));
      const mintedCount = +(await nftContract.methods
        .viewMinted()
        .call({ from: SecondDropAddress }));

      return mintedCount < maxTokens;
    } catch (e) {
      console.warn(e);
      return false;
    }
  }

  async function mintSecondDrop(tokensCount: number) {
    const ethersProvider = await connectWallet();
    if (!ethersProvider) return;
    const signer = ethersProvider.getSigner();

    let nftContract = new ethers.Contract(
      SecondDropAddress,
      MetaHistoryDropContractAbi,
      signer,
    );

    const price: BigNumber = await nftContract.price();

    const estimatedGas = await nftContract.estimateGas.mint!(tokensCount, {
      value: price.mul(tokensCount),
    });

    const tx = await nftContract.mint(tokensCount, {
      value: price.mul(tokensCount),
      gasLimit: estimatedGas.mul(11).div(10),
    });

    await tx.wait();
  }

  async function isUnlocked() {
    let unlocked;

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.listAccounts();

      unlocked = accounts.length > 0;
    } catch (e) {
      unlocked = false;
    }

    return unlocked;
  }

  async function openModal() {
    try {
      await getWeb3Modal()?.connect();
    } catch (error) {
      console.error(error);
    }
  }

  async function getPriceFromETH(
    ethPrice: string | number,
    currency: 'usd' | 'eur',
  ): Promise<string> {
    return await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=ethereum`,
    )
      .then((res) => res.json())
      .then((json) => json[0].current_price as number)
      .then((price) => (price * +ethPrice).toFixed(0));
  }

  async function getUsdPriceFromETH(
    ethPrice: string | number,
  ): Promise<string> {
    return await getPriceFromETH(ethPrice, 'usd');
  }

  async function getTotalNFTs() {
    const firstDropMinted = +(await getFirstDropMintedCount());
    const secondDropMinted = +(await getSecondDropMintedCount());
    const auctions = AuctionData.length - 4; // 4 tokens are from the first drop

    return firstDropMinted + secondDropMinted + auctions;
  }

  async function getTotalFundsRaised() {
    const firstDropUnique = 4; // first four tokens were sold at auction
    const firstDropAirdrop =
      3 + // quiz prizes
      1; // for retweet
    const secondDropAirdrop = 30; // for artsy
    const firstDropWeth = ethers.constants.WeiPerEther.mul(15)
      .div(100) // 0.15 ETH
      .mul(
        (await getFirstDropMintedCount()) -
          firstDropUnique -
          firstDropAirdrop -
          secondDropAirdrop +
          (await getSecondDropMintedCount()),
      );
    const firstAuctionWeth = BigNumber.from('4724827773016000000'); // first auction
    const secondAuctionWeth = BigNumber.from('12656000000000000000'); // second auction

    const web3 = createAlchemyWeb3(
      `https://eth-${chain}.alchemyapi.io/v2/${apiKey}`,
    );
    const avatarsOnSale = await new web3.eth.Contract(
      IERC721InterfaceAbi as AbiItem[],
      AVATARS_ADDRESS,
    ).methods
      .balanceOf('0x325F1Cd4ea0f9ee484ea59480ABBa1966c2E1ddf') // seller smart-contract
      .call({ from: AVATARS_ADDRESS });
    const avatarsSaleWeth = ethers.constants.WeiPerEther.div(2).mul(
      52 - avatarsOnSale,
    ); // 52 on sale, 0.5 ETH fixed price

    const wethTotal = firstDropWeth
      .add(firstAuctionWeth)
      .add(secondAuctionWeth)
      .add(KALUSH_BID)
      .add(avatarsSaleWeth);

    if (wethTotal.lte(0))
      return {
        eth: '—',
        usd: '—',
      };

    const ethTotal = ethers.utils.formatEther(wethTotal);
    const usdTotal = await getUsdPriceFromETH(ethTotal).catch((e) => {
      console.error(e);
      return null;
    });

    return {
      eth: (+ethTotal).toFixed(2),
      usd: usdTotal ? (+usdTotal).toLocaleString('en-US') : '—',
    };
  }

  return {
    connectWallet,
    disconnectWallet,
    provider,
    donate,
    viewNFTs,
    getOwnerOfNFT,
    _getAuctionInfo,
    getAuctionInfo,
    makeBid,
    canMint,
    canMintSecondDrop,
    mintSecondDrop,
    isUnlocked,
    openModal,
    getPriceFromETH,
    getUsdPriceFromETH,
    getTotalFundsRaised,
    getTotalNFTs,
  };
}
