import React, { useEffect, useState } from 'react';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import dynamic from 'next/dynamic';
import TokenItem from './TokenItem';
import { useIsMounted } from '@hooks/useIsMounted';
import { IndexedNFT } from '@sections/types';

const BuyMoreNFTs = dynamic(() => import('./BuyMoreNFTs'), {
  ssr: false,
});

type TokenProps = {
  signerAddress: string;
};

export const groupBy = <T, K extends keyof any>(
  list: T[],
  getKey: (item: T) => K,
) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);

const Tokens = ({ signerAddress }: TokenProps) => {
  const { viewNFTs, canMint } = useWeb3Modal();
  const [mintable, setMintable] = useState(false);
  const [grouped, setGrouped] = useState<IndexedNFT[][]>([]);

  const isMounted = useIsMounted();

  useEffect(() => {
    const myNFTs = async () => {
      const newNFTs = signerAddress ? await viewNFTs(signerAddress) : [];
      const withIndex = newNFTs.map((nft, index) => ({ nft, index }));
      if (!isMounted.current) return;
      const res = groupBy(
        withIndex,
        (i) =>
          `${i.nft.contract.address}-${
            i.nft.metadata?.item_number ?? i.nft.id.tokenId
          }-${i.nft.metadata?.level ?? 0}` as string,
      );
      const groupedArr = [] as IndexedNFT[][];
      for (const key in res) {
        groupedArr.push(res[key]!);
      }
      setGrouped(groupedArr);
    };
    myNFTs();
  }, [signerAddress]);

  useEffect(() => {
    const getCanMint = async () => {
      const result = await canMint();
      if (!isMounted.current) return;
      setMintable(result);
    };
    getCanMint();
  }, []);

  return (
    <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
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
        tablet:grid-cols-2 tablet:gap-x-40px
        mobile:grid-cols-1"
      >
        {signerAddress ? (
          grouped.map((group, idx) => (
            <TokenItem
              tokenData={
                group.length > 1 ? group.map((g) => g.nft) : group[0]!.nft
              }
              key={idx}
              index={group[0]!.index}
            />
          ))
        ) : (
          <div>Cannot get tokens, please sign in</div>
        )}
        {signerAddress && mintable ? <BuyMoreNFTs /> : null}
      </div>
    </div>
  );
};

export default Tokens;
