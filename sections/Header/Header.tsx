import React, { useCallback } from 'react';
import HeaderAndFooterButton from '@components/HeaderAndFooterButton';
import { useViewPort } from '@hooks/useViewport';
import { useAppRouter } from '@hooks/useAppRouter';
import Button from '@components/Button';
import { truncateAddress } from '@sections/utils';
import MenuMobile from '@sections/Header/MenuMobile';

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
  const isHall = route.split('/').includes('hall');

  return (
    <div
      className={
        isHall
          ? ''
          : 'desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px'
      }
    >
      {isMobile || isTablet ? (
        <div>
          <div
            className={`relative ${menuOpen ? 'border-b-4' : ''} ${
              menuOpen && isMobile ? 'h-screen' : ''
            }`}
          >
            <div className="flex flex-row justify-between items-center w-full h-100px">
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
              <MenuMobile
                isDarkTheme={isDarkTheme}
                handleConnectWallet={handleConnectWallet}
                handleDisconnectWallet={handleDisconnectWallet}
                signerAddress={signerAddress}
                handleDisconnect={handleDisconnect}
                setMenuOpen={setMenuOpen}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="h-100px flex flex-row items-center justify-between z-20">
          <img
            className="w-10% min-w-75px desktop:mr-30% tablet:mr-25% cursor-pointer"
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
                isDarkTheme={isDarkTheme}
                label="Home"
                onClick={() => {
                  push('/');
                }}
                underlined={route === '/'}
                wrapperClassName="mr-32px"
              />
              <HeaderAndFooterButton
                isDarkTheme={isDarkTheme}
                label="Warline"
                onClick={() => {
                  push('/warline');
                }}
                underlined={route === '/warline'}
                wrapperClassName="mr-32px"
              />
              <HeaderAndFooterButton
                isDarkTheme={isDarkTheme}
                label="Auction"
                onClick={() => {
                  push('/auction');
                }}
                underlined={route.split('/').includes('auction')}
                wrapperClassName="mr-32px"
              />
              <HeaderAndFooterButton
                isDarkTheme={isDarkTheme}
                label="The Hall"
                onClick={() => {
                  push('/hall');
                  setMenuOpen(false);
                }}
                underlined={route === '/hall'}
                wrapperClassName="mr-32px"
              />
              <HeaderAndFooterButton
                isDarkTheme={isDarkTheme}
                label="About Us"
                onClick={() => {
                  push('/about-us');
                  setMenuOpen(false);
                }}
                underlined={route === '/about-us'}
                wrapperClassName={signerAddress ? 'mr-32px' : ''}
              />
              {signerAddress && (
                <HeaderAndFooterButton
                  isDarkTheme={isDarkTheme}
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
                label={
                  signerAddress ? truncateAddress(signerAddress) : 'Sign In'
                }
                onClick={signerAddress ? handleDisconnect : handleConnect}
              />
            ) : (
              <>
                <span
                  className="font-rlight text-14px mr-16px"
                  style={{ paddingBottom: 9 }}
                >
                  {truncateAddress(signerAddress)}
                </span>
                <Button
                  mode="secondary"
                  round
                  extraStyles={{ marginBottom: 9, minWidth: 40 }}
                  label={
                    <img
                      src={
                        isDarkTheme
                          ? '/img/logout-white.svg'
                          : '/img/logout.svg'
                      }
                      alt="Logout"
                    />
                  }
                  onClick={handleDisconnect}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
