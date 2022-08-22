import React, { useEffect, useMemo, useState } from 'react';
import ScaledImage from '@components/ScaledImage';
import BidsHistoryTable from '@components/BidsHistoryTable';
import Button from '@components/Button';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { useViewPort } from '@hooks/useViewport';
import { AuctionItemType, BidInfo } from '@sections/types';
import { useIsMounted } from '@hooks/useIsMounted';
import AuctionData from '@sections/Auction/AuctionData';
import NftCard from '@components/NftCard';
import { usePopup } from 'providers/PopupProvider';
import { truncateAddress } from '@sections/utils';
import { usePreloader } from '@providers/PreloaderProvider';
import AuctionCollectionData from '@sections/Auction/AuctionCollectionData';
import FsLightbox from 'fslightbox-react';
import ArtistsData from '@sections/ArtistsData';
import { BidCard } from '@sections/NftDetail/BidCard';
import BuyingModal from '@components/BuyingModal';
import { useVideoModal } from '@providers/VideoProvider';
import Link from 'next/link';

type NftCardDetailProps = {
  item: AuctionItemType;
  oneItemAuction?: boolean;
  className?: string;
};
const NftCardDetail = ({
  item,
  oneItemAuction,
  className,
}: NftCardDetailProps) => {
  const { isTablet, isMobile } = useViewPort();
  const { activePopupName, showPopup } = usePopup();
  const { makeBid, getAuctionInfo, getOwnerOfNFT } = useWeb3Modal();
  const { hidePreloader, showPreloader } = usePreloader();
  const { VideoElement } = useVideoModal();

  const [isStarted, setIsStarted] = useState(false);
  const [lightboxToggler, setLightboxToggler] = React.useState<boolean>(false);
  const [openBuyingModal, setOpenBuyingModal] = useState<boolean>(false);

  const [isSold, setSold] = useState<boolean>(false);
  const [hasBid, setHasBid] = useState<boolean>(false);
  const [tokenOwner, setTokenOwner] = useState<string>('');
  const [currentBid, setCurrentBid] = useState<{
    bid: string;
    proposedBids: string[];
    fullInfo: any;
    bidHistory: BidInfo[];
    tokensLeft?: number;
    buyNowPrice?: string;
    startsAt?: Date;
    endsAt?: Date;
    isExternalBidGreater?: boolean;
  }>({
    bid: '0',
    proposedBids: ['0'],
    fullInfo: '',
    bidHistory: [],
    isExternalBidGreater: false,
  });

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

  const startsAt = useMemo(
    () =>
      currentBid.startsAt &&
      (!(item.startsAt ?? collectionData.startsAt) ||
        currentBid.startsAt > (item.startsAt ?? collectionData.startsAt)!)
        ? currentBid.startsAt
        : (item.startsAt ?? collectionData.startsAt)!,
    [collectionData.startsAt, currentBid.startsAt, item.startsAt],
  );

  const endsAt = useMemo(
    () =>
      currentBid.endsAt &&
      currentBid.endsAt > (item.endsIn ?? collectionData.endsIn)
        ? currentBid.endsAt
        : item.endsIn ?? collectionData.endsIn,
    [collectionData.endsIn, currentBid.endsAt, item.endsIn],
  );

  const neighbours = useMemo(() => {
    if (typeof item.index === 'undefined' || oneItemAuction) return [];

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

  const isMounted = useIsMounted();

  useEffect(() => {
    const interval = setInterval(() => {
      const isStarted = startsAt ? +new Date() >= +startsAt : true;
      setIsStarted(isStarted);
    }, 1000);
    return () => clearInterval(interval);
  }, [startsAt]);

  const updateInfo = async () =>
    getAuctionInfo(
      collectionData.contractAddress,
      item.tokenId,
      collectionData.version,
      item.externalBid,
    ).then(async (i) => {
      if (!isMounted.current) {
        return;
      }
      setCurrentBid({ ...i });
      const isSold = !i.tokensLeft && isStarted;
      setSold(isSold);
      setHasBid(i.hasBid);
      if (isSold) {
        setTokenOwner(
          await getOwnerOfNFT(collectionData.contractAddress, item.tokenId),
        );
      }
    });

  useEffect(() => {
    const interval = setInterval(() => {
      updateInfo()
        .catch((error) => console.log(`NftCardDetail ${error}`))
        .finally(() => {
          hidePreloader();
        });
    }, 5000);
    return () => clearInterval(interval);
  }, [isStarted, collectionData.contractAddress, item.tokenId]);

  return (
    <div className={className}>
      {(isTablet || isMobile) && !isSold && !activePopupName && (
        <div className="tablet:border-[5px] fixed tablet:bg-[#212121] text-white bottom-20px left-[2%] right-[2%] tablet:p-48px w-[96%] z-50 ">
          {isTablet ? (
            <BidCard
              startsAt={startsAt}
              endsIn={endsAt}
              proposedBids={currentBid.proposedBids}
              currentBid={currentBid.bid}
              collection={item.category}
              contractAddress={collectionData.contractAddress}
              tokenId={item.tokenId}
              isSale={item.isSale}
              hasBid={hasBid}
              buyNowPrice={currentBid.buyNowPrice}
              auctionVersion={collectionData.version}
              isExternalBidGreater={currentBid.isExternalBidGreater}
              editionsLeft={currentBid.tokensLeft}
              editionsTotal={item.editions}
              secondButton={item.externalButton?.Big()}
              updateCallback={updateInfo}
            />
          ) : isStarted ? (
            <div className="flex justify-between mt-24px">
              <Button
                mode="custom"
                label={
                  item.isSale
                    ? 'Buy Now'
                    : item.externalButton
                    ? 'ETH'
                    : 'Place Bid'
                }
                onClick={async () => {
                  if (item.isSale) {
                    if (item.editions) {
                      setOpenBuyingModal(true);
                    } else {
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
                          item.externalBid,
                        ).then(
                          async (i) =>
                            isMounted.current && setCurrentBid({ ...i }),
                        );
                      } catch (error: any) {
                        alert(error?.error?.message ?? error?.message ?? error);
                      }
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
                className={`bg-white text-carbon ${
                  !!item.externalButton ? 'basis-6/12' : 'w-100%'
                } h-60px`}
              />
              {item.externalButton?.Small()}
            </div>
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
              startsAt={startsAt}
              endsIn={endsAt}
              proposedBids={currentBid.proposedBids}
              currentBid={currentBid.bid}
              collection={item.category}
              contractAddress={collectionData.contractAddress}
              tokenId={item.tokenId}
              isSale={item.isSale}
              hasBid={hasBid}
              buyNowPrice={currentBid.buyNowPrice}
              auctionVersion={collectionData.version}
              isExternalBidGreater={currentBid.isExternalBidGreater}
              editionsLeft={currentBid.tokensLeft}
              editionsTotal={item.editions}
              secondButton={item.externalButton?.Big()}
              updateCallback={updateInfo}
            />
          )}
          <p className="font-rlight whitespace-pre-wrap mobile:text-14px tablet:text-16px mobile:mt-40px leading-[150%] tablet:mt-48px">
            {item.descriptionEnglish}
          </p>
          <p className="font-rlight whitespace-pre-wrap mobile:text-14px tablet:text-16px leading-[150%] mt-24px">
            {item.descriptionUkrainian}
          </p>
          {item.videoSrc ? (
            <div>
              <VideoElement
                videoSrc={item.videoSrc}
                posterSrc={item.posterSrc}
                classNames="w-full desktop:mt-48px tablet:mt-48px mobile:mt-20px desktop:max-h-300px"
                styles={{ aspectRatio: '16 / 9' }}
              />
            </div>
          ) : null}
          {item.bonuses ? (
            <div className="font-rnarrow w-full flex desktop:flex-wrap tablet:flex-wrap mobile:flex-nowrap content-start desktop:flex-row tablet:flex-row mobile:flex-col justify-between">
              <p className="font-rblack desktop:text-32px tablet:text-32px mobile:text-27px desktop:leading-36px tablet:leading-36px mobile:leading-30px desktop:mt-48px tablet:mt-48px mobile:mt-40px">
                By winning NFT auction by cryptocurrency, the new owner
                receives:
              </p>
              {item.bonuses.map((bonus, index) => (
                <div
                  key={index}
                  className="desktop:w-45% tablet:w-45% mobile:w-full desktop:mt-24px tablet:mt-24px mobile:mt-[20px]"
                >
                  <p className="font-rblack text-20px desktop:leading-48px table t:leading-48px tablet:leading-40px mb-24px">
                    {index + 1}
                  </p>
                  {bonus}
                </div>
              ))}
            </div>
          ) : null}
          {item.additionalInfo ? (
            <div className="font-rnarrow w-full flex desktop:flex-wrap tablet:flex-wrap mobile:flex-nowrap content-start desktop:flex-row tablet:flex-row mobile:flex-col justify-between">
              <p className="font-rblack desktop:text-32px tablet:text-32px mobile:text-27px desktop:leading-36px tablet:leading-36px mobile:leading-30px desktop:mt-48px tablet:mt-48px mobile:mt-40px desktop:mb-24px tablet:mb-24px mobile:mb-[20px]">
                For everyone's information:
              </p>
              {item.additionalInfo}
            </div>
          ) : null}
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
          {oneItemAuction ? null : (
            <>
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
                    <Link href="/auction" passHref>
                      <a>
                        <p className="text-[14px] font-rblack ml-32px  hover:cursor-pointer">
                          See all auctions
                        </p>
                      </a>
                    </Link>
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
                        externalBid={item.externalBid}
                        type="small"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {openBuyingModal ? (
        <BuyingModal
          setOpenBuyingModal={setOpenBuyingModal}
          collection={item.category}
          price={+currentBid.buyNowPrice!}
          tokenId={item.tokenId}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default NftCardDetail;
