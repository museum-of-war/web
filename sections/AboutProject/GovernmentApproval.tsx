import React, { useEffect, useState } from 'react';
import { useViewPort } from '@hooks/useViewport';
import Blurb from '@sections/AboutProject/Blurb';
import { MediaItem } from '@sections/AboutProject/MediaItem';

const media = [
  {
    summary:
      'Ministry of Digital Transformation: The Metahistory Museum has raised more than $600,000 to support Ukraine',
    outlet: 'kmu.gov.ua',
    url: 'https://www.kmu.gov.ua/en/news/mincifri-muzej-metaistoriyi-zibrav-ponad-600-tisyach-dolariv-na-pidtrimku-ukrayini',
    linkText: 'Read Article'
  },
  {
    summary: 'Help Ukraine with NFTs, don’t leave us alone with the enemy',
    outlet: 'donate.thedigital.gov.ua',
    url: 'https://donate.thedigital.gov.ua/nft',
    linkText: 'Go to the platform'
  },
  {
    summary:
      'Мінцифра та блокчейн-спільнота запустили NFT-музей війни путінської Росії проти України',
    outlet: 'thedigital.gov.ua',
    url: 'https://thedigital.gov.ua/news/mintsifra-ta-blokcheyn-spilnota-zapustili-nft-muzey-viyni-putinskoi-rosii-proti-ukraini',
    linkText: 'Read Article'
  },
  {
    summary:
      'Official twitter of th Ministry of Culture and Information Policy',
    outlet: '@MKIPUkraine',
    url: 'https://twitter.com/MKIPUkraine/status/1531248215823196161',
    linkText: 'View Tweet'
  },
];
const GovernmentApproval = () => {
  const { isMobile, isDesktop } = useViewPort();
  const [startIdx, setStartIdx] = useState(0);
  const [disabledLeft, setDisabledLeft] = useState(!!startIdx);
  const [disabledRight, setDisabledRight] = useState(false);
  const [toShow, setToShow] = useState<any[]>([]);
  const [itemsOnPage, setItemsOnPage] = useState(2);

  useEffect(() => {
    setItemsOnPage(4);
    if (isMobile) setItemsOnPage(1);
    if (isDesktop) setItemsOnPage(4);
    if (startIdx <= 0) {
      setDisabledLeft(true);
    } else {
      setDisabledLeft(false);
    }
    if (startIdx + itemsOnPage >= media.length) {
      setDisabledRight(true);
    } else {
      setDisabledRight(false);
    }
    if (media.length <= itemsOnPage) {
      setToShow(media);
      return;
    }
    const toShow = media.slice(startIdx, startIdx + itemsOnPage);
    setToShow(toShow);
  }, [isMobile, isDesktop, startIdx, itemsOnPage]);

  return (
    <div className="bg-carbon mx-auto">
      <div className="desktop:container desktop:px-132px tablet:px-72px mobile:px-24px mx-auto bg-carbon text-white desktop:py-120px tablet:py-[96px] mobile:py-60px">
        <Blurb header="Approved by the ukrainian government" isDark />

        {isMobile || media.length <= 4 ? (
          <></>
        ) : (
          <div className="flex flex-row mb-15">
            <button
              disabled={disabledLeft}
              onClick={() => setStartIdx(startIdx - itemsOnPage)}
              className={`${
                disabledLeft ? 'opacity-20' : 'opacity-100'
              } tablet:w-48px tablet:h-48px mobile:w-40px mobile:h-40px flex items-center justify-center border-2 border-white rounded-full mr-25px`}
            >
              <img src="img/left_arrow_white.svg" alt="img/left_arrow" />
            </button>
            <button
              onClick={() => setStartIdx(startIdx + itemsOnPage)}
              disabled={disabledRight}
              className={`${
                disabledRight ? 'opacity-20' : 'opacity-100'
              } tablet:w-48px tablet:h-48px mobile:w-40px mobile:h-40px flex items-center justify-center border-2 border-white rounded-full`}
            >
              <img src="img/right_arrow_white.svg" alt="img/right_arrow" />
            </button>
          </div>
        )}
        <div className="mt-20px flex flex-row">
          <div className="grid tablet:grid-cols-2 desktop:grid-cols-4 mobile:grid-cols-1 auto-rows-max gap-48px">
            {toShow.map((m) => (
              <MediaItem
                summary={m.summary}
                outlet={m.outlet}
                url={m.url}
                key={m.url}
                linkText={m.linkText}
                isBlackBg
              />
            ))}
          </div>
        </div>
        {isMobile ? (
          <div className="flex flex-row mt-25px">
            <button
              disabled={disabledLeft}
              onClick={() => setStartIdx(startIdx - itemsOnPage)}
              className={`${
                disabledLeft ? 'opacity-20' : 'opacity-100'
              } mobile:w-40px mobile:h-40px flex items-center justify-center border-2 border-white rounded-full mr-40px`}
            >
              <img src="img/left_arrow_white.svg" alt="img/left_arrow" />
            </button>
            <button
              onClick={() => setStartIdx(startIdx + itemsOnPage)}
              disabled={disabledRight}
              className={`${
                disabledRight ? 'opacity-20' : 'opacity-100'
              } mobile:w-40px mobile:h-40px flex items-center justify-center border-2 border-white rounded-full`}
            >
              <img src="img/right_arrow_white.svg" alt="img/right_arrow" />
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default GovernmentApproval;
