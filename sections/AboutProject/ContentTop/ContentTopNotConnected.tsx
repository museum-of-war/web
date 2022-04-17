import PoweredByFrame from "@components/PoweredByFrame";
import { useViewPort } from "@hooks/useViewport";
import React from "react";
import Button from "@components/Button";

type ContentTopNotConnectedProps = {
  signerAddress: string;
  handleConnect: () => void;
};

const ContentTopNotConnected = ({
  signerAddress,
  handleConnect,
}: ContentTopNotConnectedProps) => {
  const { isMobile, isTablet } = useViewPort();

  return (
    <div
      className={
        isMobile
          ? "pb-60px"
          : isTablet
          ? "pb-72px"
          : "flex flex-row justify-between pb-100px mt-8vh"
      }
    >
      <div
        className={`${
          isMobile || isTablet ? "w-100%" : "w-50%"
        } flex flex-col justify-between`}
      >
        <div>
          <p
            className={`font-rblack uppercase ${
              isMobile ? "text-46px leading-40px" : "text-84px leading-72px"
            }`}
          >
            The NFT-museum
          </p>
          <p
            className={`font-rblack lowercase ${
              isMobile ? "text-27px leading-30px" : "text-32px leading-36px"
            }`}
          >
            of the war of putin&apos;s russia against Ukraine
          </p>
        </div>
        <div
          className={`w-100% ${
            isTablet ? "mt-36px mb-48px" : isMobile ? "mt-30px mb-40px" : ""
          }`}
        >
          <Button
            mode="primary"
            round={false}
            label="Buy NFT Now"
            onClick={() => console.log("ads")}
          />
        </div>
      </div>
      <div
        className={`${
          isMobile || isTablet ? "w-100%" : "w-50%"
        } flex flex-col justify-between`}
      >
        <div
          className={`inline-block ${
            isMobile
              ? "min-h-[67px]"
              : isTablet
              ? "min-h-[164px]"
              : "min-h-[347px]"
          }`}
        >
          <dotlottie-player src={"/lottie/main.lottie"} autoplay loop />
        </div>
        <PoweredByFrame />
      </div>
    </div>
  );
};

export default ContentTopNotConnected;
