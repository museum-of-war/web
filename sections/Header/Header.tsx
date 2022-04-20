import React, { useCallback } from 'react';
import HeaderAndFooterButton from '@components/HeaderAndFooterButton';
import { useViewPort } from '@hooks/useViewport';
import { useAppRouter } from '@hooks/useAppRouter';
import Button from '@components/Button';
import { truncateAddress } from '@sections/utils';

type HeaderProps = {
  signerAddress: string;
  handleConnect: () => void;
  handleDisconnect: () => void;
  menuOpen: boolean;
  setMenuOpen: (arg: boolean) => void;
};

const Header = ({
  signerAddress,
  handleConnect,
  handleDisconnect,
  menuOpen,
  setMenuOpen,
}: HeaderProps) => {
  const { isMobile, isTablet } = useViewPort();
  const { push, route } = useAppRouter();

  const handleConnectWallet = useCallback(() => {
    handleConnect();
    setMenuOpen(false);
  }, [handleConnect, setMenuOpen]);

  const handleDisconnectWallet = useCallback(() => {
    handleDisconnect();
    setMenuOpen(false);
  }, [handleDisconnect, setMenuOpen]);
  const isDarkTheme = route.split('/').includes('auction');

  return isMobile || isTablet ? (
    <div>
      <div
        className={`mb-15% pb-32px ${menuOpen ? 'border-b-4 mb-12%' : ''} ${
          menuOpen && isMobile ? 'h-screen' : ''
        }`}
      >
        <div className="flex flex-row justify-between items-center">
          <img
            className="w-15% min-w-100px mr-15% py-10px"
            src={`${
              isDarkTheme
                ? '/img/pd-logoNoSymbol-black.svg'
                : '/img/pd-logoNoSymbol.svg'
            }`}
            alt="Meta History: Museum of War"
            onClick={() => {
              push('/');
            }}
          />
          <HeaderAndFooterButton
            label={menuOpen ? '' : 'Menu'}
            menu
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
        {menuOpen && (
          <>
            <div
              className={`pt-48px flex ${
                isTablet
                  ? 'flex-row flex-wrap justify-start items-center'
                  : 'flex-col'
              }`}
            >
              <HeaderAndFooterButton
                label="Home"
                onClick={() => {
                  push('/');
                  setMenuOpen(false);
                }}
                underlined={route === '/'}
                wrapperClassName={isMobile ? 'pb-32px' : 'mr-32px mb-32px'}
              />
              <HeaderAndFooterButton
                label="Warline"
                onClick={() => {
                  push('/warline');
                  setMenuOpen(false);
                }}
                underlined={route === '/warline'}
                wrapperClassName={isMobile ? 'pb-32px' : 'mr-32px mb-32px'}
              />
              <HeaderAndFooterButton
                label="Auction"
                onClick={() => {
                  push('/auction');
                  setMenuOpen(false);
                }}
                underlined={route === '/auction'}
                wrapperClassName={isMobile ? 'pb-32px' : 'mr-32px mb-32px'}
              />
              <HeaderAndFooterButton
                label="The Hall"
                onClick={() => {
                  push('/the-hall');
                  setMenuOpen(false);
                }}
                underlined={route === '/the-hall'}
                wrapperClassName={isMobile ? 'pb-32px' : 'mr-32px mb-32px'}
              />
              {signerAddress && (
                <HeaderAndFooterButton
                  label="My NFTs"
                  onClick={() => {
                    push('/tokens');
                    setMenuOpen(false);
                  }}
                  underlined={route === '/tokens'}
                  wrapperClassName={isMobile ? 'pb-32px' : 'mr-32px mb-32px'}
                />
              )}
            </div>
            {!signerAddress ? (
              <Button
                mode="secondary"
                label={
                  signerAddress ? truncateAddress(signerAddress) : 'Sign In'
                }
                onClick={
                  signerAddress ? handleDisconnectWallet : handleConnectWallet
                }
                className={isMobile ? 'w-full' : ''}
              />
            ) : (
              <>
                <span className="font-rlight text-14px mr-16px">
                  {truncateAddress(signerAddress)}
                </span>
                <Button
                  mode="secondary"
                  round
                  label={<img src="/img/logout.svg" alt="Logout" />}
                  onClick={handleDisconnect}
                />
              </>
            )}
          </>
        )}
      </div>
      {/* {menuOpen && (
          <div className="z-10 fixed w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70"></div>
        )} */}
    </div>
  ) : (
    <div className="flex flex-row items-center mb-8% justify-between z-20">
      <img
        className="w-10% min-w-75px laptop:mr-30% tablet:mr-25% cursor-pointer"
        src={`${
          isDarkTheme
            ? '/img/pd-logoNoSymbol-black.svg'
            : '/img/pd-logoNoSymbol.svg'
        }`}
        alt="Meta History: Museum of War"
        onClick={() => {
          push('/');
        }}
      />
      <div className="flex flex-row items-center justify-end">
        <div className="flex flex-row items-center justify-end mr-48px">
          <HeaderAndFooterButton
            label="Home"
            onClick={() => {
              push('/');
            }}
            underlined={route === '/'}
            wrapperClassName="mr-32px"
          />
          <HeaderAndFooterButton
            label="Warline"
            onClick={() => {
              push('/warline');
            }}
            underlined={route === '/warline'}
            wrapperClassName="mr-32px"
          />
          <HeaderAndFooterButton
            label="The Hall"
            onClick={() => {
              push('/the-hall');
              setMenuOpen(false);
            }}
            underlined={route === '/the-hall'}
            wrapperClassName={signerAddress ? 'mr-32px' : ''}
          />
          <HeaderAndFooterButton
            label="Auction"
            onClick={() => {
              push('/auction');
            }}
            underlined={route === '/auction'}
            wrapperClassName={signerAddress ? 'mr-32px' : ''}
          />
          {signerAddress && (
            <HeaderAndFooterButton
              label="My NFTs"
              onClick={() => {
                push('/tokens');
              }}
              underlined={route === '/tokens'}
            />
          )}
        </div>
        {!signerAddress ? (
          <Button
            mode="secondary"
            round={!!signerAddress}
            label={signerAddress ? truncateAddress(signerAddress) : 'Sign In'}
            onClick={signerAddress ? handleDisconnect : handleConnect}
          />
        ) : (
          <>
            <span className="font-rlight text-14px mr-16px">
              {truncateAddress(signerAddress)}
            </span>
            <Button
              mode="secondary"
              round
              label={<img src="/img/logout.svg" alt="Logout" />}
              onClick={handleDisconnect}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
