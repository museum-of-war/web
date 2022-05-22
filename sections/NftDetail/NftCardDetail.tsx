import React, { useEffect, useMemo, useState } from 'react';
import ScaledImage from '@components/ScaledImage';
import BidsHistoryTable from '@components/BidsHistoryTable';
import Button from '@components/Button';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { useViewPort } from '@hooks/useViewport';
import { calculateTimeLeft } from '@sections/AboutProject/ContentTop/CountdownBanner';
import { AuctionItemType, BidInfo } from '@sections/types';
import { useAppRouter } from '@hooks/useAppRouter';
import AuctionData from '@sections/Auction/AuctionData';
import NftCard from '@components/NftCard';
import { usePopup } from 'providers/PopupProvider';
import { truncateAddress } from '@sections/utils';
import { usePreloader } from '@providers/PreloaderProvider';
import AuctionCollectionData from '@sections/Auction/AuctionCollectionData';
import FsLightbox from 'fslightbox-react';
import { AuctionVersion } from '@museum-of-war/auction';
import ArtistsData from '@sections/ArtistsData';

type NftCardDetailProps = {
  item: AuctionItemType;
};

type BidCardProps = {
  isMobile?: boolean;
  endsIn: Date;
  startsAt?: Date;
  currentBid: string;
  proposedBids: string[];
  contractAddress: string;
  tokenId: number;
  isSale: boolean;
  hasBid: boolean;
  buyNowPrice?: string;
  auctionVersion: AuctionVersion;
  updateCallback: () => Promise<void>;
};

