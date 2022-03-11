import ConnectWalletButton from "@components/ConnectWalletButton";
import PoweredByFrame from "@components/PoweredByFrame";
import { useViewPort } from "@hooks/useViewport";
import React from "react";

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
        <img alt="Logo" src={"img/logo.png"} className="w-full" />
        <div className="mt-30px font-rlight text-16px">
          <p className="pr-10%">
            {"An NFT-museum of the war of putin's russia against Ukraine"}
          </p>
          <p className="mt-4% mb-10% pr-10%">
            NFT-музей війни путінської росії проти України.
          </p>
          <div className="w-60% laptop:mt-15px mobile:mt-25px mobile:mb-40px">
            <ConnectWalletButton
              signerAddress={signerAddress}
              handleConnect={handleConnect}
              handleDisconnect={() => {}}
            />
          </div>
          <PoweredByFrame />
        </div>
      </div>
      <div>
        {/* <img alt="Logo" src={"img/pd-header.png"} className="w-full my-12%" /> */}
        <video
          loop
          autoPlay
          muted
          src={"vid/pd-header.mp4"}
          className="w-full my-12%"
        />
      </div>
    </div>
  ) : (
    <div className="px-10% pb-100px w-screen100% mt-8%">
      <div className="laptop:flex laptop:flex-row justify-between items-start">
        <img
          alt="Logo"
          src={"img/logo.png"}
          className="mobile:w-50% laptop:w-45% desktop:w-50%"
        />
        <div
          className="relative flex flex-row font-rlight 
            justify-between mobile:text-20px laptop:text-16px desktop:text-20px 
            laptop:ml-10%"
        >
          <div className="laptop:w-40% mobile:pr-10% laptop:pr-0 mobile:mt-20px">
            <p>
              {"An NFT-museum of the war of putin's russia against Ukraine"}
            </p>
            <div className="w-80% laptop:mt-15px mobile:my-25px">
              <ConnectWalletButton
                signerAddress={signerAddress}
                handleConnect={handleConnect}
                handleDisconnect={() => {}}
              />
            </div>
          </div>
          <p className="laptop:w-40% mobile:mt-20px">
            NFT-музей війни путінської росії проти України.
          </p>
        </div>
      </div>
      <PoweredByFrame />
      {/* <img
        alt="Logo"
        src={"img/pd-header.png"}
        width="100%"
        className="mt-8%"
      /> */}
      <video
        loop
        autoPlay
        muted
        src={"vid/pd-header.mp4"}
        width="100%"
        className="mt-8%"
      />
    </div>
  );
};

export default ContentTopNotConnected;
