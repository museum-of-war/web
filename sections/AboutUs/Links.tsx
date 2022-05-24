import React, { useState } from 'react';
import SocialMediaButton from '@components/SocialMediaButton';
import {
  DISCORD_LINK,
  INSTAGRAM_LINK,
  TELEGRAM_LINK,
  TWITTER_LINK,
} from '@sections/Constants';
import { useViewPort } from '@hooks/useViewport';

const ShowMoreButton = ({
  onClick,
  menuOpen,
}: {
  onClick: () => void;
  menuOpen: boolean;
}) => (
  <button
    onClick={onClick}
    className="border-2 border-carbon box-content"
    style={{ borderRadius: '50%', width: 44, height: 44 }}
  >
    <div
      className={`m-[2px] ${menuOpen ? 'border-2 border-carbon' : 'border-2'}`}
      style={{
        borderRadius: '50%',
        width: 40,
        height: 40,
        borderColor: menuOpen ? '' : 'transparent',
      }}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z"
          fill="white"
        />
        <circle cx="17" cy="24" r="2" fill="#212121" />
        <circle cx="24" cy="24" r="2" fill="#212121" />
        <circle cx="31" cy="24" r="2" fill="#212121" />
      </svg>
    </div>
  </button>
);
export const Links = () => {
  const { isDesktop, isTablet } = useViewPort();
  const [menuOpen, setMenuOpen] = useState(false);

  return isTablet ? (
    <div className="flex flex-row ml-auto relative">
      <SocialMediaButton discord href={DISCORD_LINK} lightButton bordered />
      <ShowMoreButton
        onClick={() => setMenuOpen(!menuOpen)}
        menuOpen={menuOpen}
      />
      <div
        className="flex flex-col absolute top-48px right-0 z-10"
        style={{
          maxHeight: menuOpen ? 'auto' : 0,
          overflow: menuOpen ? 'visible' : 'hidden',
        }}
      >
        <SocialMediaButton
          telegram
          href={TELEGRAM_LINK}
          lightButton
          bordered
          customClasses="mt-12px button-shadow"
          customStyle={{ marginRight: 0 }}
        />
        <SocialMediaButton
          twitter
          href={TWITTER_LINK}
          lightButton
          bordered
          customClasses="mt-12px button-shadow"
          customStyle={{ marginRight: 0 }}
        />
        <SocialMediaButton
          instagram
          href={INSTAGRAM_LINK}
          lightButton
          bordered
          customClasses="mt-12px button-shadow"
          customStyle={{ marginRight: 0 }}
        />
      </div>
    </div>
  ) : isDesktop ? (
    <div className="flex flex-row ml-auto">
      <SocialMediaButton discord href={DISCORD_LINK} lightButton bordered />
      <SocialMediaButton telegram href={TELEGRAM_LINK} lightButton bordered />
      <SocialMediaButton twitter href={TWITTER_LINK} lightButton bordered />
      <SocialMediaButton instagram href={INSTAGRAM_LINK} lightButton bordered />
    </div>
  ) : null;
};
