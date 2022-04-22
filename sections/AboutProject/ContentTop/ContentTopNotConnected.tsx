import React from 'react';
import PoweredByFrame from '@components/PoweredByFrame';
import { useViewPort } from '@hooks/useViewport';
import Button from '@components/Button';
import { openInNewTab } from '@sections/utils';
import {
  AUCTION_CLOSING_DATE,
  AUCTION_END_DATE,
  MINT_LINK,
  OPENSEA_LINK,
} from '@sections/Constants';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import CountdownBanner from '@sections/AboutProject/ContentTop/CountdownBanner';

type ContentTopNotConnectedProps = {
  signerAddress: string;
  handleConnect: () => void;
};

const ContentTopNotConnected = ({}: ContentTopNotConnectedProps) => {
  const { isMobile, isTablet } = useViewPort();
  const { canMint } = useWeb3Modal();

  return (
    <div className={
      isMobile
        ? 'pb-60px'
        : isTablet
          ? 'pb-72px'
          : 'pb-100px'
    }>
      <div
        className={
          isMobile || isTablet ? '' : 'flex flex-row justify-between mt-8vh'
        }
      >
        <div
          className={`${
            isMobile || isTablet ? 'w-100%' : 'w-50%'
          } flex flex-col justify-between`}
        >
          <div>
            <p
              className={`font-rblack uppercase ${
                isMobile ? 'text-46px leading-40px' : ''
              }`}
              style={{
                fontSize: isMobile ? '' : '110px',
                lineHeight: isMobile ? '' : '100px',
              }}
            >
              The NFT-museum
            </p>
            <p
              className={`font-rblack ${
                isMobile ? 'text-27px leading-30px' : 'text-45px leading-48px'
              }`}
            >
              of the war of putin&apos;s russia against Ukraine
            </p>
          </div>
          <div
            className={`w-100% ${
              isTablet ? 'mt-36px mb-48px' : isMobile ? 'mt-30px mb-40px' : ''
            }`}
          >
            <Button
              mode="primary"
              className="h-48px"
              round={false}
              label="Buy NFT Now"
              onClick={async () => {
                if (await canMint()) {
                  openInNewTab(MINT_LINK);
                } else {
                  openInNewTab(OPENSEA_LINK);
                }
              }}
            />
          </div>
        </div>
        <div
          className={`${
            isMobile || isTablet ? 'w-100%' : 'w-50%'
          } flex flex-col justify-between`}
        >
          <div
            className={`inline-block ${
              isMobile
                ? 'min-h-[67px]'
                : isTablet
                  ? 'min-h-[164px]'
                  : 'min-h-[347px]'
            }`}
          >
            <dotlottie-player src={'/lottie/main.lottie'} autoplay loop />
          </div>
          <PoweredByFrame />
        </div>
      </div>
      <CountdownBanner endDate={AUCTION_CLOSING_DATE} hideDate={AUCTION_END_DATE} />
    </div>
  );
};

export default ContentTopNotConnected;
