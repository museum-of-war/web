import { openInNewTab } from '@sections/utils';
import React, { useEffect, useState } from 'react';
import { useViewPort } from '@hooks/useViewport';

const Media = (summary: string, outlet: string, url: string, key: number) => {
  return (
    <div key={key} className="flex flex-col justify-start items-start">
      <p className="font-rlight text-16px mt-20px">{outlet}</p>
      <p className="font-rnarrow mobile:text-18px desktop:text-18px mt-10px">
        {summary}
      </p>
      <button
        className="mt-auto"
        onClick={() => {
          openInNewTab(url);
        }}
      >
        <p className="font-rblack tablet:mt-30px mobile:mt-10px py-5px border-b-4 hover:border-carbon hover:border-b-4  hover:border-solid border-transparent">
          Read Article
        </p>
      </button>
    </div>
  );
};

const media = [
  {
    summary:
      'Kalush Orchestra, the winners of the Eurovision Song Contest 2022, are auctioning off an NFT for charity. The auction started May 25 on MetaHistory — the official Ukrainian charitable NFT museum – and will last only until the 28th.',
    outlet: 'Bitcoin.com',
    url: 'https://news.bitcoin.com/eurovision-song-contest-2022-winners-release-nft-for-ukraine-charity-auction/',
  },
  {
    summary:
      "Ukraine's government has said it will issue non-fungible tokens (NFTs) to fund its military as they defend the country against the Russian invasion.",
    outlet: 'BBC',
    url: 'https://www.bbc.co.uk/news/business-60613613',
  },
  {
    summary:
      'The Ukrainian government is to launch a non-fungible token marking the history of the Russian invasion with unique digital art, in its latest use of digital assets to fund its war efforts.',
    outlet: 'The Guardian',
    url: 'https://www.theguardian.com/world/2022/mar/13/ukraine-nft-history-of-russian-invasion-war',
  },
  {
    summary:
      'After careful consideration we decided to cancel airdrop,” Mr Fedorov tweeted … “Instead, we will announce NFTs to support Ukrainian Armed Forces soon. We DO NOT HAVE any plans to issue any fungible tokens.',
    outlet: 'The Independent',
    url: 'https://www.independent.co.uk/tech/ukraine-nft-russia-crypto-airdrop-war-b2027648.html',
  },
  {
    summary:
      'Ukraine plans to become the first developed country to issue its own collection of non-fungible tokens, as it looks to capitalise on a flood of crypto donations to back its war against Russia.',
    outlet: 'Financial Times',
    url: 'https://www.ft.com/content/b4e13435-a818-4d80-94a4-4149a702a094',
  },
  {
    summary:
      'In addition to raising funds for Ukraine’s military, the NFT campaign seems to be targeted in opposition to Russian state media which many worldwide have criticized for spreading propaganda and misinformation, particularly in regard to the events in Ukraine following Feb. 24.',
    outlet: 'Cointelegraph',
    url: 'https://cointelegraph.com/news/ukraine-launches-nft-museum-to-keep-the-memory-of-war',
  },
  {
    summary:
      'The Ukrainian government raised more than $600,000 through nonfungible token sales that will be used to rebuild museums, theaters and other cultural institutions destroyed since Russia’s invasion in February.',
    outlet: 'Bloomberg',
    url: 'https://www.bloomberg.com/news/articles/2022-04-01/ukrainian-government-raises-600-000-through-museum-nft-sales',
  },
  {
    summary:
      'With a brewing partnership with the Ministry of Culture, the funds raised from the auction exclusive for NFT holders shall be used to recover the damaged historical and cultural heritage of Ukraine.',
    outlet: 'CoinQuora',
    url: 'https://coinquora.com/ukraines-metahistory-museum-of-war-initiative-to-hold-nft-auction/',
  },
  {
    summary: `The 'Meta History: Museum of War' collection is a series of digital images - including silhouettes of warplanes, screengrabs of news reports and a cartoon-style image of an explosion - each one marking a different day in the conflict.`,
    outlet: 'Reuters',
    url: 'https://www.reuters.com/technology/ukraine-launches-nft-museum-war-crypto-crowdfunding-push-2022-03-25/',
  },
  {
    summary:
      'But not only are the NFTs intended to raise funds, 100% of which, according to the website, will go directly to the official crypto-accounts of the Ministry of Digital Transformation of Ukraine to support army and civilians, but will also bring to light Russia’s invasion of Ukraine.',
    outlet: 'Fortune',
    url: 'https://fortune.com/2022/03/29/ukraine-selling-nfts-war-bonds-meta-history-museum/',
  },
];

const ContentMedia = () => {
  const { isMobile, isDesktop } = useViewPort();
  const [startIdx, setStartIdx] = useState(0);
  const [disabledLeft, setDisabledLeft] = useState(!!startIdx);
  const [disabledRight, setDisabledRight] = useState(false);
  const [toShow, setToShow] = useState<any[]>([]);
  const [itemsOnPage, setItemsOnPage] = useState(2);

  useEffect(() => {
    setItemsOnPage(2);
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
    <div className="mobile:my-60px tablet:my-100px desktop:my-120px">
      <div className="flex flex-row items-end justify-between">
        <p className="font-rblack tablet:text-70px mobile:text-12vw mobile:leading-12vw tablet:leading-72px uppercase">
          IN PRESS
        </p>
        {isMobile ? (
          <></>
        ) : (
          <div className="flex flex-row mb-15">
            <button
              disabled={disabledLeft}
              onClick={() => setStartIdx(startIdx - itemsOnPage)}
              className={`${
                disabledLeft ? 'opacity-20' : 'opacity-100'
              } tablet:w-48px tablet:h-48px mobile:w-40px mobile:h-40px flex items-center justify-center border-2 border-carbon rounded-full mr-25px`}
            >
              <img src="left_arrow.svg" alt="left_arrow" />
            </button>
            <button
              onClick={() => setStartIdx(startIdx + itemsOnPage)}
              disabled={disabledRight}
              className={`${
                disabledRight ? 'opacity-20' : 'opacity-100'
              } tablet:w-48px tablet:h-48px mobile:w-40px mobile:h-40px flex items-center justify-center border-2 border-carbon rounded-full`}
            >
              <img src="right_arrow.svg" alt="right_arrow" />
            </button>
          </div>
        )}
      </div>

      <div className="h-5px w-100% bg-carbon" />
      <div className="mt-20px flex flex-row">
        <div className="grid tablet:grid-cols-2 desktop:grid-cols-4 mobile:grid-cols-1 auto-rows-max gap-48px">
          {toShow.map((m, idx) => Media(m.summary, m.outlet, m.url, idx))}
        </div>
      </div>
      {isMobile ? (
        <div className="flex flex-row mt-25px">
          <button
            disabled={disabledLeft}
            onClick={() => setStartIdx(startIdx - itemsOnPage)}
            className={`${
              disabledLeft ? 'opacity-20' : 'opacity-100'
            } mobile:w-40px mobile:h-40px flex items-center justify-center border-2 border-carbon rounded-full mr-40px`}
          >
            <img src="left_arrow.svg" alt="left_arrow" />
          </button>
          <button
            onClick={() => setStartIdx(startIdx + itemsOnPage)}
            disabled={disabledRight}
            className={`${
              disabledRight ? 'opacity-20' : 'opacity-100'
            } mobile:w-40px mobile:h-40px flex items-center justify-center border-2 border-carbon rounded-full`}
          >
            <img src="right_arrow.svg" alt="right_arrow" />
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ContentMedia;
