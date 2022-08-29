import InfiniteLoop from '@components/InfiniteLoop';
import React from 'react';
import { useViewPort } from '@hooks/useViewport';
import Blurb from '@sections/AboutProject/Blurb';

const Partners = () => {
  const { isMobile } = useViewPort();

  const partners = [
    {
      src: 'img/partners/Logo_Ministry_Digital.png',
      alt: 'Ministry of Digital Transformation',
    },
    {
      src: 'img/partners/fair.png',
      alt: 'FAIR',
    },
    {
      src: 'img/partners/market_across.png',
      alt: 'MarketAcross',
    },
    {
      src: 'img/partners/party_space.png',
      alt: 'Party.Space',
    },
    {
      src: 'img/partners/hacken.png',
      alt: 'Hacken',
    },
    {
      src: 'img/partners/kuna.png',
      alt: 'Kuna',
    },
    {
      src: 'img/partners/blockchain_association.png',
      alt: 'Blockchain Association',
    },
    {
      src: 'img/partners/projector.png',
      alt: 'Projector',
    },
    {
      src: 'img/partners/disbalancer.png',
      alt: 'Disbalancer',
    },
    {
      src: 'img/partners/financevote.png',
      alt: 'Finance.Vote',
    },
    {
      src: 'img/partners/Logo_of_Ministry_of_Culture_of_Ukraine.png',
      alt: 'Ministry of Culture of Ukraine',
    },
    /*
    {
      src: 'img/partners/vector.png',
      alt: 'Vector',
    },
    */
    {
      src: 'img/partners/lliwell.png',
      alt: 'LLIWELL',
    },
    {
      src: 'img/partners/NFT_News_Today.png',
      alt: 'NFT News Today',
    },
    {
      src: 'img/partners/nevgamovni.png',
      alt: 'Невгамовні',
    },
    {
      src: 'img/partners/army_inform.png',
      alt: 'АрміяInform',
    },
    /*
    {
      src: 'img/partners/molfar.png',
      alt: 'Molfar',
    },
     */
    {
      src: 'img/partners/lobby_x.png',
      alt: 'Lobby X',
    },
    {
      src: 'img/partners/bitcoin_dot_com.png',
      alt: 'Bitcoin.com',
    },
  ];

  const partnersSmall = [
    {
      src: 'img/partners/small/Ministry_of_Digital_small.png',
      alt: 'Ministry of Digital Transformation',
    },
    {
      src: 'img/partners/small/fair_small.png',
      alt: 'FAIR',
    },
    {
      src: 'img/partners/small/market_across_small.png',
      alt: 'MarketAcross',
    },
    {
      src: 'img/partners/small/party_space_small.png',
      alt: 'Party.Space',
    },
    {
      src: 'img/partners/small/hacken_small.png',
      alt: 'Hacken',
    },
    {
      src: 'img/partners/small/kuna_small.png',
      alt: 'Kuna',
    },
    {
      src: 'img/partners/small/blockchain_association_small.png',
      alt: 'Blockchain Association',
    },
    {
      src: 'img/partners/small/projector_small.png',
      alt: 'Projector',
    },
    {
      src: 'img/partners/small/disbalancer_small.png',
      alt: 'Disbalancer',
    },
    {
      src: 'img/partners/small/financevote_small.png',
      alt: 'Finance.Vote',
    },
    {
      src: 'img/partners/small/Logo_of_Ministry_of_Culture_of_Ukraine_small.png',
      alt: 'Ministry of Culture of Ukraine',
    },
    /*
    {
      src: 'img/partners/small/vector_small.png',
      alt: 'Vector',
    },
    */
    {
      src: 'img/partners/small/lliwell_small.png',
      alt: 'LLIWELL',
    },
    {
      src: 'img/partners/small/NFT_News_Today_small.png',
      alt: 'NFT News Today',
    },
    {
      src: 'img/partners/small/nevgamovni_small.png',
      alt: 'Невгамовні',
    },
    {
      src: 'img/partners/small/army_inform_small.png',
      alt: 'АрміяInform',
    },
    /*
    {
      src: 'img/partners/small/molfar_small.png',
      alt: 'Molfar',
    },
     */
    {
      src: 'img/partners/small/lobby_x_small.png',
      alt: 'Lobby X',
    },
    {
      src: 'img/partners/small/bitcoin_dot_com_small.png',
      alt: 'Bitcoin.com',
    },
  ];

  return (
    <div className="desktop:py-120px tablet:py-[96px] mobile:py-60px">
      <Blurb header="Partners" />
      {isMobile ? (
        <InfiniteLoop speed={partnersSmall.length * 2.5} className={'h-80px'}>
          {partnersSmall.map((partner, idx) => (
            <img
              className="mr-80px"
              key={idx}
              src={partner.src}
              alt={partner.alt}
            />
          ))}
        </InfiniteLoop>
      ) : (
        <InfiniteLoop speed={partners.length * 2.5} className={'h-192px'}>
          {partners.map((partner, idx) => (
            <img
              className="mr-144px"
              key={idx}
              src={partner.src}
              alt={partner.alt}
            />
          ))}
        </InfiniteLoop>
      )}
      <div className="h-5px w-100% tablet:mb-16px mobile:mb-12px bg-carbon dark:bg-white" />
    </div>
  );
};

export default Partners;
