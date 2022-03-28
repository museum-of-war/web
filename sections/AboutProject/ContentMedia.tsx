import { openInNewTab } from "@sections/utils";
import React from "react";

const Media = (summary: string, outlet: string, url: string) => {
  return (
    <div className="tablet:pr-10%">
      <p className="font-rnarrow mobile:text-18px laptop:text-16px desktop:text-18px">
        {summary}
      </p>
      <p className="font-rlight text-16px mt-20px">{outlet}</p>
      <button
        onClick={() => {
          openInNewTab(url);
        }}
      >
        <p className="font-rblack tablet:mt-30px mobile:mt-10px mb-50px border-transparent  border-b-4  hover:border-solid hover:border-carbon">
          Read Article
        </p>
      </button>
    </div>
  );
};
const ContentMedia = () => {
  return (
    <div className="px-10% mobile:mt-8% tablet:mt-0">
      <p className="font-rblack mobile:text-36px mobile:leading-12vw tablet:text-9vw tablet:leading-9vw laptop:text-5vw laptop:leading-5.5vw uppercase">
        IN PRESS
      </p>
      <div className="h-5px w-100% bg-carbon"></div>
      <div className="mt-20px relative tablet:flex tablet:flex-row font-rlight justify-between">
        <div className="tablet:flex laptop:flex-row tablet:flex-col">
          <div className="mr-3%">
            {Media(
              "Ukraine's government has said it will issue non-fungible tokens (NFTs) to fund its military as they defend the country against the Russian invasion.",
              "BBC",
              "https://www.bbc.co.uk/news/business-60613613"
            )}
          </div>
          <div className="mr-3%">
            {Media(
              "The Ukrainian government is to launch a non-fungible token marking the history of the Russian invasion with unique digital art, in its latest use of digital assets to fund its war efforts.",
              "The Guardian",
              "https://www.theguardian.com/world/2022/mar/13/ukraine-nft-history-of-russian-invasion-war"
            )}
          </div>
        </div>
        <div className="tablet:flex laptop:flex-row tablet:flex-col">
          <div className="mr-3%">
            {Media(
              "After careful consideration we decided to cancel airdrop,” Mr Fedorov tweeted … “Instead, we will announce NFTs to support Ukrainian Armed Forces soon. We DO NOT HAVE any plans to issue any fungible tokens.",
              "The Independent",
              "https://www.independent.co.uk/tech/ukraine-nft-russia-crypto-airdrop-war-b2027648.html"
            )}
          </div>
          <div className="mr-3%">
            {Media(
              "Ukraine plans to become the first developed country to issue its own collection of non-fungible tokens, as it looks to capitalise on a flood of crypto donations to back its war against Russia.",
              "Financial Times",
              "https://www.ft.com/content/b4e13435-a818-4d80-94a4-4149a702a094"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMedia;
