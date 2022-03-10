import { useWeb3Modal } from "@hooks/useWeb3Modal";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Content from "../sections/Content/Content";
import Footer from "../sections/Footer/Footer";
import Header from "../sections/Header/Header";

const Home: NextPage = () => {
  const [signerAddress, setSignerAddress] = useState<string>("");
  const { provider, connectWallet, disconnectWallet } = useWeb3Modal();

  const handleConnect = async () => {
    await connectWallet();
  };
  const handleDisconnect = () => {
    disconnectWallet();
  };

  useEffect(() => {
    const getAddress = async () => {
      if (provider !== undefined) {
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setSignerAddress(address);
      } else {
        setSignerAddress("");
      }
    };
    getAddress();
  }, [provider]);
  return (
    <div className="text-carbon">
      <Header
        signerAddress={signerAddress}
        handleConnect={handleConnect}
        handleDisconnect={handleDisconnect}
      />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
