import React, { useEffect, useState } from "react";
import { useAppRouter } from "@hooks/useAppRouter";
import { useWeb3Modal } from "@hooks/useWeb3Modal";
import UpgradeOption from "./UpgradeOption";
import { openInNewTab } from "@sections/utils";
import { OPENSEA_LINK } from "@sections/Constants";


type UpgradeYourNFTProps = {
  nftTitle: string | undefined;
  signerAddress: string;
}

const UpgradeYourNFT = ({ nftTitle, signerAddress }: UpgradeYourNFTProps) => {
  const [groupNFT, setGroupNFT] = useState<Array<any>>([]);
  const [selectedLevel, setSelectedLevel] = useState(0);
  const { push } = useAppRouter();
  const { viewNFTs } = useWeb3Modal();

  useEffect(() => {
    const myNFTs = async () => {
      const newNFTs = await viewNFTs(signerAddress);
      setGroupNFT(newNFTs.filter((nft) => nft.title === nftTitle));
    };
    myNFTs();
  }, [nftTitle, signerAddress, viewNFTs]);

  return (
    <div className="font-rnarrow items-center">
      <div
        onClick={() => push("/tokens")}
        className="w-fit font-rblack hover:cursor-pointer pb-30px"
      >
        <img alt="Left" src={"/img/back-arrow.svg"} className="inline-block" />
        <button className="font-rblack ml-15 hover:underline hover:decoration-4"> Back </button>
      </div>
      <p
        className="border-carbon border-b-4
        mobile:text-38px mobile:leading-40px
        tablet:text-70px tablet:leading-72px
        desktop:text-80px desktop:leading-100px
        font-rblack mb-10px"
      >
        UPGRADE YOUR NFT
      </p>
      <div className="h-fit pt-30px tablet:pt-30px mobile:pt-22px relative desktop:flex desktop:flex-row tablet:flex tablet:flex-col font-rnarrow mobile:leading-20px tablet:leading-24px tablet:justify-between">
        <p className="font-rblack pt-10 desktop:w-45% tablet:w-100% tablet:text-20px mobile:text-16px mobile:w-100% mobile:mb-23px">
          {groupNFT.length} editions left
        </p>
        <p className="w-45% desktop:w-45% tablet:w-100% tablet:text-16px mobile:w-100% mobile:text-14px">
          Upgrade your NFT to make it really rare. You can add AR experience or match it with a curated art piece from the Prospect100 selection — or both
        </p>
      </div>
      <div
        className="grid w-fit m-auto mb-48px
          desktop:grid-cols-4 desktop:gap-x-50px 
          tablet:grid-cols-2 tablet:gap-x-50px 
          mobile:grid-cols-1"
      >
        <UpgradeOption
          onClick={() => selectedLevel !== 1 ? setSelectedLevel(1) : setSelectedLevel(0)}
          selected={selectedLevel === 1}
          title={"1st level"}
          itemsToUpgrade={2}
          options={["AR-experience."]}
        />
        <UpgradeOption
          onClick={() => selectedLevel !== 2 ? setSelectedLevel(2) : setSelectedLevel(0)}
          selected={selectedLevel === 2}
          title={"2nd level"}
          itemsToUpgrade={4}
          options={["AR-experience.", "1 unique NFT from Prospect100 artists"]}
        />
        <UpgradeOption
          onClick={() => selectedLevel !== 3 ? setSelectedLevel(3) : setSelectedLevel(0)}
          selected={selectedLevel === 3}
          title={"3rd level"}
          itemsToUpgrade={8}
          options={["AR-experience.", "3 unique NFTs from Prostect100 artists"]}
        />
        <UpgradeOption
          onClick={() => selectedLevel !== 4 ? setSelectedLevel(4) : setSelectedLevel(0)}
          selected={selectedLevel === 4}
          title={"4th level"}
          itemsToUpgrade={16}
          options={["AR-experience.", "7 unique NFTs from Prostect100 artists"]}
        />
      </div>
      <div className="desktop:m-auto desktop:w-45% tablet:w-100% mobile:w-100%">
        <p className="tablet:text-16px mobile:text-14px mb-23px">
          After you start the Upgrade process, you’ll no longer have your current X-level NFT but get the new upgraded one
        </p>
        {
          selectedLevel && (2 ** selectedLevel) <= groupNFT.length
            ? <button
              className="text-center px-32px bg-carbon font-rblack 
              text-white border-2 border-carbon rounded-full
              tablet:h-48px tablet:w-100% tablet:static tablet:shadow-none
              tablet:left-0 tablet:translate-x-0 tablet:text-14px
              mobile:h-60px mobile:w-250px mobile:text-12px mobile:bottom-10px
              mobile:fixed mobile:left-50% mobile:transform mobile:-translate-x-50%
              mobile:shadow-[0_4px_32px_4px_rgba(33,33,33,0.3)]"
            >
              {`Upgrade it to the ${selectedLevel} level!`}
            </button>
            : <button
              onClick={() => openInNewTab(OPENSEA_LINK)}
              className="font-rblack bg-white border-2 border-carbon rounded-full
              tablet:w-100% tablet:h-48px tablet:text-14px tablet:static tablet:shadow-none
              tablet:left-0 tablet:translate-x-0
              mobile:h-60px mobile:w-250px mobile:text-12px mobile:bottom-10px
              mobile:fixed mobile:left-50% mobile:transform mobile:-translate-x-50%
              mobile:shadow-[0_4px_32px_4px_rgba(33,33,33,0.3)]"
            >
              Find More on OpenSea
            </button>
        }
      </div>
    </div>
  )
}

export default UpgradeYourNFT;
