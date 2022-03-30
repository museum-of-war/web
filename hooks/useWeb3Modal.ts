import { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

const ProjectWalletNo = "0x98c30d4B65b2A0ab0838E7b1E09352c0FD70736C";
const CountryWalletNo = "0x165CD37b4C644C2921454429E7F9358d18A45e14";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
const apiKey = <string>process.env.NEXT_PUBLIC_ALCHEMY_API;


const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_API ,
    },
  },
};

const web3Modal = () => {
  if (typeof window === "undefined") return;
  return new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions,
  });
};

export function useWeb3Modal() {
  const [provider, setProvider] = useState<
    ethers.providers.Web3Provider | undefined
  >(undefined);
  // Automatically connect if the provider is cached but has not yet been set (e.g. page refresh)
  if (web3Modal()?.cachedProvider && !provider) {
    connectWallet();
  }

  async function connectWallet() {
    try {
      const externalProvider = await web3Modal()?.connect();
      const ethersProvider = new ethers.providers.Web3Provider(
        externalProvider
      );
      setProvider(ethersProvider);
    } catch (e) {
      // alert(e)
    }
  }

  function disconnectWallet() {
    web3Modal()?.clearCachedProvider();
    setProvider(undefined);
  }

  async function donate(amount: string, target: "country"|"project") {
    const externalProvider = await web3Modal()?.connect();
    const ethersProvider = new ethers.providers.Web3Provider(externalProvider);
    setProvider(ethersProvider);
    const signer = ethersProvider.getSigner();
    const signerAddress = await signer.getAddress();
    const web3 = new Web3(externalProvider);
    const amountInWei = web3.utils.toWei(amount, "ether");
    web3.eth.sendTransaction({
      to: target === "country"? CountryWalletNo: ProjectWalletNo,
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
  owner: ownerAddr, contractAddresses: ['0x4034923c9070cf70a7c3bb5f11161a708b1aed22']
})
 
console.log(apiKey,owner)
return  nfts.ownedNfts
  }

  return { connectWallet, disconnectWallet, provider, donate ,viewNFTs};
}
