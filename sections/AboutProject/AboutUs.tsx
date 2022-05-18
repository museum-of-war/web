import React from 'react';
import Blurb from '@sections/AboutProject/Blurb';
import { useAppRouter } from '@hooks/useAppRouter';

const AboutUs = () => {
  const { push } = useAppRouter();

  return (
    <>
      <div className="desktop:flex desktop:flex-row desktop:justify-between mt-20 tablet:mb-75px mobile:mb-8%">
        <div className="desktop:w-[544px] tablet:w-full mobile:w-full tablet:mt-0 mobile:mt-60px">
          <Blurb header="About us" />
          <div className="pt-20px relative tablet:flex tablet:flex-row font-rnarrow mobile:leading-20px tablet:leading-24px mobile:text-14px tablet:text-16px tablet:justify-between">
            <p className="whitespace-pre-wrap pt-10 tablet:w-45% mobile:mb-6%">
              At MetaHistory, we want to preserve the important events of
              history as they are. Truthful, eternal, immutable.
            </p>
            <p className="whitespace-pre-wrap tablet:w-45%">
              У MetaHistory ми хочемо зберегти важливі події в історії такими,
              якими вони є. Правдивими, вічними, незмінними.
            </p>
          </div>
        </div>
        <div className="desktop:w-[544px] tablet:w-full mobile:w-full mobile:mt-40px tablet:mt-72px desktop:mt-0">
          <img
            alt="partners"
            src="img/pd-partners-mini-desktop.png"
            className="tablet:hidden mobile:hidden desktop:flex "
          />
          <img
            alt="partners"
            src="img/pd-partners-mini-tablet.png"
            className="desktop:hidden mobile:hidden tablet:flex"
          />
          <img
            alt="partners"
            src="img/pd-partners-mini-mobile.png"
            className="desktop:hidden tablet:hidden mobile:flex"
          />
        </div>
      </div>
      <button
        onClick={() => {
          push('/about-us');
        }}
        className="font-rblack relative px-30px border-2 border-carbon rounded-full tablet:text-14px
            tablet:leading-44px tablet:mt-0 tablet:ml-auto mobile:text-14px mobile:leading-36px mobile:mt-20px
            mobile:ml-0 px-48px mb-0 tablet:h-48px mobile:h-60px mobile:w-100% tablet:w-auto"
      >
        More about project
      </button>
    </>
  );
};

export default AboutUs;
