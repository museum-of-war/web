import { useState } from 'react';
import { BigNumber, BigNumberish, ethers } from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';
import MetaHistoryContractAbi from '../abi/FairXYZMH.json';
import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { AbiItem } from 'web3-utils';
import {
  FIRST_DROP_ADDRESS,
  PROJECT_WALLET_ADDRESS,
  UKRAINE_WALLET_ADDRESS,
} from '@sections/Constants';
import { NFTAuctionConnect } from '@museum-of-war/auction';
import { ExternalProvider } from '@ethersproject/providers';

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

let web3Modal: Web3Modal | null = null;
const getWeb3Modal = () => {
  if (typeof window === 'undefined') return null;
  if (!web3Modal)
    web3Modal = new Web3Modal({
      network: 'mainnet',
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
  if (getWeb3Modal()?.cachedProvider && !provider) {
    connectWallet();
  }

  async function connectWallet() {
    try {
      const externalProvider = await getWeb3Modal()?.connect();
      const ethersProvider = new ethers.providers.Web3Provider(
        externalProvider,
      );
      setProvider(ethersProvider);
    } catch (e) {
      // alert(e)
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
      `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`,
    );

    const ownerAddr = owner;

    const nfts = await web3.alchemy.getNfts({
      owner: ownerAddr,
      contractAddresses: [MetaHistoryAddress],
    });

    return nfts.ownedNfts;
  }

  async function getAuctionInfo(contractAddress: string, tokenId: number) {
    const web3 = createAlchemyWeb3(
      `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`,
    );
    const ethersProvider = new ethers.providers.Web3Provider(
      web3.currentProvider as ExternalProvider,
    );
    const auction = NFTAuctionConnect(ethersProvider, chain);

    const auctionInfo = await auction.nftContractAuctions(
      contractAddress,
      tokenId,
    );

    const hasBid = auctionInfo.nftHighestBid.gte(auctionInfo.minPrice);
    const bid = hasBid ? auctionInfo.nftHighestBid : auctionInfo.minPrice;

    const increasePercentage =
      auctionInfo.bidIncreasePercentage > 0
        ? auctionInfo.bidIncreasePercentage
        : await auction.defaultBidIncreasePercentage();

    const nextMinBid = hasBid
      ? bid.mul(10000 + increasePercentage).div(10000)
      : auctionInfo.minPrice;

    const proposedBidsWei: BigNumber[] = [
      nextMinBid,
      bid.mul(3).div(2),
      bid.mul(2),
      bid.mul(5).div(2),
    ];
    const proposedBidsETH = proposedBidsWei
      .map((bn) => bn.toString())
      .map((wei) => web3.utils.fromWei(wei));

    return {
      bid: web3.utils.fromWei(bid.toString()),
      nextMinBid: web3.utils.fromWei(nextMinBid.toString()),
      proposedBids: proposedBidsETH,
      fullInfo: auctionInfo,
    };
  }

  async function makeBid(
    contractAddress: string,
    tokenId: number,
    value: BigNumberish,
  ) {
    const externalProvider = await getWeb3Modal()?.connect();
    const ethersProvider = new ethers.providers.Web3Provider(externalProvider);
    setProvider(ethersProvider);
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

  async function getFirstDropMintedCount() {
    const web3 = createAlchemyWeb3(
      `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`,
    );
    const nftContract = new web3.eth.Contract(
      MetaHistoryContractAbi as AbiItem[],
      MetaHistoryAddress,
    );

    return await nftContract.methods
      .viewMinted()
      .call({ from: MetaHistoryAddress });
  }

  async function canMint() {
    // Initialize an alchemy-web3 instance:
    const web3 = createAlchemyWeb3(
      `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`,
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

  async function getUsdPriceFromETH(ethPrice: string | number): Promise<string> {
    return await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum')
      .then(res => res.json())
      .then(json => json[0].current_price as number)
      .then(usdPrice => (usdPrice * +ethPrice).toFixed(0));
  }

  async function getTotalFundsRaised() {
    const firstDropUnique = 4; // first four tokens were sold at auction
    const firstDropAirdrop = 3; // three tokens were airdropped as quiz prizes
    const firstDropWeth = ethers.constants.WeiPerEther.mul(15).div(100) // 0.15 ETH
      .mul(await getFirstDropMintedCount() - firstDropUnique - firstDropAirdrop);
    const firstAuctionWeth = BigNumber.from("4724827773016000000") /*First auction*/;

    const wethTotal = firstDropWeth.add(firstAuctionWeth);
    const ethTotal = ethers.utils.formatEther(wethTotal);
    const usdTotal = await getUsdPriceFromETH(ethTotal);

    return {
      eth: (+ethTotal).toFixed(2),
      usd: usdTotal.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
    };
  }

  return {
    connectWallet,
    disconnectWallet,
    provider,
    donate,
    viewNFTs,
    getAuctionInfo,
    makeBid,
    canMint,
    isUnlocked,
    openModal,
    getUsdPriceFromETH,
    getTotalFundsRaised,
  };
}
