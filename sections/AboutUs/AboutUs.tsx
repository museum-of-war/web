import React, { useEffect, useState } from 'react';
import { Collapse } from '@mui/material';
import Blurb from '@sections/AboutProject/Blurb';
import Team from '@sections/AboutProject/Team';
import SupportProject from '@sections/AboutProject/SupportProject';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { Links as AboutUsLinks } from './Links';
import { Links } from '@components/Links';
import { ACHIEVE_DATA } from '@sections/AboutUs/constants';
import { useVideoModal } from '@providers/VideoProvider';
import ContainerDimensions from 'react-container-dimensions';

const CollapsedSection = () => {
  const { VideoElement } = useVideoModal();

  return (
    <div className="flex flex-col">
      <Blurb
        header="ABOUT US"
        rightContent={<AboutUsLinks />}
        english={
          'MetaHistory NFT museum is created to commemorate the history of the current events in Ukraine, preserve the truth, and collect donations for humanitarian aid. We have a new take on the role of art in society – it must be relevant, courageous, activist. And eternal.'
        }
        ukrainian={
          'Музей MetaHistory NFT створений з метою увічнення історії поточних подій в Україні, збереження правди та збору пожертв на гуманітарну допомогу. Ми по-новому ставимося до ролі мистецтва в суспільстві – воно має бути актуальним, відважним, наполегливим. І вічним.'
        }
      />
      <ContainerDimensions>
        {({ width }) => (
          <VideoElement
            videoSrc="https://www.youtube-nocookie.com/embed/gUHU4UX8Rs4"
            classNames="w-full desktop:mt-48px tablet:mt-48px mobile:mt-20px"
            styles={{ height: (width / 16) * 9 }}
          />
        )}
      </ContainerDimensions>
      <Blurb
        classNames="desktop:mt-48px tablet:mt-24px mobile:mt-24px"
        english={
          "In Argentina, there's the Cave of the Hands - a nearly 10.000 years old site, where our ancestors left prints of their hands on the stone walls. By pure luck, this mind-altering art piece was preserved until our time. At MetaHistory, we don't want to leave it to luck. We aim to preserve the artworks of the war in Ukraine and beyond - immutable, on the blockchain, forever, for the future generations.\n\n" +
          'To achieve that, a non-profit, decentralized, community-driven team of Ukrainian crypto experts & top-notch artists has come together.'
        }
        ukrainian={
          "В Аргентині є Печера рук - місце, якому майже 10 000 років, де наші предки залишили відбитки своїх рук на кам'яних стінах. На щастя, цей витвір мистецтва, що змінює свідомість, зберігся до нашого часу. У MetaHistory ми не хочемо залишати це на волю удачі. Ми прагнемо зберегти твори мистецтва війни в Україні та за її межами – незмінними, на блокчейні, назавжди, для майбутніх поколінь.\n\n" +
          'Щоб досягти цього, об’єдналася неприбуткова, децентралізована, керована спільнотами команда українських експертів із криптовалют і першокласних художників.'
        }
      />
    </div>
  );
};