const BidCard = ({
  currentBid,
  proposedBids,
  isMobile,
  endsIn,
  startsAt,
  contractAddress,
  tokenId,
  isSale,
  hasBid,
  buyNowPrice,
  auctionVersion,
  updateCallback,
}: BidCardProps) => {
  const [isStarted, setIsStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(`${startsAt ?? endsIn}`),
  );
  const [usdPrice, setUsdPrice] = useState<string | null>(null);
  const { showPopup } = usePopup();
  const { makeBid, getUsdPriceFromETH } = useWeb3Modal();

  useEffect(() => {
    getUsdPriceFromETH(currentBid).then(setUsdPrice);
  }, [currentBid]);

  useEffect(() => {
    const interval = setInterval(() => {
      const isStarted = !calculateTimeLeft(`${startsAt ?? new Date()}`).isLeft;
      setIsStarted(isStarted);
      const newTimeLeft = calculateTimeLeft(`${isStarted ? endsIn : startsAt}`);
      if (newTimeLeft.isLeft !== timeLeft.isLeft)
        updateCallback?.().catch((e) => console.error(e));
      setTimeLeft(newTimeLeft);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, endsIn, startsAt]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const price = await getUsdPriceFromETH(currentBid).catch((e) => {
        console.error(e);
        return null;
      });
      if (price) setUsdPrice(price);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentBid]);

  return (
    <>
      <div className="flex items-start justify-between mobile:flex-col tablet:flex-row mobile:mt-20px tablet:mt-[0px]">
        <div>
          <p className="font-rlight text-14px opacity-70 tablet:mb-12px">
            {isSale ? 'Current price' : hasBid ? 'Current bid' : 'Minimum bid'}
          </p>
          <p className="mobile:text-27px tablet:text-32px font-rblack">
            {+currentBid ? currentBid : '—'} ETH
          </p>
          {!!usdPrice && (
            <p className="font-rlight mobile:text-14px tablet:text-16px">
              ${+usdPrice ? usdPrice : '—'}
            </p>
          )}
        </div>
        {timeLeft.isLeft && (
          <>
            <div className="self-end tablet:h-60px mobile:h-4px tablet:w-[4px] mobile:w-full mobile:my-20px tablet:my-[0px] bg-carbon dark:bg-white" />
            <div>
              <p className="font-rlight text-14px opacity-70 tablet:mb-12px">
                {isStarted ? 'Ends in' : 'Starts in'}
              </p>
              <div className="flex -mx-10px">
                <div className="text-center px-10px">
                  <p className="mobile:text-27px tablet:text-32px font-rblack">
                    {timeLeft.days}
                  </p>
                  <p className="font-rlight mobile:text-14px tablet:text-16px">
                    days
                  </p>
                </div>
                <div className="text-center px-10px">
                  <p className="mobile:text-27px tablet:text-32px font-rblack">
                    {timeLeft.hours}
                  </p>
                  <p className="font-rlight mobile:text-14px tablet:text-16px">
                    hours
                  </p>
                </div>
                <div className="text-center px-10px">
                  <p className="mobile:text-27px tablet:text-32px font-rblack">
                    {timeLeft.minutes}
                  </p>
                  <p className="font-rlight mobile:text-14px tablet:text-16px">
                    minutes
                  </p>
                </div>
                <div className="text-center px-10px">
                  <p className="font-rblack mobile:text-27px tablet:text-32px font-rblack">
                    {timeLeft.seconds}
                  </p>
                  <p className="mobile:text-14px tablet:text-16px">seconds</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {!isMobile && isStarted && (
        <Button
          mode="custom"
          label={isSale ? 'Buy Now' : 'Place Bid'}
          onClick={async () => {
            if (isSale) {
              try {
                await makeBid(
                  contractAddress,
                  tokenId,
                  buyNowPrice!,
                  auctionVersion,
                );
              } catch (error: any) {
                console.error(error?.message ?? error);
              } finally {
                await updateCallback?.().catch((e) => console.error(e));
              }
            } else {
              showPopup('bid', {
                proposedBids,
                contractAddress,
                tokenId,
                auctionVersion,
                updateCallback,
              });
            }
          }}
          className="bg-white text-carbon w-100% mt-24px"
        />
      )}
    </>
  );
};

const NftCardDetail = ({ item }: NftCardDetailProps) => {
  const { isTablet, isMobile } = useViewPort();
  const { activePopupName, showPopup } = usePopup();
  const { push } = useAppRouter();
  const { makeBid, getAuctionInfo, getOwnerOfNFT } = useWeb3Modal();
  const { hidePreloader, showPreloader } = usePreloader();
  const [isStarted, setIsStarted] = useState(false);
  const [lightboxToggler, setLightboxToggler] = React.useState<boolean>(false);

  const [isSold, setSold] = useState<boolean>(false);
  const [hasBid, setHasBid] = useState<boolean>(false);
  const [tokenOwner, setTokenOwner] = useState<string>('');
  const [currentBid, setCurrentBid] = useState<{
    bid: string;
    proposedBids: string[];
    fullInfo: any;
    bidHistory: BidInfo[];
    buyNowPrice?: string;
    endsAt?: Date;
  }>({ bid: '0', proposedBids: ['0'], fullInfo: '', bidHistory: [] });

  useEffect(() => {
    showPreloader();

    return () => {
      hidePreloader();
    };
  }, []);

  const artist = useMemo(
    () => ({
      name: item.artist,
      bio: '',
      avatarSrc: '/img/avatars/placeholder.png',
      ...ArtistsData[item.artist],
    }),
    [item.artist],
  );

  const collectionData = useMemo(
    () => AuctionCollectionData[item.category],
    [item.category],
  );

  const endsAt = useMemo(
    () =>
      currentBid.endsAt && currentBid.endsAt > collectionData.endsIn
        ? currentBid.endsAt
        : collectionData.endsIn,
    [collectionData.endsIn, currentBid.endsAt],
  );

  const neighbours = useMemo(() => {
    const previous =
      item.index > 0
        ? AuctionData[item.index - 1]!
        : AuctionData[AuctionData.length - 1]!;
    const next =
      item.index < AuctionData.length - 1
        ? AuctionData[item.index + 1]!
        : AuctionData[0]!;
    return [
      {
        ...AuctionCollectionData[previous.category]!,
        ...previous,
      },
      {
        ...AuctionCollectionData[next.category]!,
        ...next,
      },
    ];
  }, [item.index]);

  useEffect(() => {
    const interval = setInterval(() => {
      const isStarted = collectionData.startsAt
        ? +new Date() >= +collectionData.startsAt
        : true;
      setIsStarted(isStarted);
    }, 1000);
    return () => clearInterval(interval);
  }, [collectionData.startsAt]);

  const updateInfo = async () =>
    getAuctionInfo(
      collectionData.contractAddress,
      item.tokenId,
      collectionData.version,
    ).then(async (i) => {
      setCurrentBid({ ...i });
      const isSold = i.isSold && isStarted;
      setSold(isSold);
      setHasBid(i.hasBid);
      if (isSold)
        setTokenOwner(
          await getOwnerOfNFT(collectionData.contractAddress, item.tokenId),
        );
    });

  useEffect(() => {
    updateInfo()
      .catch((error) => console.log(`NftCardDetail ${error}`))
      .finally(() => {
        hidePreloader();
      });
  }, [isStarted, collectionData.contractAddress, item.tokenId]);

  const handleToAuction = () => push('/auction');

  return (
    <>
      <div>
        {(isTablet || isMobile) && !isSold && !activePopupName && (
          <div className="tablet:border-[5px] fixed bg-[#212121] text-white bottom-20px left-[2%] right-[2%] tablet:p-48px w-[96%] z-50 ">
            {isTablet ? (
              <BidCard
                startsAt={collectionData.startsAt}
                endsIn={endsAt}
                proposedBids={currentBid.proposedBids}
                currentBid={currentBid.bid}
                contractAddress={collectionData.contractAddress}
                tokenId={item.tokenId}
                isSale={item.isSale}
                hasBid={hasBid}
                auctionVersion={collectionData.version}
                updateCallback={updateInfo}
              />
            ) : isStarted ? (
              <Button
                mode="custom"
                label={item.isSale ? 'Buy Now' : 'Place Bid'}
                onClick={async () => {
                  if (item.isSale) {
                    try {
                      await makeBid(
                        collectionData.contractAddress,
                        item.tokenId,
                        currentBid.buyNowPrice!,
                        collectionData.version,
                      );
                      await getAuctionInfo(
                        collectionData.contractAddress,
                        item.tokenId,
                        collectionData.version,
                      ).then(async (i) => setCurrentBid({ ...i }));
                    } catch (error: any) {
                      console.error(
                        error?.error?.message ?? error?.message ?? error,
                      );
                    }
                  } else {
                    showPopup('bid', {
                      proposedBids: currentBid.proposedBids,
                      contractAddress: collectionData.contractAddress,
                      tokenId: item.tokenId,
                      auctionVersion: collectionData.version,
                      updateCallback: updateInfo,
                    });
                  }
                }}
                className="bg-white text-carbon w-100%"
              />
            ) : null}
          </div>
        )}
        <div className="flex mt-40px mobile:flex-col desktop:flex-row justify-between">
          <div className="desktop:w-[48%] mobile: w-full">
            <ScaledImage
              title={item.name}
              alt={item.name}
              src={item.imageSrc}
              onClick={() => setLightboxToggler(!lightboxToggler)}
              postLoad={item.imageSrc.endsWith('.gif') || item.animationSrc}
              containerClassName="cursor-pointer"
              breakpoints={[
                {
                  lowerBound: 'desktop',
                  ratio: 0.5,
                },
              ]}
            />
            <FsLightbox
              toggler={lightboxToggler}
              sources={[item.animationSrc || item.imageSrc]}
            />
          </div>
          <div className="desktop:w-[48%] mobile: w-full">
            {isSold ? (
              <p className="mobile:text-27px tablet:text-32px font-rblack  mobile:mt-20px desktop:mt-[0px]">
                Sold
              </p>
            ) : isTablet ? (
              <></>
            ) : (
              <BidCard
                isMobile={isMobile}
                startsAt={collectionData.startsAt}
                endsIn={endsAt}
                proposedBids={currentBid.proposedBids}
                currentBid={currentBid.bid}
                contractAddress={collectionData.contractAddress}
                tokenId={item.tokenId}
                isSale={item.isSale}
                hasBid={hasBid}
                auctionVersion={collectionData.version}
                updateCallback={updateInfo}
              />
            )}
            <p className="font-rlight whitespace-pre-wrap mobile:text-14px tablet:text-16px mobile:mt-40px leading-[150%] tablet:mt-48px">
              {item.descriptionEnglish}
            </p>
            <p className="font-rlight whitespace-pre-wrap mobile:text-14px tablet:text-16px leading-[150%] mt-24px">
              {item.descriptionUkrainian}
            </p>
            <div className="font-rlight flex flex-col mobile:mt-40px tablet:mt-48px">
              {artist.name.length > 0 && (
                <div className="mobile:mb-40px tablet:mb-48px">
                  <div className="flex mobile:flex-col tablet:flex-row text-16px">
                    <div className="flex flex-row">
                      <img
                        src={artist.avatarSrc}
                        alt={artist.name + "'s Avatar"}
                        className="rounded-full mobile:w-40px tablet:w-48px mobile:h-40px tablet:h-48px mr-24px"
                      />
                      <div className="flex flex-col">
                        <p className="font-rlight mobile:text-14px tablet:text-16px mobile:leading-20px tablet:leading-24px">
                          Artist:
                        </p>
                        <p className="font-rblack mobile:text-16px tablet:text-20px mobile:leading-20px tablet:leading-24px">
                          {artist.name}
                        </p>
                      </div>
                    </div>
                  </div>
                  {artist.bio.length > 0 ? (
                    <p className="font-rlight mobile:text-14px tablet:text-16px mobile:leading-20px tablet:leading-24px mt-12px">
                      {artist.bio}
                    </p>
                  ) : null}
                </div>
              )}
              <div className="font-rlight flex mobile:flex-col tablet:flex-row">
                <div className="flex flex-row text-16px">
                  <p>Edition:</p>
                  <p className="ml-[8px]">1 of 1</p>
                </div>
                {isSold && (
                  <div className="flex mobile:ml-[0px] tablet:ml-48px mobile:my-[20px] tablet:my-[0px]">
                    <p>Owner:</p>
                    <p className="ml-[8px]" title={tokenOwner}>
                      {truncateAddress(tokenOwner, 13)}
                    </p>
                  </div>
                )}
              </div>
            </div>
            {isSold && false /*TODO*/ && (
              <div className="mobile:mt-60px tablet:mt-72px desktop:mt-96px">
                <p className="mobile:text-27px tablet:text-32px font-rblack mobile:mb-30px tablet:mb-36px">
                  Bids history
                </p>
                <BidsHistoryTable bids={currentBid.bidHistory} />
              </div>
            )}
            <div className="desktop:mt-96px mobile:my-60px tablet:mt-72px">
              <div className="flex items-center mobile:mb-[20px] tablet:mb-24px">
                <p className="mobile:text-27px tablet:text-32px font-rblack">
                  More auctions
                </p>
                {!isMobile && (
                  <p
                    onClick={handleToAuction}
                    className="text-[14px] font-rblack ml-32px  hover:cursor-pointer"
                  >
                    See all auctions
                  </p>
                )}
              </div>
              <div className="flex flex-wrap -mx-24px">
                {neighbours.map((item, index) => (
                  <div
                    className={`tablet:w-1/2 mobile:w-full flex flex-col p-14px`}
                    key={item.index}
                  >
                    <NftCard
                      breakpoints={[
                        {
                          lowerBound: 'tablet',
                          ratio: 0.5,
                        },
                        {
                          lowerBound: 'desktop',
                          ratio: 0.25,
                        },
                      ]}
                      orderIndex={index}
                      index={item.index}
                      imageSrc={item.imageSrc}
                      animationSrc={item.animationSrc}
                      name={item.name}
                      startsAt={item.startsAt}
                      endsIn={item.endsIn}
                      contractAddress={item.contractAddress}
                      tokenId={item.tokenId}
                      isSale={item.isSale}
                      version={item.version}
                      type="small"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftCardDetail;
