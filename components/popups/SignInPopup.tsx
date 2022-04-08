import React, { useCallback } from 'react';
import { useViewPort } from '@hooks/useViewport';
import { VscChromeClose } from 'react-icons/vsc';
import { usePopup } from '../../providers/PopupProvider';
import { openInNewTab } from '@sections/utils';
import Button from '@components/Button';
import { useWeb3Modal } from '@hooks/useWeb3Modal';

const Popup = () => {
  const { hidePopup } = usePopup();
  const { isMobile } = useViewPort();
  const { connectWallet } = useWeb3Modal();

  const handleMetamask = useCallback(() => {
    if (window.ethereum?.isMetaMask) {
      window.ethereum.enable();
    } else {
      openInNewTab('https://metamask.io/download/');
    }
  }, []);

  const handleWalletConnect = useCallback(() => {
    hidePopup();
    connectWallet();
  }, []);

  return isMobile ? (
    <div className="fixed z-10 w-screen100% h-screen100% top-0 left-0 flex items-center justify-evenly">
      <div className="z-20 bg-white absolute w-100% h-100% flex flex-col p-24px overflow-auto top-0">
        <div className="w-100% text-right">
          <button className="right-20px top-20px" onClick={hidePopup}>
            <VscChromeClose size={25} />
          </button>
        </div>
        <div className="w-100% flex justify-center flex-col h-100%">
          <h2 className="font-rblack text-26px font-bold">Sign in</h2>
          <div className="font-rlight mt-10px">
            You need an Ethereum wallet to sign in. Connect with one of our
            available wallet providers or create a new one.
          </div>
          <Button
            mode="secondary"
            label={
              <div className="flex flex-row items-center">
                <img
                  alt="Logo"
                  src={'img/metamask-fox.svg'}
                  className="mr-10px"
                  height={24}
                  width={24}
                />
                MetaMask
              </div>
            }
            className="w-100% mt-30px h-48px mobile:py-12px"
            onClick={handleMetamask}
          />
          <Button
            mode="secondary"
            label={
              <div className="flex flex-row items-center">
                <img
                  alt="Logo"
                  src={'img/walletconnect.svg'}
                  className="mr-10px"
                  height={24}
                  width={24}
                />
                WalletConnect
              </div>
            }
            className="w-100% mt-10px h-48px mobile:py-12px"
            onClick={handleWalletConnect}
          />
        </div>
      </div>
    </div>
  ) : (
    <div
      className="fixed z-10 w-screen100% h-screen100% top-0 left-0 flex items-center justify-evenly"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;

        hidePopup();
      }}
    >
      <div className="z-20 h-auto bg-white relative w-600px flex flex-row p-72px overflow-auto">
        <button className="absolute right-20px top-20px" onClick={hidePopup}>
          <VscChromeClose size={25} />
        </button>
        <div className="w-100%">
          <h2 className="font-rblack text-26px font-bold">Sign in</h2>
          <div className="font-rlight mt-10px">
            You need an Ethereum wallet to sign in. Connect with one of our
            available wallet providers or create a new one.
          </div>
          <Button
            mode="secondary"
            label={
              <div className="flex flex-row items-center">
                <img
                  alt="Logo"
                  src={'img/metamask-fox.svg'}
                  className="mr-10px"
                  height={24}
                  width={24}
                />
                MetaMask
              </div>
            }
            className="w-100% mt-30px h-48px tablet:py-12px"
            onClick={handleMetamask}
          />
          <Button
            mode="secondary"
            label={
              <div className="flex flex-row items-center">
                <img
                  alt="Logo"
                  src={'img/walletconnect.svg'}
                  className="mr-10px"
                  height={24}
                  width={24}
                />
                WalletConnect
              </div>
            }
            className="w-100% mt-10px h-48px tablet:py-12px"
            onClick={handleWalletConnect}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
