import React, { HTMLAttributes } from 'react';
import {
  BAU_LINK,
  MINISTRY_DT_LINK,
  MINISTRY_CULTURE_LINK,
} from '@sections/constants';

interface Supporter {
  name: string;
  src: string;
  link: string;
  className?: HTMLAttributes<HTMLDivElement>['className'];
}

const supporters: Supporter[] = [
  {
    name: 'Ministry of Digital Transformation',
    src: 'img/Logo_of_Ministry_of_Digital_Transformation.svg',
    link: MINISTRY_DT_LINK,
    className: 'max-h-[36px] tablet:max-h-[42px] desktop:max-h-[38px]',
  },
  {
    name: 'Superheroes.',
    src: 'img/partners/superheroes.png',
    link: 'https://superheroes.ua/',
    className: 'max-h-[22px] tablet:max-h-[24px] desktop:max-h-[20px]',
  },
  {
    name: 'Ministry of Culture of Ukraine',
    src: 'img/partners/Logo_of_Ministry_of_Culture_of_Ukraine.svg',
    link: MINISTRY_CULTURE_LINK,
    className: 'max-h-[32px] tablet:max-h-[42px] desktop:max-h-[38px]',
  },
  {
    name: 'Blockchain Association of Ukraine',
    src: 'img/partners/blockchain_association.png',
    link: BAU_LINK,
    className: 'max-h-[24px] tablet:max-h-[36px] desktop:max-h-[28px]',
  },
];

const ApprovedAndSupportedBy = () => {
  return (
    <div className="tablet:mt-48px desktop:mt-24px mt-20px flex flex-col gap-8px">
      <p className="font-rnarrow text-14px leading-20px tablet:text-16px tablet:leading-36px">
        National NFT platform approved & supported by:
      </p>
      <div className="flex gap-16px items-center flex-wrap">
        {supporters.map(({ link: url, src: imgUrl, name, className }) => (
          <a key={url} href={url} target="_blank" rel="noreferrer">
            <img src={imgUrl} alt={name} className={`w-full ${className}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ApprovedAndSupportedBy;
