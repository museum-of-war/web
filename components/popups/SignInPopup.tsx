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
    if (window.ethereum.isMetaMask) {
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
      <div className="z-20 bg-white absolute w-100% h-100% flex flex-col px-5% py-3% overflow-auto top-0">
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
            round
            label={
              <div className="flex flex-row items-center">
                <img
                  alt="Logo"
                  src={'img/metamask-fox.svg'}
                  className="ml-20px mr-10px"
                  height={30}
                  width={30}
                />
                MetaMask
              </div>
            }
            className="w-100% mt-30px"
            onClick={handleMetamask}
          />
          <Button
            mode="secondary"
            round
            label={
              <div className="flex flex-row items-center">
                <img
                  alt="Logo"
                  src={'img/walletconnect.svg'}
                  className="ml-20px mr-10px"
                  height={30}
                  width={30}
                />
                WalletConnect
              </div>
            }
            className="w-100% mt-10px"
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
      <div className="z-20 h-auto bg-white relative w-600px flex flex-row px-5% pt-3% pb-6% overflow-auto">
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
            round
            label={
              <div className="flex flex-row items-center">
                <img
                  alt="Logo"
                  src={'img/metamask-fox.svg'}
                  className="ml-20px mr-10px"
                  height={30}
                  width={30}
                />
                MetaMask
              </div>
            }
            className="w-100% mt-30px"
            onClick={handleMetamask}
          />
          <Button
            mode="secondary"
            round
            label={
              <div className="flex flex-row items-center">
                <img
                  alt="Logo"
                  src={'img/walletconnect.svg'}
                  className="ml-20px mr-10px"
                  height={30}
                  width={30}
                />
                WalletConnect
              </div>
            }
            className="w-100% mt-10px"
            onClick={handleWalletConnect}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
