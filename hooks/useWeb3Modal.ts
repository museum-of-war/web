import { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "196440d5d02d41dfa2a8ee5bfd2e96bd",
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

  async function donate(amount: string) {
    const externalProvider = await web3Modal()?.connect();
    const ethersProvider = new ethers.providers.Web3Provider(externalProvider);
    setProvider(ethersProvider);
    const signer = ethersProvider.getSigner();
    const signerAddress = await signer.getAddress();
    const web3 = new Web3(externalProvider);
    const amountInWei = web3.utils.toWei(amount, "ether");
    web3.eth.sendTransaction({
      to: "0x165CD37b4C644C2921454429E7F9358d18A45e14", 
      from: signerAddress,
      value: amountInWei,

    });
  }

  return { connectWallet, disconnectWallet, provider, donate };
}
