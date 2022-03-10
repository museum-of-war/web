import { useWeb3Modal } from "@hooks/useWeb3Modal";
import Footer from "@sections/Footer/Footer";
import Header from "@sections/Header/Header";
import { useEffect, useState } from "react";
// import { configureAxios } from "@services/axios";
// import { initialiseCachedProvider } from "auth/provider";

export const AppWrapper: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  // useEffect(() => {
  //   configureAxios();
  //   initialiseCachedProvider();
  // }, []);
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
    <div className="min-h-screen text-carbon">
      <Header
        signerAddress={signerAddress}
        handleConnect={handleConnect}
        handleDisconnect={handleDisconnect}
      />
      {children}
      <Footer />
    </div>
  );
};