const AboutUs = () => {
  const { getTotalFundsRaised } = useWeb3Modal();
  const [fundsRaised, setFundsRaised] = useState({ eth: '', usd: '' });
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    getTotalFundsRaised().then(setFundsRaised);
  }, []);

  return (
    <div>
      <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
        <div className="desktop:hidden tablet:hidden mobile:flex flex-col">
          <Collapse collapsedSize={550} in={!collapsed}>
            <CollapsedSection />
          </Collapse>
          <div className="flex items-center h-40px">
            <button
              className="font-rblack mr-auto h-0 flex flex-row"
              onClick={() => setCollapsed(!collapsed)}
            >
              <span>{collapsed ? 'Show more' : 'Show less'}</span>
              <span className={`ml-[5px] ${collapsed ? 'rotate-180' : ''}`}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 7.41381L21.2929 16.7067C21.6834 17.0972 22.3166 17.0972 22.7071 16.7067C23.0976 16.3162 23.0976 15.683 22.7071 15.2925L12.7778 5.3632C12.3482 4.93362 11.6518 4.93362 11.2222 5.3632L1.29289 15.2925C0.902368 15.683 0.902368 16.3162 1.29289 16.7067C1.68342 17.0972 2.31658 17.0972 2.70711 16.7067L12 7.41381Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="desktop:flex tablet:flex mobile:hidden">
          <CollapsedSection />
        </div>
        <div className="desktop:my-60px tablet:my-48px mobile:my-60px">
          <div className="desktop:hidden tablet:hidden mobile:flex">
            <Links />
          </div>
        </div>
        <Blurb header="How we work" />
        <div className="pt-20px relative flex desktop:flex-row tablet:flex-col mobile:flex-col font-rnarrow mobile:leading-20px tablet:leading-24px mobile:text-14px tablet:text-16px tablet:justify-between">
          <div className="pt-10 desktop:w-[544px] tablet:w-full mobile:w-full mobile:mb-6%">
            <video src="/vid/how_we_work_animation.mp4" autoPlay loop muted />
          </div>
          <div className="desktop:w-[544px] tablet:w-full mobile:w-full flex desktop:flex-wrap tablet:flex-wrap mobile:flex-nowrap content-start desktop:flex-row tablet:flex-row mobile:flex-col">
            <div className="desktop:w-[248px] tablet:w-[248px] mobile:w-full desktop:mt-0 tablet:mt-0 mobile:mt-[30px]">
              <p className="font-rblack text-32px mb-24px">1</p>
              We pick news pieces of important events of the war in Ukraine
            </div>
            <div className="desktop:w-[248px] tablet:w-[248px] mobile:w-full desktop:mt-0 tablet:mt-0 mobile:mt-[30px] ml-auto">
              <p className="font-rblack text-32px mb-24px">2</p>
              Top-notch artists create artworks - their interpretations of the
              news content & meaning
            </div>
            <div className="desktop:w-[248px] tablet:w-[248px] mobile:w-full desktop:mt-[48px] tablet:mt-[72px] mobile:mt-[30px]">
              <p className="font-rblack text-32px mb-24px">3</p>
              We do some smart contract magic to place these artworks as NFTs on
              the Ethereum blockchain
            </div>
            <div className="desktop:w-[248px] tablet:w-[248px] mobile:w-full desktop:mt-[48px] tablet:mt-[72px] mobile:mt-[30px] ml-auto ">
              <p className="font-rblack text-32px mb-24px">4</p>
              We release NFTs to the world in parts, so-called drops. First one
              has happened on March 30
            </div>
            <div className="desktop:w-[248px] tablet:w-[248px] mobile:w-full desktop:mt-[48px] tablet:mt-[72px] mobile:mt-[30px]">
              <p className="font-rblack text-32px mb-24px">5</p>
              Art lovers, Ukraine's supporters, NFT communities come along and
              buy them, transferring cryptocurrency
            </div>
            <div className="desktop:w-[248px] tablet:w-[248px] mobile:w-full desktop:mt-[48px] tablet:mt-[72px] mobile:mt-[30px] ml-auto">
              <p className="font-rblack text-32px mb-24px">6</p>
              100% of the proceeds are automatically transferred to the Ministry
              of Digital Transformation of Ukraine
            </div>
          </div>
        </div>
      </div>
      <div className="bg-carbon desktop:mt-0 tablet:mt-120px mobile:mt-60px">
        <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px desktop:py-120px tablet:py-96px mobile:py-40px text-white">
          <Blurb
            header="What we achieved"
            isDark
            classNames="desktop:mb-64px tablet:mb-64px mobile:mb-32px"
          />
          <div className="flex desktop:flex-row tablet:flex-col mobile:flex-col justify-between">
            <div className="desktop:w-[544px] tablet:w-full mobile:w-full">
              <p className="font-rblack desktop:text-32px tablet:text-32px mobile:text-27px desktop:leading-24px tablet:leading-24px mobile:leading-30px">
                Total funds raised
              </p>
              <p
                className="font-rblack mt-4 ddesktop:text-[70px] desktop:leading-[72px] tablet:text-70px
                tablet:leading-72 px mobile:text-38px mobile:leading-40px desktop:mt-24px tablet:mt-24px
                mobile:mt-20px uppercase"
              >
                ${fundsRaised.usd}
              </p>
              <p className="font-rlight desktop:text-20px tablet:text-20px mobile:text-12px desktop:leading-48px tablet:leading-48px mobile:leading-40px">
                {fundsRaised.eth} ETH
              </p>
            </div>
            <div className="desktop:w-[544px] tablet:w-full mobile:w-full desktop:mt-0 tablet:mt-72px mobile:mt-40px">
              <div className="font-rnarrow leading-24px desktop:w-[544px] tablet:w-full mobile:w-full flex desktop:flex-wrap tablet:flex-wrap mobile:flex-nowrap content-start desktop:flex-row tablet:flex-row mobile:flex-col">
                <div className="desktop:w-[248px] tablet:w-[248px] mobile:w-full desktop:mt-24px tablet:mt-24px mobile:mt-[30px]">
                  <div className="text-[24px]">{ACHIEVE_DATA.nfts}</div>
                  <div className="text-[16px]">NFTs in circulation</div>
                </div>
                <div className="desktop:w-[248px] tablet:w-[248px] mobile:w-full desktop:mt-24px tablet:mt-24px mobile:mt-[30px] ml-auto">
                  <div className="text-[24px]">{ACHIEVE_DATA.auctions}</div>
                  <div className="text-[16px]">auctions</div>
                </div>
                <div className="desktop:w-[248px] tablet:w-[248px] mobile:w-full desktop:mt-24px tablet:mt-24px mobile:mt-[30px]">
                  <div className="text-[24px]">
                    {ACHIEVE_DATA.metaverseEvents}
                  </div>
                  <div className="text-[16px]">events in Metaverse</div>
                </div>
                <div className="desktop:w-[248px] tablet:w-[248px] mobile:w-full desktop:mt-24px tablet:mt-24px mobile:mt-[30px] ml-auto">
                  <div className="text-[24px]">{ACHIEVE_DATA.totalHolders}</div>
                  <div className="text-[16px]">total NFT holders</div>
                </div>
                <div className="desktop:w-[248px] tablet:w-[248px] mobile:w-full desktop:mt-24px tablet:mt-24px mobile:mt-[30px]">
                  <div className="text-[24px]">{ACHIEVE_DATA.warlineDrops}</div>
                  <div className="text-[16px]">
                    official drops on the Warline
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-60px desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
        <Blurb header="Who's behind this" />
        <img alt="partners" src="img/pd-partners.png" />
        <Team />
        <SupportProject />
      </div>
    </div>
  );
};

export default AboutUs;
