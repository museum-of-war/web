import React, { useEffect } from 'react';
import { JavascriptViewer } from '@3dweb/360javascriptviewer';
import Blurb from '@sections/AboutProject/Blurb';
import { useViewPort } from '@hooks/useViewport';
import { ITEMS } from '@constants/collections/IncredibleRooster/constants';

const IncredibleRooster = () => {
  const { isDesktop, isMobile, isTablet } = useViewPort();

  useEffect(() => {
    ITEMS.forEach((item) => {
      const viewer = new JavascriptViewer({
        mainHolderId: `jsv-holder-${item.id}`,
        mainImageId: `jsv-image-${item.id}`,
        totalFrames: 360,
        speed: 120,
        defaultProgressBar: true,
        mainImageUrl: `${item.url}/0001.jpg`,
        imageUrlFormat: `${item.url}/xxxx.jpg`,
        autoRotate: 7200,
        autoRotateSpeed: 30,
      });

      viewer.start();

      return viewer;
    });
  }, []);

  return (
    <div>
      <div className="relative desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
        <Blurb
          header="Incredible Rooster"
          english={`Using 3D design we created a digital copy of the famous in Ukraine Borodyanskiy rooster — a ceramic piece, which turned out to be one of the few objects that survived the Russian occupation in March 2022 in a small town near Kyiv. The rooster has become one of the symbols of resilience in our country.

NFT versions of the rooster, recreated in the style of famous paintings, will appear on the websites of museums around the world to attract the attention of art lovers to the cultural symbol of our struggle.`}
          ukrainian={`За допомогою 3D-дизайну ми створили цифрову копію відомого в Україні Бородянського півня — виріб з кераміки, який виявився одним із небагатьох об’єктів, які пережили російську окупацію в березні 2022 року в маленькому містечку під Києвом. Цей півень став одним із символів стійкості в нашій країні.           

NFT-версії півня, відтворені в стилі відомих картин, з’являться на сайтах музеїв по всьому світу, щоб привернути увагу поціновувачів мистецтва до культурного символу нашої боротьби.`}
        />
      </div>
      {isTablet ? (
        <div
          className="absolute z-1 bg-no-repeat w-[694px] h-[552px]"
          style={{
            backgroundImage: 'url(/img/theHall/bg-tablet.svg)',
          }}
        />
      ) : null}
      {isMobile ? (
        <div
          className="absolute z-1 bg-no-repeat w-[320px] h-[340px]"
          style={{
            backgroundImage: 'url(/img/theHall/bg-mobile.svg)',
          }}
        />
      ) : null}
      <div className="relative desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px relative z-1 desktop:mb-[120px] tablet:mb-[120px] mobile:mb-[20px]">
        {isDesktop ? (
          <div className="sticky pt-[100px] top-[100px]">
            <div
              className="z-1 bg-no-repeat w-[652px] h-[501px] bg-contain top-[100px]"
              style={{
                backgroundImage: 'url(/img/theHall/bg-desktop.svg)',
              }}
            />
          </div>
        ) : null}
        <div className={`${isDesktop ? 'mt-[-520px]' : ''}`}>
          {ITEMS.map((item) => (
            <div
              key={item.id}
              className="desktop:mt-[70px] tablet:mt-[48px] mobile:mt-[40px] desktop:ml-[130px] tablet:ml-0 mobile:ml-0"
              style={{ background: 'white' }}
            >
              <div className="flex desktop:flex-row tablet:flex-col mobile:flex-col">
                <div id={`jsv-holder-${item.id}`} className="player-container">
                  <img
                    id={`jsv-image-${item.id}`}
                    alt="example"
                    src={`${item.url}/0001.jpg`}
                  />
                </div>
                <div className="desktop:w-[344px] tablet:w-full mobile:w-full desktop:pl-[48px] desktop:pt-[48px] tablet:pl-[48px] tablet:pt-[24px] mobile:pl-[24px] mobile:pt-[20px]">
                  <div className="font-rblack desktop:text-[20px] desktop:leading-[24px] tablet:text-[20px] tablet:leading-[24px] mobile:text-[27px] mobile:leading-[30px]">
                    {item.museum}
                  </div>
                  <div className="font-rnarrow desktop:text-[16px] desktop:leading-[24px] tablet:text-[16px] tablet:leading-[24px] mobile:text-[14px] mobile:leading-[20px] desktop:mt-[24px] tablet:mt-[24px] mobile:mt-[20px]">
                    {item.name}
                  </div>
                  <div className="font-rlight desktop:text-[14px] desktop:leading-[48px] tablet:text-[14px] tablet:leading-[48px] mobile:text-[14px] mobile:leading-[40px]">
                    {item.author}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncredibleRooster;
