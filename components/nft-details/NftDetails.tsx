import React from 'react';

type NftDetailsProps = {
  title: string;
  descriptionEnglish: string;
  descriptionUkrainian: string;
  imageSources: {
    previewSrc: string;
    originalSrc: string;
    animationSrc: string;
    isAnimation?: boolean;
  };
};
export const NftDetails: React.FC<NftDetailsProps> = ({ title }) => {
  return (
    <div>
      <p
        className="border-carbon border-b-4
  mobile:text-38px mobile:leading-40px
  tablet:text-70px tablet:leading-72px
  desktop:text-80px desktop:leading-100px
  font-rblack mb-10px"
      >
        {title}
      </p>
    </div>
  );
};
