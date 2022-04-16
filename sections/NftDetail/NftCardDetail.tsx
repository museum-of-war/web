import BidsHistoryTable from "@components/BidsHistoryTable";
import Button from "@components/Button";
import NftCard from "@components/NftCard";
import { useViewPort } from "@hooks/useViewport";
import { useState } from "react";

type NftCardDetailProps = {};

type BidCardProps = {
  isMobile?: boolean;
};

const BidCard = ({ isMobile }: BidCardProps) => {
  return (
    <>
      <div className="flex justify-between tablet:items-end mobile:flex-col tablet:flex-row mobile:mt-20px tablet:mt-[0px]">
        <div>
          <p className="text-14px opacity-70 tablet:mb-12px">Current bid</p>
          <p className="mobile:text-27px tablet:text-32px font-black">
            0.24 ETH
          </p>
          <p className="text-16px">$903</p>
        </div>
        <div className="tablet:h-60px mobile:h-4px tablet:w-[4px] mobile:w-full mobile:my-20px tablet:my-[0px] bg-carbon dark:bg-white"></div>
        <div>
          <p className="text-14px opacity-70 tablet:mb-12px">Ends in</p>
          <div className="flex -mx-10px">
            <div className="text-center px-10px">
              <p className="mobile:text-27px tablet:text-32px font-black">0</p>
              <p className="mobile:text-14px tablet:text-16px">days</p>
            </div>
            <div className="text-center px-10px">
              <p className="mobile:text-27px tablet:text-32px font-black">23</p>
              <p className="mobile:text-14px tablet:text-16px">hours</p>
            </div>
            <div className="text-center px-10px">
              <p className="mobile:text-27px tablet:text-32px font-black">59</p>
              <p className="mobile:text-14px tablet:text-16px">minutes</p>
            </div>
            <div className="text-center px-10px">
              <p className="mobile:text-27px tablet:text-32px font-black">59</p>
              <p className="mobile:text-14px tablet:text-16px">seconds</p>
            </div>
          </div>
        </div>
      </div>
      {!isMobile && (
        <Button
          mode="custom"
          label="Place Bid"
          onClick={() => console.log("asd")}
          className="bg-white text-carbon w-100% mt-24px"
        />
      )}
    </>
  );
};

const NftCardDetail = ({}: NftCardDetailProps) => {
  const [isSold, setSold] = useState<boolean>(false);
  const { isTablet, isMobile } = useViewPort();
  return (
    <div>
      {(isTablet || isMobile) && !isSold && (
        <div className="tablet:border-[5px] fixed bg-[#212121] text-white bottom-20px left-[2%] right-[2%] tablet:p-48px w-[96%] z-50 ">
          {isTablet ? (
            <BidCard />
          ) : (
            <Button
              mode="custom"
              label="Place Bid"
              onClick={() => console.log("asd")}
              className="bg-white text-carbon w-100%"
            />
          )}
        </div>
      )}
      <div className="flex mt-40px mobile:flex-col laptop:flex-row  justify-between">
        <div className="laptop:w-[48%] mobile: w-full">
          <img alt="Dots" src={"../img/pd-mockNFT.png"} />
        </div>
        <div className="laptop:w-[48%] mobile: w-full">
          {isSold ? (
            <p className="mobile:text-27px tablet:text-32px font-black  mobile:mt-20px laptop:mt-[0px]">
              Sold
            </p>
          ) : isTablet ? (
            <></>
          ) : (
            <BidCard isMobile={isMobile} />
          )}
          <p className="mobile:text-14px tablet:text-16px mobile:mt-40px leading-[150%] tablet:mt-48px">
            Russia launched rocket attacks on Ukrainian cities. The missile had
            hit airport of Ivano-Frankivsk. Russia launched rocket attacks on
            Ukrainian cities. The missile had hit airport of Ivano-Frankivsk.
            Russia launched rocket attacks on Ukrainian cities. The missile had
            hit airport of Ivano-Frankivsk.
          </p>
          <p className="mobile:text-14px tablet:text-16px leading-[150%] mt-24px">
            Росія завдала ракетних ударів по українських містах. Росія завдала
            ракетних ударів по українських містах. Росія завдала ракетних ударів
            по українських містах.
          </p>
          <div className="flex  mobile:flex-col laptop:flex-col tablet:flex-row mobile:mt-40px tablet:mt-48px">
            <div className="flex mobile:flex-col tablet:flex-row text-16px">
              <div className="flex">
                <p>Artist:</p>
                <p className=" tablet:ml-[8px]">Nickname</p>
              </div>
              <div className="flex mobile:ml-[0px] tablet:ml-48px mobile:my-[20px] tablet:my-[0px]">
                <p>Edition:</p>
                <p className="ml-[8px]">1 of 1</p>
              </div>
            </div>
            {isSold && (
              <div className="flex text-16px laptop:mt-24px tablet:ml-48px laptop:ml-[0px]">
                <p>Owner:</p>
                <p className="ml-[8px]">0x4EFesagas12...0x4E</p>
              </div>
            )}
          </div>
          {isSold && (
            <div className="mobile:mt-60px tablet:mt-72px laptop:mt-96px">
              <p className="mobile:text-27px tablet:text-32px font-black mobile:mb-30px tablet:mb-36px">
                Bids history
              </p>
              <BidsHistoryTable />
            </div>
          )}
          <div className="laptop:mt-96px mobile:my-60px tablet:mt-72px">
            <div className="flex items-center mobile:mb-[20px] tablet:mb-24px">
              <p className="mobile:text-27px tablet:text-32px font-black">
                More auctions
              </p>
              {!isMobile && (
                <p className="text-[14px] font-black ml-32px">
                  See all auctions
                </p>
              )}
            </div>
            <div className="flex flex-wrap -mx-24px">
              {[1, 2].map((i, index) => (
                <div
                  className={`tablet:w-1/2 mobile:w-full flex flex-col p-14px`}
                  key={i}
                >
                  <NftCard img="../img/pd-mockNFT.png" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCardDetail;
