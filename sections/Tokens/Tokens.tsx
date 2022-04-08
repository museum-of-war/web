// import { TokenDataType } from "@sections/types";
import React, { useEffect, useState } from "react";
import { useWeb3Modal } from "@hooks/useWeb3Modal";
import dynamic from "next/dynamic";
import TokenItem from "./TokenItem";

const BuyMoreNFTs = dynamic(() => import("./BuyMoreNFTs"), {
  ssr: false,
});

type TokenProps = {
  signerAddress: string;
};

const Tokens = ({ signerAddress }: TokenProps) => {
  const { viewNFTs, canMint } = useWeb3Modal();
  const [NFTs, setNFTs] = useState<Array<any>>([]);
  const [mintable, setMintable] = useState(false);

  useEffect(() => {
    const myNFTs = async () => {
      const newNFTs = await viewNFTs(signerAddress);
      setNFTs(newNFTs);
    };
    myNFTs();
  }, []);

  useEffect(() => {
    const getCanMint = async () => {
      const result = await canMint();

      setMintable(result);
    };
    getCanMint();
  }, [])

  return (
    <div className="px-10%">
      <p
        className="border-carbon border-b-4
        mobile:text-38px mobile:leading-40px
        tablet:text-70px tablet:leading-72px
        desktop:text-80px desktop:leading-100px
        font-rblack mb-10px"
      >
        MY NFTs
      </p>
      <div
        className="grid
        desktop:grid-cols-4 desktop:gap-x-60px
        laptop:grid-cols-3 laptop:gap-x-50px
        tablet:grid-cols-2 tablet:gap-x-40px
        mobile:grid-cols-1"
      >
        {NFTs.map((tokenData, idx) => (
          <TokenItem tokenData={tokenData} key={idx} />
        ))}
        {mintable ? <BuyMoreNFTs /> : null}
      </div>
    </div>
  );
};

export default Tokens;
