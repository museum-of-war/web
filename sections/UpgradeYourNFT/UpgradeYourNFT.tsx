import React, { useEffect, useMemo, useState } from 'react';
import { useAppRouter } from '@hooks/useAppRouter';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import UpgradeOption from './UpgradeOption';
import { openInNewTab } from '@sections/utils';
import { OPENSEA_LINK } from '@sections/constants';
import { useIsMounted } from '@hooks/useIsMounted';
import { Nft } from '@alch/alchemy-web3/dist/esm/alchemy-apis/types';
import Link from 'next/link';

type UpgradeYourNFTProps = {
  tokenId: string;
  level: number;
  signerAddress: string;
};

const UpgradeYourNFT = ({
  tokenId,
  level,
  signerAddress,
}: UpgradeYourNFTProps) => {
  const [groupNFT, setGroupNFT] = useState<Nft[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const [isMerging, setIsMerging] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(0);
  const { push } = useAppRouter();
  const { viewNFTs, mergeBaseFirstDrop, mergeAdvancedFirstDrop } =
    useWeb3Modal();

  const isMounted = useIsMounted();

  useEffect(() => {
    const myNFTs = async () => {
      const newNFTs = await viewNFTs(signerAddress);
      if (!isMounted.current) return;
      setGroupNFT(
        newNFTs.filter(
          (nft) =>
            nft?.metadata?.item_number === tokenId &&
            (nft?.metadata?.level ?? 0) === level,
        ),
      );
      setLoaded(true);
    };
    myNFTs();
  }, [tokenId, level, signerAddress, viewNFTs]);

  const nextLevels = useMemo(
    () =>
      level === 0
        ? [...new Array(5).keys()].filter((l) => l > level && l > 1)
        : [level + 1], //batch merging is disabled for high levels
    [level],
  );

  const isLoading = useMemo(
    () => isApproving || isMerging,
    [isApproving, isMerging],
  );

  return (
    <div className="font-rnarrow items-center desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px desktop:mb-120px tablet:mb-96px mobile:mb-[60px]">
      <Link href="/tokens" passHref>
        <a>
          <div className="w-fit font-rblack hover:cursor-pointer pb-30px">
            <img
              alt="Left"
              src={'/img/back-arrow.svg'}
              className="inline-block"
            />
            <button className="font-rblack ml-15 hover:underline hover:decoration-4">
              {' '}
              Back{' '}
            </button>
          </div>
        </a>
      </Link>

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
          {loaded ? `${groupNFT.length} editions left` : 'Loading...'}
        </p>
        <p className="w-45% desktop:w-45% tablet:w-100% tablet:text-16px mobile:w-100% mobile:text-14px">
          Upgrade your NFT to make it really rare. You can get a curated art
          pieces from the Prospect100 collection as a reward (if any left).
        </p>
      </div>
      <div
        className="grid desktop:flex w-fit m-auto mb-48px
          desktop:grid-cols-4 desktop:gap-x-50px 
          tablet:grid-cols-2 tablet:gap-x-50px 
          mobile:grid-cols-1"
      >
        {nextLevels.map((currentLevel) => (
          <UpgradeOption
            key={currentLevel}
            onClick={() =>
              selectedLevel !== currentLevel
                ? setSelectedLevel(currentLevel)
                : setSelectedLevel(0)
            }
            selected={selectedLevel === currentLevel}
            title={
              currentLevel === 1
                ? '1st level'
                : currentLevel === 2
                ? '2nd level'
                : currentLevel === 3
                ? '3rd level'
                : `${currentLevel}th level`
            }
            itemsToUpgrade={Math.pow(2, currentLevel - level)}
            options={
              currentLevel > 1
                ? [
                    `${Math.pow(2, currentLevel - 1) - 1} unique NFT${
                      currentLevel - level > 2 ? 's' : ''
                    } from Prospect100 artists`,
                  ]
                : []
            }
          />
        ))}
      </div>
      <div className="desktop:m-auto desktop:w-45% tablet:w-100% mobile:w-100%">
        <p className="tablet:text-16px mobile:text-14px mb-23px">
          After you start the Upgrade process, you’ll no longer have your
          current {level || 'X'}-level NFTs but get the new upgraded one
        </p>
        {selectedLevel &&
        Math.pow(2, selectedLevel - level) <= groupNFT.length ? (
          <button
            className="text-center px-32px bg-carbon font-rblack 
              text-white border-2 border-carbon rounded-full
              tablet:h-48px tablet:w-100% tablet:static tablet:shadow-none
              tablet:left-0 tablet:translate-x-0 tablet:text-14px
              mobile:h-60px mobile:w-250px mobile:text-12px mobile:bottom-10px
              mobile:fixed mobile:left-50% mobile:transform mobile:-translate-x-50%
              mobile:shadow-[0_4px_32px_4px_rgba(33,33,33,0.3)]"
            disabled={isLoading}
            onClick={async () => {
              try {
                const ids = groupNFT.map((nft) => nft.id.tokenId);
                setIsMerging(true);
                if (level) {
                  await mergeAdvancedFirstDrop(
                    ids[ids.length - 2]!,
                    ids[ids.length - 1]!,
                  );
                } else {
                  setIsApproving(true);
                  await mergeBaseFirstDrop(
                    ids.slice(-1 * Math.pow(2, selectedLevel - level)),
                    () => setIsApproving(false),
                  );
                }
                await push('/tokens');
              } catch (error: any) {
                alert(error?.error?.message ?? error?.message ?? error);
              } finally {
                setIsApproving(false);
                setIsMerging(false);
              }
            }}
          >
            {isApproving
              ? 'Approving NFTs transfer...'
              : isMerging
              ? 'Merging NFTs...'
              : `Upgrade to the ${selectedLevel} level!`}
          </button>
        ) : (
          <button
            className="font-rblack bg-white border-2 border-carbon rounded-full
              tablet:w-100% tablet:h-48px tablet:text-14px tablet:static tablet:shadow-none
              tablet:left-0 tablet:translate-x-0
              mobile:h-60px mobile:w-250px mobile:text-12px mobile:bottom-10px
              mobile:fixed mobile:left-50% mobile:transform mobile:-translate-x-50%
              mobile:shadow-[0_4px_32px_4px_rgba(33,33,33,0.3)]"
            onClick={() => openInNewTab(OPENSEA_LINK)}
          >
            Find More on OpenSea
          </button>
        )}
      </div>
    </div>
  );
};

export default UpgradeYourNFT;
