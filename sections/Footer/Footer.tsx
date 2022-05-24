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
} from '@sections/Constants';

const Footer = () => {
  const { isMobile, isTablet } = useViewPort();
  const { push, route } = useAppRouter();

  const onClickTermsAndConditions = () => push('/terms-and-conditions');
  const onClickPrivacyPolicy = () => push('/privacy-policy');
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
          <div className="flex flex-row align-center justify-center mb-24px">
            <SocialMediaButton discord href={DISCORD_LINK} />
            <SocialMediaButton opensea href={OPENSEA_LINK} />
            <SocialMediaButton twitter href={TWITTER_LINK} />
            <SocialMediaButton instagram href={INSTAGRAM_LINK} />
            <SocialMediaButton github href={GITHUB_LINK} />
          </div>
          <div className="flex flex-row justify-center mb-32px flex-wrap">
            <HeaderAndFooterButton
              label="Audits"
              onClick={onClickAuditReport}
              wrapperClassName="mr-20px"
            />
            <HeaderAndFooterButton
              label="Privacy Policy"
              onClick={onClickPrivacyPolicy}
              wrapperClassName="mr-20px"
            />
            <HeaderAndFooterButton
              label="Terms"
              onClick={onClickTermsAndConditions}
              wrapperClassName="mr-20px"
            />
            <HeaderAndFooterButton
              label="Contact Us"
              onClick={onClickContactUs}
            />
          </div>
          <p className="m-0 text-center">© 2022 Copyright</p>
        </div>
      ) : (
        <div className="flex desktop:flex-row tablet:flex-col-reverse font-rnarrow py-36px items-center desktop:justify-between w-full">
          <p className="grow tablet:mt-24px desktop:mt-0">© 2022 Copyright</p>
          <div className="flex flex-row items-center desktop:justify-end tablet:justify-center">
            <HeaderAndFooterButton
              wrapperClassName="mr-24px"
              label="Audits"
              onClick={onClickAuditReport}
            />
            <HeaderAndFooterButton
              label="Privacy Policy"
              onClick={onClickPrivacyPolicy}
              wrapperClassName="mr-24px"
            />
            <HeaderAndFooterButton
              label="Terms"
              onClick={onClickTermsAndConditions}
              wrapperClassName="mr-24px"
            />
            <HeaderAndFooterButton
              label="Contact Us"
              onClick={onClickContactUs}
              wrapperClassName="mr-24px"
            />
            <SocialMediaButton telegram href={TELEGRAM_LINK} />
            <SocialMediaButton opensea href={OPENSEA_LINK} />
            <SocialMediaButton
              twitter
              href={isMobile ? TWITTER_LINK_MOBILE : TWITTER_LINK}
            />
            <SocialMediaButton instagram href={INSTAGRAM_LINK} />
            <SocialMediaButton github href={GITHUB_LINK} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
