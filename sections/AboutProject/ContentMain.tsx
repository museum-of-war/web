import React from 'react';
import { useViewPort } from '@hooks/useViewport';

const ContentMain = () => {
  const { isMobile } = useViewPort();

  return (
    <div className="bg-carbon mx-auto">
      {isMobile ? (
        <div className="text-white px-24px py-60px">
          <div>
            <p className="font-rblack text-29px uppercase mb-40px leading-30px">
              We will never let any single day of this period disappear from the
              ledger of world history.
            </p>
            <div className="flex relative flex-row justify-end">
              <img
                className="h-100% mr-auto"
                alt="dots"
                src="/img/pd-dotsHorizontalSmall.svg"
              />
              <div className="font-rnarrow text-14px leading-20px">
                Ми не дамо викреслити
                <br />
                жодного дня цього періоду
                <br />
                зі сторінок світової історії.
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="desktop:container desktop:px-132px tablet:px-72px mx-auto bg-carbon bg-carbon text-white py-120px">
          <div className="flex desktop:flex-row desktop:justify-between tablet:flex-col">
            <p className="font-rblack uppercase tablet:text-70px tablet:leading-72px tablet:w-100% desktop:w-70%">
              We will never let any single day of this period disappear from the
              ledger of world history.
            </p>
            <div className="flex desktop:flex-col desktop:justify-between tablet:flex-row-reverse tablet:mt-48px desktop:mt-0">
              <p className="font-rnarrow tablet:text-16px tablet:leading-24px reltive">
                Ми не дамо викреслити
                <br />
                жодного дня цього періоду
                <br />
                зі сторінок світової історії.
              </p>
              <img
                className="h-72px mr-auto tablet:block desktop:hidden"
                alt="Dots"
                src={'img/pd_horisontal_dots.svg'}
              />
              <img
                className="mt-50px h-377px tablet:hidden desktop:block"
                alt="Dots"
                src={'img/vertical_dots.svg'}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentMain;
