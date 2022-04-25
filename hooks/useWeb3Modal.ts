import { useState } from 'react';
import { BigNumber, BigNumberish, ethers } from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';
import MetaHistoryContractAbi from '../abi/FairXYZMH.json';
import IERC721InterfaceAbi from '../abi/IERC721.json';
import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { AbiItem } from 'web3-utils';
import {
  AUCTION_ADDRESS,
  FIRST_DROP_ADDRESS,
  PROJECT_WALLET_ADDRESS,
  UKRAINE_WALLET_ADDRESS,
} from '@sections/Constants';
import { NFTAuctionConnect } from '@museum-of-war/auction';
import { ExternalProvider } from '@ethersproject/providers';
import { BidInfo } from '@sections/types';

const apiKey = <string>process.env.NEXT_PUBLIC_ALCHEMY_API;

const ProjectWalletNo = PROJECT_WALLET_ADDRESS;
const CountryWalletNo = UKRAINE_WALLET_ADDRESS;
const MetaHistoryAddress = FIRST_DROP_ADDRESS;
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

    const nfts = await web3.alchemy.getNfts({
      owner: ownerAddr,
      contractAddresses: [MetaHistoryAddress, AUCTION_ADDRESS],
    });

    return nfts.ownedNfts;
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

  async function getAuctionInfo(contractAddress: string, tokenId: number) {
    const web3 = createAlchemyWeb3(
      `https://eth-${chain}.alchemyapi.io/v2/${apiKey}`,
    );
    const ethersProvider = new ethers.providers.Web3Provider(
      web3.currentProvider as ExternalProvider,
    );
    const auction = NFTAuctionConnect(ethersProvider, chain);

    const auctionInfo = await auction.nftContractAuctions(
      contractAddress,
      tokenId,
    );

    const isSold = auctionInfo.nftSeller === ethers.constants.AddressZero;

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

    const hasBid = auctionInfo.nftHighestBid.gte(auctionInfo.minPrice);
    const bid = (
      hasBid ? auctionInfo.nftHighestBid : auctionInfo.minPrice
    ) as BigNumber;

    const increasePercentage =
      auctionInfo.bidIncreasePercentage > 0
        ? auctionInfo.bidIncreasePercentage
        : await auction.defaultBidIncreasePercentage();

    const nextMinBid = hasBid
      ? bid.mul(10000 + increasePercentage).div(10000)
      : auctionInfo.minPrice;

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
      isSold,
      bidHistory: bidInfos,
      bid: web3.utils.fromWei(bid.toString()),
      nextMinBid: web3.utils.fromWei(nextMinBid.toString()),
      proposedBids: proposedBidsETH,
      fullInfo: auctionInfo,
      // todo
      buyNowPrice: '0',
    };
  }

  async function makeBid(
    contractAddress: string,
    tokenId: number,
    value: BigNumberish,
  ) {
    const ethersProvider = await connectWallet();
    if (!ethersProvider) return;
    const signer = ethersProvider.getSigner();

    const auction = NFTAuctionConnect(signer, chain);

    await auction.makeBid(
      contractAddress,
      tokenId,
      ethers.constants.AddressZero,
      0,
      {
        value: ethers.utils.parseEther(value.toString()),
        gasLimit: 250000,
      },
    );
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

    const maxTokens = await nftContract.methods
      .maxTokens()
      .call({ from: MetaHistoryAddress });
    const mintedCount = await nftContract.methods
      .viewMinted()
      .call({ from: MetaHistoryAddress });

    return mintedCount < maxTokens;
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

  return {
    connectWallet,
    disconnectWallet,
    provider,
    donate,
    viewNFTs,
    getOwnerOfNFT,
    getAuctionInfo,
    makeBid,
    canMint,
    isUnlocked,
    openModal,
  };
}
