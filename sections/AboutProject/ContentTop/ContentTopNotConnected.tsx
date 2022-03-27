import ExploreWarlineButton from "@components/ExploreWarlineButton";
import PoweredByFrame from "@components/PoweredByFrame";
import { useViewPort } from "@hooks/useViewport";
// import SupportBanner from "@sections/Warline/SupportBanner";
import React from "react";
import Countdownbanner from "./Countdownbanner";

type ContentTopNotConnectedProps = {
  signerAddress: string;
  handleConnect: () => void;
};

const ContentTopNotConnected = ({
  signerAddress,
  handleConnect,
}: ContentTopNotConnectedProps) => {
  const { isMobile } = useViewPort();
  return isMobile ? (
    <div className="mt-8%">
      <div className="px-10% w-screen100% mb-8%">
        <img alt="Logo" src={"img/logo.svg"} className="w-full" />
        <div className="mt-30px font-rlight text-16px">
          <p className="pr-10%">
            {"An NFT-museum of the war of putin's russia against Ukraine"}
          </p>
          <p className="mt-4% mb-10% pr-10%">
            NFT-музей війни путінської росії проти України.
          </p>
          <div className="w-100% laptop:mt-15px mobile:mt-25px mobile:mb-40px">
            <ExploreWarlineButton />
          </div>
          <PoweredByFrame />
          <Countdownbanner />
        </div>
      </div>
      <div className="w-full my-12%">
        <dotlottie-player src={"/lottie/main.lottie"} autoplay loop />
      </div>
    </div>
  ) : (
    <div className="px-10% pb-100px w-screen100% laptop:mt-8vh">
      <div className="laptop:flex laptop:flex-row justify-between items-start">
        <img
          alt="Logo"
          src={"img/logo.svg"}
          className="mobile:w-50vw laptop:w-45vw desktop:w-50vw max-w-700px"
        />
        <div
          className="relative flex flex-row font-rlight 
            justify-between  mobile:text-20px laptop:text-16px desktop:text-20px 
            laptop:ml-10% mobile:pt-30px tablet:pt-0px laptop:-mt-2vw deskptop:-mt-1vw"
        >
          <div className="laptop:w-40% mobile:pr-10% laptop:pr-0 ">
            <p>
              {"An NFT-museum of the war of putin's russia against Ukraine"}
            </p>
            <div className="w-100% laptop:mt-30px mobile:my-25px">
              <ExploreWarlineButton />
            </div>
          </div>
          <p className="laptop:w-40% ">
            NFT-музей війни путінської росії проти України.
          </p>
        </div>
      </div>
      <PoweredByFrame />
      <Countdownbanner />
      <div className="mt-8%">
        <dotlottie-player src={"/lottie/main.lottie"} autoplay loop />
      </div>
    </div>
  );
};

export default ContentTopNotConnected;
