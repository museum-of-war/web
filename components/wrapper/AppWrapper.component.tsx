import { useWeb3Modal } from '@hooks/useWeb3Modal';
import Footer from '@sections/Footer/Footer';
import Header from '@sections/Header/Header';
import { useEffect, useState } from 'react';
import { PopupProvider } from '../../providers/PopupProvider';

export interface SharedProps {
  signerAddress: string;
  handleConnect: () => void;
  handleDisconnect: () => void;
}

interface WrapperProps {
  Child: React.FC<SharedProps>;
}

export const AppWrapper: React.FC<WrapperProps> = ({ Child }) => {
  const [signerAddress, setSignerAddress] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
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
        setSignerAddress('');
      }
    };
    getAddress();
  }, [provider]);

  return (
    <PopupProvider>
      <div
        className={`min-h-screen
                     text-carbon overflow-clip
                     desktop:px-132px tablet:px-72px mobile:px-24px
                     py-36px mobile:py-20px`}
      >
        <Header
          signerAddress={signerAddress}
          handleConnect={handleConnect}
          handleDisconnect={handleDisconnect}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <div>
          <Child
            signerAddress={signerAddress}
            handleConnect={handleConnect}
            handleDisconnect={handleDisconnect}
          />
          <Footer />
        </div>
      </div>
    </PopupProvider>
  );
};
