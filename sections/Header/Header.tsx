import React, { useCallback } from 'react';
import HeaderAndFooterButton from '../../components/HeaderAndFooterButton';
import { useViewPort } from '@hooks/useViewport';
import { useAppRouter } from '@hooks/useAppRouter';
import Button from '@components/Button';
import { truncateAddress } from '@sections/utils';
import { usePopup } from '../../providers/PopupProvider';
import { useWeb3Modal } from '@hooks/useWeb3Modal';

type HeaderProps = {
  signerAddress: string;
  menuOpen: boolean;
  setMenuOpen: (arg: boolean) => void;
};

const Header = ({ signerAddress, menuOpen, setMenuOpen }: HeaderProps) => {
  const { disconnectWallet } = useWeb3Modal();
  const { isMobile, isTablet } = useViewPort();
  const { push, route } = useAppRouter();
  const { showPopup } = usePopup();

  const handleConnect = useCallback(() => {
    showPopup('signIn', {});
  }, []);

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
            src={'/img/pd-logoNoSymbol.png'}
            alt="Meta History: Museum of War"
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
                label="About the project"
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
                label="Sign In"
                onClick={handleConnect}
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
                  onClick={disconnectWallet}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  ) : (
    <div className="flex flex-row items-center mb-8% justify-between z-20">
      <img
        className="w-15% min-w-75px laptop:mr-30% tablet:mr-25%"
        src={'/img/pd-logoNoSymbol.png'}
        alt="Meta History: Museum of War"
      />
      <div className="flex flex-row items-center justify-end">
        <div className="flex flex-row items-center justify-end mr-48px">
          <HeaderAndFooterButton
            label="About the project"
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
            round={false}
            label="Sign In"
            onClick={handleConnect}
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
              onClick={disconnectWallet}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
