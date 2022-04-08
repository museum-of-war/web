import React from "react";

type SocialMediaButtonProps = {
  twitter?: boolean;
  instagram?: boolean;
  github?: boolean;
  opensea?: boolean;
  href: string;
};

const SocialMediaButton = ({
  twitter,
  instagram,
  github,
  opensea,
  href,
}: SocialMediaButtonProps) => {
  return (
    <div className="mobile:w-40px w-48px mobile:mr-6% tablet:mr-24px last:mr-0">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {twitter && <img alt="Twitter Logo" src={"/img/pd-TwitterLogo.svg"} />}
        {instagram && <img alt="Instagram Logo" src={"/img/pd-IGLogo.svg"} />}
        {github && <img alt="GitHub Logo" src={"/img/gh.svg"} />}
        {opensea && <img alt="OpenSea Logo" src={"/img/opensea.svg"} />}
      </a>
    </div>
  );
};

export default SocialMediaButton;
