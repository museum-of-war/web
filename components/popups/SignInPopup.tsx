import React, { useCallback } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Web3Modal from 'web3modal';
import { usePopup } from '@providers/PopupProvider';
import Button from '@components/Button';
import { useViewPort } from '@hooks/useViewport';
import { openInNewTab } from '@sections/utils';

type PropsPopup = {
  web3Modal: Web3Modal;
  onConnectionEstablished: (provider: any) => void;
};

const SignInPopup = ({ web3Modal, onConnectionEstablished }: PropsPopup) => {
  const { hidePopup } = usePopup();
  const { isMobile } = useViewPort();

  const connect = useCallback(
    async (provider: string) => {
      hidePopup();
      try {
        onConnectionEstablished(await web3Modal.connectTo(provider));
      } catch (e) {
        console.error(e);
      }
    },
    [hidePopup, onConnectionEstablished, web3Modal],
  );

  const handleMetaMask = useCallback(() => {
    if (window.ethereum?.isMetaMask) {
      connect('injected').then();
    } else {
      openInNewTab('https://metamask.io/download/');
    }
  }, [connect]);

  const handleWalletConnect = useCallback(() => {
    connect('walletconnect').then();
  }, [connect]);

  const handleCoinbaseWallet = useCallback(() => {
    connect('coinbasewallet').then();
  }, [connect]);

  return isMobile ? (
    <div className="fixed z-10 w-screen100% h-screen100% top-0 left-0 flex items-center justify-evenly">
      <div className="z-20 bg-white absolute w-100% h-100% flex flex-col p-24px overflow-auto top-0">
        <div className="w-100% text-right">
          <button
            className="right-20px top-20px dark:text-carbon"
            onClick={hidePopup}
          >
            <VscChromeClose size={25} />
          </button>
        </div>
        <div className="w-100% flex justify-center flex-col h-100%">
          <h2 className="font-rblack text-26px font-bold dark:text-carbon">
            Sign in
          </h2>
          <div className="font-rlight mt-10px dark:text-carbon">
            You need an Ethereum wallet to sign in. Connect with one of our
            available wallet providers or create a new one.
          </div>
          <Button
            mode="secondary"
            label={
              <div className="flex flex-row items-center">
                <img
                  alt="MetaMask Logo"
                  src={'/img/metamask-fox.svg'}
                  className="mr-10px"
                  height={24}
                  width={24}
                />
                MetaMask
              </div>
            }
            className="w-100% mt-30px h-48px mobile:py-12px"
            onClick={handleMetaMask}
          />
          <Button
            mode="secondary"
            label={
              <div className="flex flex-row items-center">
                <img
                  alt="WalletConnect Logo"
                  src={'/img/walletconnect.svg'}
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
          <Button
            mode="secondary"
            label={
              <div className="flex flex-row items-center">
                <img
                  alt="Coinbase Wallet Logo"
                  src={'/img/coinbasewallet.svg'}
                  className="mr-10px"
                  height={24}
                  width={24}
                />
                Coinbase Wallet
              </div>
            }
            className="w-100% mt-10px h-48px mobile:py-12px"
            onClick={handleCoinbaseWallet}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="fixed z-10 w-screen100% h-screen100% top-0 left-0 flex items-center justify-evenly">
      <div className="z-20 h-auto bg-white relative w-600px flex flex-row p-72px overflow-auto">
        <div>
          <button
            className="absolute right-20px top-20px dark:text-carbon"
            onClick={hidePopup}
          >
            <VscChromeClose size={25} />
          </button>
        </div>
        <div className="w-100%">
          <h2 className="font-rblack text-26px font-bold dark:text-carbon">
            Sign in
          </h2>
          <div className="font-rlight mt-10px dark:text-carbon">
            You need an Ethereum wallet to sign in. Connect with one of our
            available wallet providers or create a new one.
          </div>
          <Button
            mode="secondary"
            label={
              <div className="flex flex-row items-center">
                <img
                  alt="MetaMask Logo"
                  src={'/img/metamask-fox.svg'}
                  className="mr-10px"
                  height={24}
                  width={24}
                />
                MetaMask
              </div>
            }
            className="w-100% mt-30px h-48px tablet:py-12px"
            onClick={handleMetaMask}
          />
          <Button
            mode="secondary"
            label={
              <div className="flex flex-row items-center">
                <img
                  alt="WalletConnect Logo"
                  src={'/img/walletconnect.svg'}
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
          <Button
            mode="secondary"
            label={
              <div className="flex flex-row items-center">
                <img
                  alt="Coinbase Wallet Logo"
                  src={'/img/coinbasewallet.svg'}
                  className="mr-10px"
                  height={24}
                  width={24}
                />
                Coinbase Wallet
              </div>
            }
            className="w-100% mt-10px h-48px tablet:py-12px"
            onClick={handleCoinbaseWallet}
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPopup;
