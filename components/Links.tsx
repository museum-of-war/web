import React from 'react';
import SocialMediaButton from '@components/SocialMediaButton';
import {
  DISCORD_LINK,
  INSTAGRAM_LINK,
  TELEGRAM_LINK,
  TWITTER_LINK,
  TWITTER_LINK_MOBILE,
} from '@sections/Constants';
import { useViewPort } from '@hooks/useViewport';

export const Links = () => {
  const { isMobile } = useViewPort();

  return (
    <div className="flex flex-row w-full justify-between">
      <SocialMediaButton discord href={DISCORD_LINK} lightButton bordered />
      <SocialMediaButton telegram href={TELEGRAM_LINK} lightButton bordered />
      <SocialMediaButton
        twitter
        href={isMobile ? TWITTER_LINK_MOBILE : TWITTER_LINK}
        lightButton
        bordered
      />
      <SocialMediaButton instagram href={INSTAGRAM_LINK} lightButton bordered />
    </div>
  );
};
