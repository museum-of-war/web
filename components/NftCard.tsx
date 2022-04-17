import { useAppRouter } from '@hooks/useAppRouter';
import React, { useEffect, useState } from 'react';
import { AuctionItemType } from '@sections/types';
import { calculateTimeLeft } from '@sections/AboutProject/ContentTop/CountdownBanner';
import { useWeb3Modal } from '@hooks/useWeb3Modal';

function NftCard({
  imageSrc,
  name,
  index,
  endsIn,
  contractAddress,
  tokenId,
}: Pick<
  AuctionItemType,
  'imageSrc' | 'name' | 'index' | 'endsIn' | 'contractAddress' | 'tokenId'
>) {
  const { push } = useAppRouter();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(`${endsIn}`));
  const [currentBid, setCurrentBid] = useState<{
    bid: string;
    nextMinBid: string;
    fullInfo: any;
  }>({ bid: '0', nextMinBid: '', fullInfo: '' });

  const navlinkToNft = () => push(`/auction/${index}`);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(`${endsIn}`));
    }, 1000);
    return () => clearTimeout(timer);
  });

  useWeb3Modal()
    .getAuctionInfo(contractAddress, tokenId)
    .then((i) => setCurrentBid({ ...i }))
    .catch((error) => console.log(`NftCard ${error}`));

  // if (!Object.keys(timeLeft).length) return null;

  return (
    <div
      onClick={navlinkToNft}
      className="p-10px border-4 border-carbon border-solid hover:border-4 hover:border-white hover:border-solid hover:cursor-pointer"
    >
      <img alt={name} src={imageSrc} className="w-100% h-544px" />
      <h3 className="font-black text-20px leading-240%">{name}</h3>
      <div className="flex justify-between">
        <div>
          <p className="text-12px leading-100% opacity-70">Current bid</p>
          <p className="tablet:text-16px mobile:text-14px leading-150%">
            {currentBid.bid} ETH
          </p>
        </div>
        <div className={`${timeLeft.days ? '' : 'w-[100px]'}`}>
          <p className="text-12px leading-100% opacity-70 ">Ends in</p>
          <p className="tablet:text-16px mobile:text-14px leading-150% w-100%">
            {timeLeft.days
              ? `${timeLeft.days} days`
              : `${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NftCard;
