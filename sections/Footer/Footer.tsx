import React from 'react';
import HeaderAndFooterButton from '../../components/HeaderAndFooterButton';
import SocialMediaButton from '../../components/SocialMediaButton';
import { useViewPort } from '@hooks/useViewport';
import { useAppRouter } from '@hooks/useAppRouter';
import { openInNewTab } from '../utils';
import {
  DISCORD_LINK,
  GITHUB_LINK,
  INSTAGRAM_LINK,
  OPENSEA_LINK,
  TELEGRAM_LINK,
  TWITTER_LINK,
  TWITTER_LINK_MOBILE,
} from '@sections/constants';

const Footer = () => {
  const { isMobile, isTablet } = useViewPort();
  const { route } = useAppRouter();

  const onClickAuditReport = () =>
    openInNewTab('https://github.com/museum-of-war/nft/tree/master/audits');
  const onClickContactUs = () =>
    openInNewTab('mailto:vk@metahistory.gallery?subject=Meta History');
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
        <div className="font-rnarrow pt-10% flex flex-col">
          <div className="flex tablet:flex-row mobile:flex-col align-center justify-center tablet:mb-24px mobile:mb-24px">
            <div className="flex flex-row tablet:mr-24px mobile:mr-0 mobile:justify-center">
              <SocialMediaButton discord href={DISCORD_LINK} />
              <SocialMediaButton opensea href={OPENSEA_LINK} />
              <SocialMediaButton twitter href={TWITTER_LINK} />
            </div>
            <div className="flex flex-row mobile:mt-20px tablet:mt-0 mobile:justify-center">
              <SocialMediaButton instagram href={INSTAGRAM_LINK} />
              <SocialMediaButton github href={GITHUB_LINK} />
              <SocialMediaButton telegram href={TELEGRAM_LINK} />
            </div>
          </div>
          <div className="flex flex-row justify-center tablet:mb-24px mobile:mb-24px flex-wrap">
            <HeaderAndFooterButton
              label="Audits"
              onClick={onClickAuditReport}
              wrapperClassName="mr-20px"
            />
            <HeaderAndFooterButton
              label="Privacy Policy"
              location="/privacy-policy"
              wrapperClassName="mr-20px"
            />
            <HeaderAndFooterButton
              label="Terms"
              location="/terms-and-conditions"
              wrapperClassName="mr-20px"
            />
            <HeaderAndFooterButton
              label="Contact Us"
              onClick={onClickContactUs}
            />
          </div>
          <div className="m-0 text-center tablet:mb-24px mobile:mb-24px">
            34 Taras Shevchenko blvd., Kyiv, Ukraine, 01030
          </div>
          <div className="m-0 text-center">© 2022 All rights reserved</div>
        </div>
      ) : (
        <div className="flex flex-col font-rnarrow py-36px justify-between w-full">
          <div className="flex flex-row items-center desktop:justify-end tablet:justify-center">
            <div className="grow tablet:mt-24px desktop:mt-0">
              34 Taras Shevchenko blvd., Kyiv, Ukraine, 01030{' '}
            </div>
            <div className="flex flex-row">
              <SocialMediaButton discord href={DISCORD_LINK} />
              <SocialMediaButton opensea href={OPENSEA_LINK} />
              <SocialMediaButton
                twitter
                href={isMobile ? TWITTER_LINK_MOBILE : TWITTER_LINK}
              />
              <SocialMediaButton instagram href={INSTAGRAM_LINK} />
              <SocialMediaButton github href={GITHUB_LINK} />
              <SocialMediaButton telegram href={TELEGRAM_LINK} />
            </div>
          </div>
          <div className="flex flex-row items-center justify-end justify-center">
            <div className="grow tablet:mt-24px desktop:mt-0">
              © 2022 All rights reserved
            </div>
            <div className="flex flex-row mt-24px">
              <HeaderAndFooterButton
                wrapperClassName="mr-24px"
                label="Audits"
                onClick={onClickAuditReport}
              />
              <HeaderAndFooterButton
                label="Privacy Policy"
                location="/privacy-policy"
                wrapperClassName="mr-24px"
              />
              <HeaderAndFooterButton
                label="Terms"
                location="/terms-and-conditions"
                wrapperClassName="mr-24px"
              />
              <HeaderAndFooterButton
                label="Contact Us"
                onClick={onClickContactUs}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
