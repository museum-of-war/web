import React from "react";
import { useAppRouter } from "@hooks/useAppRouter";

type ContentChapterProps = {};

const ContentChapter = ({}: ContentChapterProps) => {
  const { push } = useAppRouter();

  const handleCardClick = (route: string) => () => push(route);

  return (
    <div className="flex flex-wrap justify-center -mx-24px laptop:mb-120px tablet:mb-100px mobile:mb-60px">
      <div className="tablet:w-1/2 mobile:w-full flex flex-col self-stretch px-24px">
        <div
          className="hover:cursor-pointer "
          onClick={handleCardClick("/warline")}
        >
          <div className="border-4 border-carbon border-solid flex-1 flex flex-col text-carbon">
            <div className="laptop:p-48px tablet:py-48px tablet:px:36px mobile:py-20px mobile:px-24px flex-1 flex flex-col">
              <h1 className="tablet:text-32px mobile:text-27px font-black">
                Warline
              </h1>
              <p className="tablet:text-16px mobile:text-14px font-normal leading-150% font-rnarrow tablet:mt-24px mobile:mt-10px tracking-wider">
                A timeline-based set of NFT art pieces that tells how the war
                unfolds
              </p>
            </div>
            <div className="flex flex-wrap border-t-4 border-carbon border-solid ">
              <img alt="Dots" src={"img/pd-mockNFT.png"} className="w-1/4" />
              <img alt="Dots" src={"img/pd-mockNFT.png"} className="w-1/4" />
              <img alt="Dots" src={"img/pd-mockNFT.png"} className="w-1/4" />
              <img alt="Dots" src={"img/pd-mockNFT.png"} className="w-1/4" />
              <img alt="Dots" src={"img/pd-mockNFT.png"} className="w-1/4" />
              <img alt="Dots" src={"img/pd-mockNFT.png"} className="w-1/4" />
              <img alt="Dots" src={"img/pd-mockNFT.png"} className="w-1/4" />
              <img alt="Dots" src={"img/pd-mockNFT.png"} className="w-1/4" />
            </div>
          </div>
        </div>
      </div>
      <div className="tablet:w-1/2 mobile:w-full mt-30px tablet:mt-0 flex flex-col self-stretch px-24px">
        <div
          className="hover:cursor-pointer"
          onClick={handleCardClick("/auction")}
        >
          <div className="border-4 border-carbon border-solid  flex-1 flex flex-col">
            <div className="laptop:p-48px tablet:py-48px tablet:px:36px mobile:py-20px mobile:px-24px flex-1 flex flex-col text-white bg-carbon">
              <h1 className="tablet:text-32px mobile:text-27px font-black">
                Auction
              </h1>
              <p className="tablet:text-16px mobile:text-14px font-normal leading-150% font-rnarrow tablet:mt-24px mobile:mt-10px tracking-wider">
                A collection of selected NFTs that can be acquired via bidding
              </p>
            </div>
            <div className="flex flex-wrap  border-t-4 border-carbon border-solid ">
              <img alt="Dots" src={"img/pd-mockNFT.png"} className="w-1/4" />
              <img alt="Dots" src={"img/pd-mockNFT.png"} className="w-1/4" />
              <img alt="Dots" src={"img/pd-mockNFT.png"} className="w-1/4" />
              <img alt="Dots" src={"img/pd-mockNFT.png"} className="w-1/4" />
              <img alt="Dots" src={"img/pd-mockNFT.png"} className="w-1/4" />
              <img alt="Dots" src={"img/pd-mockNFT.png"} className="w-1/4" />
              <img alt="Dots" src={"img/pd-mockNFT.png"} className="w-1/4" />
              <img alt="Dots" src={"img/pd-mockNFT.png"} className="w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentChapter;
