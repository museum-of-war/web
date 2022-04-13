import React from 'react';

type SocialMediaButtonProps = {
  twitter?: boolean;
  instagram?: boolean;
  github?: boolean;
  opensea?: boolean;
  telegram?: boolean;
  href: string;
  customClasses?: string;
};

const SocialMediaButton = ({
  twitter,
  instagram,
  github,
  opensea,
  href,
  telegram,
  customClasses = '',
}: SocialMediaButtonProps) => {
  return (
    <div
      className={`mobile:w-40px w-48px mobile:mr-6% tablet:mr-24px last:mr-0 ${customClasses}`}
    >
      <a href={href} target="_blank" rel="noreferrer">
        {telegram && <img alt="Telegram Logo" src={'/img/tg.svg'} />}
        {twitter && <img alt="Twitter Logo" src={'/img/pd-TwitterLogo.svg'} />}
        {instagram && <img alt="Instagram Logo" src={'/img/pd-IGLogo.svg'} />}
        {github && <img alt="GitHub Logo" src={'/img/gh.svg'} />}
        {opensea && <img alt="OpenSea Logo" src={'/img/opensea.svg'} />}
      </a>
    </div>
  );
};

export default SocialMediaButton;
