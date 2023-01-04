import React from 'react';
import Blurb from '@sections/AboutProject/Blurb';

interface Partner {
  src: string;
  alt: string;
  link: string;
}

const partners: Partner[] = [
  {
    alt: 'Ministry of Education and Science of Ukraine',
    src: 'img/partners/mon.svg',
    link: 'https://mon.gov.ua/eng',
  },
  {
    src: '/img/partners/Logo_Ministry_Digital.png',
    alt: 'Ministry of Digital Transformation',
    link: 'https://thedigital.gov.ua/',
  },
  {
    src: '/img/partners/fair.png',
    alt: 'FAIR',
    link: 'https://fair.xyz/',
  },
  {
    src: '/img/partners/kindustry.png',
    alt: 'Kindustry',
    link: 'https://www.kindustryandco.com/',
  },
  {
    src: '/img/partners/market_across.png',
    alt: 'MarketAcross',
    link: 'https://marketacross.com/',
  },
  {
    src: '/img/partners/party_space.png',
    alt: 'Party.Space',
    link: 'https://www.party.space/',
  },
  {
    src: '/img/partners/hacken.png',
    alt: 'Hacken',
    link: 'https://hackenfoundation.com/',
  },
  {
    src: '/img/partners/kuna.png',
    alt: 'Kuna',
    link: 'https://kuna.io/',
  },
  {
    src: '/img/partners/blockchain_association.png',
    alt: 'Blockchain Association',
    link: 'https://bau.ai/',
  },
  {
    src: '/img/partners/projector.png',
    alt: 'Projector',
    link: 'https://prjctr.com/',
  },
  {
    src: '/img/partners/disbalancer.png',
    alt: 'Disbalancer',
    link: 'https://disbalancer.com/',
  },
  {
    src: '/img/partners/financevote.png',
    alt: 'Finance.Vote',
    link: 'https://finance.vote/',
  },
  {
    src: '/img/partners/Logo_of_Ministry_of_Culture_of_Ukraine.png',
    alt: 'Ministry of Culture of Ukraine',
    link: 'https://mkip.gov.ua/',
  },
  {
    src: '/img/partners/lliwell.png',
    alt: 'LLIWELL',
    link: 'https://www.instagram.com/lliwell/', // website is not working: https://lliwell.com/
  },
  {
    src: '/img/partners/NFT_News_Today.png',
    alt: 'NFT News Today',
    link: 'https://nftnewstoday.com/',
  },
  {
    src: '/img/partners/army_inform.png',
    alt: 'АрміяInform',
    link: 'https://armyinform.com.ua/',
  },
  {
    src: '/img/partners/lobby_x.png',
    alt: 'Lobby X',
    link: 'https://thelobbyx.com/',
  },
  {
    src: '/img/partners/bitcoin_dot_com.png',
    alt: 'Bitcoin.com',
    link: 'https://www.bitcoin.com/',
  },
  {
    src: '/img/partners/superheroes.png',
    alt: 'Superheroes.',
    link: 'https://superheroes.ua/',
  },
  {
    src: '/img/partners/nft_calendar.png',
    alt: 'NFT Calendar',
    link: 'https://nftcalendar.io/',
  },
];

const Partners = () => {
  return (
    <div className="desktop:py-120px tablet:py-[96px] mobile:py-60px">
      <Blurb header="Partners" />
      <div className="py-24px tablet:py-40px grid gap-x-32px gap-y-40px tablet:gap-x-56px tablet:gap-y-64px grid-cols-2 tablet:grid-cols-3 new_md:grid-cols-4 desktop:grid-cols-4 items-center">
        {partners.map((partner, idx) => (
          <a
            key={idx}
            className="new_md:grayscale new_md:hover:grayscale-0 transition-all duration-300 ease-in"
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="max-h-[80px] "
              src={partner.src}
              alt={partner.alt}
              loading="lazy"
            />
          </a>
        ))}
      </div>
      <div className="h-5px w-100% tablet:mb-16px mobile:mb-12px bg-carbon dark:bg-white" />
    </div>
  );
};

export default Partners;
