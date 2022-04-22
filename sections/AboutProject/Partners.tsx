import InfiniteLoop from '@components/InfiniteLoop';
import React from 'react';
import { useViewPort } from '@hooks/useViewport';

const Partners = () => {
  const { isMobile } = useViewPort();

  const partners = [
    {
      src: 'img/partners/Logo_Ministry_Digital.png',
      alt: 'Ministry_of_Digital_Transformation',
    },
    {
      src: 'img/partners/Logo_of_Ministry_of_Culture_of_Ukraine_(english).png',
      alt: 'Ministry_of_Culture',
    },
    {
      src: 'img/partners/fair.png',
      alt: 'FAIR',
    },
    {
      src: 'img/partners/market_across.png',
      alt: 'market_across',
    },
    {
      src: 'img/partners/party_space.png',
      alt: 'party_space',
    },
    {
      src: 'img/partners/hacken.png',
      alt: 'hacken',
    },
    {
      src: 'img/partners/kuna.png',
      alt: 'kuna',
    },
    {
      src: 'img/partners/blockchain_association.png',
      alt: 'blockchain_association',
    },
    {
      src: 'img/partners/projector.png',
      alt: 'projector',
    },
    {
      src: 'img/partners/disbalancer.png',
      alt: 'disbalancer',
    },
    {
      src: 'img/partners/financevote.png',
      alt: 'financevote',
    },
    {
      src: 'img/partners/vector.png',
      alt: 'vector',
    },
  ];

  const partnersSmall = [
    {
      src: 'img/partners/small/Ministry_of_Digital_small.png',
      alt: 'Ministry_of_Digital_Transformation',
    },
    {
      src: 'img/partners/small/Ministry_of_Culture_of_Ukraine_small.png',
      alt: 'Ministry_of_Culture',
    },
    {
      src: 'img/partners/small/fair_small.png',
      alt: 'FAIR',
    },
    {
      src: 'img/partners/small/market_across_small.png',
      alt: 'market_across',
    },
    {
      src: 'img/partners/small/party_space_small.png',
      alt: 'party_space',
    },
    {
      src: 'img/partners/small/hacken_small.png',
      alt: 'hacken',
    },
    {
      src: 'img/partners/small/kuna_small.png',
      alt: 'kuna',
    },
    {
      src: 'img/partners/small/blockchain_association_small.png',
      alt: 'blockchain_association',
    },
    {
      src: 'img/partners/small/projector_small.png',
      alt: 'projector',
    },
    {
      src: 'img/partners/small/disbalancer_small.png',
      alt: 'disbalancer',
    },
    {
      src: 'img/partners/small/financevote_small.png',
      alt: 'financevote',
    },
    {
      src: 'img/partners/small/vector_small.png',
      alt: 'vector',
    },
  ];

  return (
    <div className="laptop:mt-120px tablet:mt-175px">
      <p className="font-rblack mobile:text-38px mobile:leading-12vw tablet:text-9vw tablet:leading-9vw laptop:text-5vw laptop:leading-5.5vw uppercase">
        PARTNERS
      </p>
      <div className="h-5px w-100% tablet:mb-16px mobile:mb-12px bg-carbon dark:bg-white" />
      <InfiniteLoop speed={20} direction={'left'} className={'tablet:h-192px mobile:h-80px'}>
        {
          isMobile
            ? partnersSmall.map((partner, idx) => (
              <img className='ml-80px' key={idx} src={`${partner.src}`} alt={partner.alt} />
            ))
            : partners.map((partner, idx) => (
              <img className="ml-144px" key={idx} src={`${partner.src}`} alt={partner.alt} />
            ))
        }
      </InfiniteLoop>
      <div className="h-5px w-100% tablet:mt-16px mobile:mt-12px bg-carbon dark:bg-white" />
    </div>
  )
}

export default Partners;
