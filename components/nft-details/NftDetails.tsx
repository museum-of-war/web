import FsLightbox from 'fslightbox-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { VscTwitter } from 'react-icons/vsc';
import { useInView } from 'react-intersection-observer';
import { openInNewTab } from '@sections/utils';
import Button from '@components/Button';
import ScaledImage, { BreakpointRatios } from '@components/ScaledImage';
import { useViewPort } from '@hooks/useViewport';
import MintingModal from '@components/MintingModal';
import { WarlineDrop } from '../../constants/collections/Warline/constants';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { useIsMounted } from '@hooks/useIsMounted';
import { DropTokenIdOffsets } from '../../constants/collections/Warline';
import { JOINLIST_LINK } from '@sections/constants';
import { useEffectPeriodic } from '@hooks/useEffectPeriodic';

type ImageSources = {
  previewSrc: string;
  originalSrc: string;
  animationSrc: string;
  isAnimation?: boolean;
  randomSrc: string;
};

export type PrevNextRecord = {
  title: string;
  imageSources: ImageSources;
  path: string;
};

type NftDetailsProps = {
  id: string;
  level?: number;
  title: string;
  descriptionEnglish: string | JSX.Element;
  descriptionUkrainian?: string | JSX.Element;
  twitterUrl: string;
  twitterUsername: string;
  headline: string;
  artistUrl?: string;
  artistName: string;
  editions?: number;
  editionInfo?: string;
  owner?: string;
  openSeaLink?: string;
  editionsList?: { edition: string; openSeaLink: string }[];
  imageSources: ImageSources;
  prevRecord?: PrevNextRecord;
  nextRecord?: PrevNextRecord;
  linkBack: string;
  linkBackText: string;
  withBuyNowButton?: boolean;
  withGetNowButton?: boolean;
  warlineDrop?: WarlineDrop;
};
export const NftDetails: React.FC<NftDetailsProps> = ({
  id,
  level,
  title,
  descriptionEnglish,
  descriptionUkrainian,
  headline,
  twitterUrl,
  twitterUsername,
  artistName,
  artistUrl,
  editions,
  editionInfo,
  owner,
  openSeaLink,
  editionsList,
  prevRecord,
  nextRecord,
  imageSources,
  linkBack,
  linkBackText,
  withBuyNowButton,
  withGetNowButton,
  warlineDrop,
}) => {
  const [toggler, setToggler] = React.useState<boolean>(false);
  const [openMintingModal, setOpenMintingModal] = useState<boolean>(false);
  const [editionsLeft, setEditionsLeft] = useState<number | null>(null);
  const { ref, inView } = useInView();
  const { isDesktop, isTablet, isMobile } = useViewPort();
  const { canMintThirdDrop, canMintFourthDrop, canMintFifthDrop } =
    useWeb3Modal();
  const isMounted = useIsMounted();

  useEffectPeriodic(
    () =>
      (warlineDrop === WarlineDrop.Drop3
        ? canMintThirdDrop
        : warlineDrop === WarlineDrop.Drop4
        ? canMintFourthDrop
        : warlineDrop === WarlineDrop.Drop5
        ? canMintFifthDrop
        : () => Promise.resolve(null))(
        +id - DropTokenIdOffsets[warlineDrop!],
      ).then((left) => {
        if (!isMounted.current) return;
        setEditionsLeft(left);
      }),
    5000,
    [id, warlineDrop, editions],
  );

  const renderImage = ({
    title,
    imageSources,
    className,
    containerClassName,
    withLightbox = true,
    breakpoints,
  }: {
    title: string;
    imageSources: ImageSources;
    className: string;
    containerClassName: string;
    withLightbox?: boolean;
    loadOriginal?: boolean;
    breakpoints: BreakpointRatios;
  }) => {
    const img = (
      <ScaledImage
        alt={title}
        title={title}
        onClick={withLightbox ? () => setToggler(!toggler) : undefined}
        src={
          imageSources.isAnimation
            ? imageSources.previewSrc
            : imageSources.originalSrc
        }
        postLoad={imageSources.isAnimation ? imageSources.animationSrc : false}
        className={className}
        containerClassName={containerClassName}
        breakpoints={breakpoints}
      />
    );
    return withLightbox ? (
      <>
        {img}
        <FsLightbox toggler={toggler} sources={[imageSources.originalSrc]} />
      </>
    ) : (
      img
    );
  };

  const nextPrevRecordClassname =
    'cursor-pointer object-contain aspect-square transition-transform hover:scale-[101%]';
  const nextPrevRecordContainerClassname = 'flex-1';

  const counterJsx = (
    <div className="mobile:ml-auto desktop:ml-48px mobile:text-12px tablet:text-14px font-rlight">
      #{id.toString().padStart(4, '0')}
    </div>
  );

  const getPrevButtonJsx = (active: boolean) => (
    <a>
      <img
        alt="Previous"
        src={'/img/down.svg'}
        className={`rotate-90 flex-grow-0 rounded-full p-7px tablet:p-[11px] border-carbon border ${
          active ? 'cursor-pointer active:translate-y-1' : 'opacity-20'
        } `}
      />
    </a>
  );
  const getNextButtonJsx = (active: boolean) => (
    <a>
      <img
        alt="Next"
        src={'/img/down.svg'}
        className={`-rotate-90 flex-grow-0 rounded-full p-7px tablet:p-[11px] border-carbon border ${
          active ? 'cursor-pointer active:translate-y-1' : 'opacity-20'
        } `}
      />
    </a>
  );

  const getNavButtonsJsx = (
    className: string = 'tablet:flex mobile:hidden gap-[24px] mobile:ml-auto tablet:ml-48px desktop:ml-auto',
    hasShadow = false,
  ) =>
    prevRecord || nextRecord ? (
      <div
        className={className}
        style={{ boxShadow: hasShadow ? '0px 0 10px rgba(0, 0, 0, 0.8)' : '' }}
      >
        {prevRecord ? (
          <Link href={prevRecord.path} passHref>
            {getPrevButtonJsx(true)}
          </Link>
        ) : (
          getPrevButtonJsx(false)
        )}
        {nextRecord ? (
          <Link href={nextRecord.path} passHref>
            {getNextButtonJsx(true)}
          </Link>
        ) : (
          getNextButtonJsx(false)
        )}
      </div>
    ) : undefined;

  const renderBuyButton = (
    containerCn: string = '',
    linkBtnCn: string = '',
    disabled: boolean = false,
  ): React.ReactElement => (
    <div className={containerCn}>
      <Button
        mode="primary"
        label="Buy Now"
        className={linkBtnCn}
        disabled={disabled}
        onClick={() => setOpenMintingModal(true)}
      />
      {openMintingModal ? (
        <MintingModal
          setOpenMintingModal={setOpenMintingModal}
          drop={warlineDrop}
          maxMints={editionsLeft ?? undefined}
          tokenId={+id - (warlineDrop ? DropTokenIdOffsets[warlineDrop] : 0)}
        />
      ) : (
        <></>
      )}
    </div>
  );

  const renderGetButton = (
    containerCn: string = '',
    linkBtnCn: string = '',
    disabled: boolean = false,
  ): React.ReactElement => (
    <div className={containerCn}>
      <Button
        mode="primary"
        label="Get Now"
        className={linkBtnCn}
        disabled={disabled}
        onClick={() => openInNewTab(JOINLIST_LINK)}
      />
    </div>
  );

  const prevNextBreakpoints = [
    {
      lowerBound: 'tablet',
      ratio: 0.5,
    },
    {
      lowerBound: 'desktop',
      ratio: 0.25,
    },
  ] as BreakpointRatios;

  return (
    <div className="font-rnarrow desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
      <div className="flex items-center mt-[-36px] mb-[24px]">
        <Link href={linkBack} passHref>
          <a>
            <div className="h-[48px] flex items-center cursor-pointer group">
              <img
                alt="Previous"
                src={'/img/down.svg'}
                className="rotate-90 flex-grow-0"
              />
              <span className="font-rblack text-[14px] ml-[8px] h-full leading-[48px] group-hover:border-b-4 group-hover:border-b-carbon transition-[border-width]">
                {linkBackText}
              </span>
            </div>
          </a>
        </Link>
        <div className="flex items-center flex-1 desktop:hidden">
          {counterJsx}
          {getNavButtonsJsx()}
        </div>
      </div>

      <div className="flex items-center pb-10px border-carbon border-b-4">
        <div
          className="
          mobile:text-27px mobile:leading-30px
          tablet:text-70px tablet:leading-72px
          font-rblack"
        >
          {title}
        </div>
        <div className="items-center flex-1 hidden desktop:flex">
          {counterJsx}
          {getNavButtonsJsx()}
        </div>
      </div>
      <div className="relative flex flex-col desktop:flex-row desktop:gap-[48px] gap-[20px] pt-[40px]">
        <div className="flex-1">
          <div className="relative">
            {renderImage({
              imageSources,
              title,
              className:
                'overflow-auto object-contain cursor-pointer transition-transform hover:scale-[101%] max-h-[800px] max-w-[800px] ml-auto object-left-top w-full',
              containerClassName: 'flex-1 z-1',
              breakpoints: [
                {
                  lowerBound: 'desktop',
                  ratio: 0.5,
                },
              ],
            })}
            {editionsList && editionsList.length > 1 && (
              <div className="before:absolute before:content-[''] before:border-solid before:border-carbon before:border-b-8 before:border-r-8 before:w-8px before:h-90% before:-bottom-7 before:-right-7 after:absolute after:content-[''] after:border-solid after:border-carbon after:border-b-8 after:border-r-8 after:w-90% after:h-8px after:-bottom-7 after:-right-7" />
            )}
          </div>
        </div>
        <div className="desktop:w-[544px] mobile:w-full box-border flex flex-col gap-[48px] text-[14px] tablet:text-[16px]">
          {(withBuyNowButton || withGetNowButton) && (
            <div
              className={`flex flex-col gap-24px ${
                isTablet
                  ? 'bg-white border-[5px] border-carbon fixed bottom-20px left-[2%] right-[2%] p-48px w-[96%] z-10'
                  : ''
              }`}
            >
              <div className="flex tablet:flex-row mobile:flex-col justify-between tablet:items-end mobile:items-start gap-20px">
                <div className="flex flex-col">
                  {withBuyNowButton && (
                    <p className="font-rnarrow tablet:text-16px tablet:leading-24px mobile:text-14px mobile:leading-30px opacity-70">
                      Price
                    </p>
                  )}
                  <p className="font-rblack tablet:text-32px tablet:leading-36px mobile:text-27px mobile:leading-30px">
                    {withGetNowButton ? 'Whitelisted' : '0.15 ETH'}
                  </p>
                </div>
                <div className="flex flex-row gap-[8px] font-rnarrow tablet:text-16px tablet:leading-36px mobile:text-14px mobile:leading-20px">
                  <p>Editions:</p>
                  <p>
                    {editionsLeft === 0
                      ? `${editions ?? '?'}`
                      : `${editionsLeft ?? '?'} of ${editions ?? '?'} left`}
                  </p>
                </div>
              </div>
              {editionsLeft !== 0
                ? (withGetNowButton ? renderGetButton : renderBuyButton)(
                    `w-100% ${
                      isMobile
                        ? 'fixed bottom-[68px] left-[2%] right-[2%] w-[96%] z-10'
                        : ''
                    }`,
                    'w-100% disabled:opacity-70 font-rblack tablet:h-48px mobile:h-60px',
                    editionsLeft === null,
                  )
                : null}
            </div>
          )}
          {!!editionsList?.length && editionInfo !== '1 of 1' && (
            <div className="bg-carbon font-rblack text-white p-24px mobile:leading-20px tablet:leading-24px flex mobile:flex-col tablet:flex-row tablet:items-center justify-between">
              <p className="mobile:text-[17px] tablet:text-20px">
                {isDesktop
                  ? `${editionsList.length} editions left`
                  : `You have ${editionsList.length} editions`}
              </p>
              <Link href={`/upgrade-your-nft/${id}/${level ?? 0}`} passHref>
                <a>
                  <Button
                    mode="primary"
                    className={`tablet:h-48px mobile:h-60px mobile:w-100% tablet:w-auto mobile:mt-20px tablet:mt-0`}
                    round={false}
                    label="Upgrade Now"
                  />
                </a>
              </Link>
            </div>
          )}
          {headline && (
            <a href={twitterUrl} target="_blank" rel="noreferrer">
              <div className="border-carbon border-4 p-[20px] flex flex-col tablet:flex-row gap-[24px]">
                <div className="flex-1">
                  {headline}
                  {twitterUsername?.length > 0 && (
                    <p className="text-[14px] mt-[24px] font-rlight">{`@${twitterUsername}`}</p>
                  )}
                </div>
                <VscTwitter className="w-[48px] h-[48px] box-border border border-carbon rounded-full p-[12px]" />
              </div>
            </a>
          )}
          <div>
            <p>{descriptionEnglish}</p>
            <br />
            <p>{descriptionUkrainian}</p>
          </div>
          {artistName?.length > 0 && (
            <div className="flex flex-row gap-[48px]">
              <div>
                Artist:{' '}
                {artistUrl ? (
                  <a
                    href={artistUrl}
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {artistName}
                  </a>
                ) : (
                  artistName
                )}
              </div>
              {(!editionsList?.length || editionInfo === '1 of 1') && (
                <div>
                  {editionInfo || editionInfo === ''
                    ? `Edition: ${editionInfo || '1 of 1'}`
                    : editions
                    ? `Editions: ${editions}`
                    : null}
                </div>
              )}
            </div>
          )}
          {owner && <div>Owner: {owner}</div>}
          {openSeaLink &&
            (!editionsList?.length || editionInfo === '1 of 1') && (
              <Button
                mode="secondary"
                label="Open on OpenSea"
                onClick={() => openInNewTab(openSeaLink)}
                className="self-start"
              />
            )}
          {editionsList && editionInfo !== '1 of 1' && (
            <div className="flex flex-col gap-[8px] mobile:leading-40px tablet:leading-48px">
              <p className="font-rblack mobile:text-[17px] tablet:text-20px">
                Editions:
              </p>
              {editionsList.map(({ edition, openSeaLink }, index) => (
                <p key={index} className="flex flex-row gap-[24px]">
                  <span className="text-16px">{edition}</span>
                  <a
                    className="font-rblack text-14px"
                    href={openSeaLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open on OpenSea
                  </a>
                </p>
              ))}
            </div>
          )}
          <div className="flex flex-col-reverse tablet:flex-row gap-[36px] tablet:gap-[48px] mt-[24px] items-start mb-60px">
            <div className="flex-1 flex">
              {prevRecord ? (
                <Link href={prevRecord.path} passHref>
                  <a>
                    <div role="button" className="flex-1 flex-col group">
                      {renderImage({
                        title: prevRecord.title,
                        className: nextPrevRecordClassname,
                        containerClassName: nextPrevRecordContainerClassname,
                        imageSources: prevRecord.imageSources,
                        withLightbox: false,
                        breakpoints: prevNextBreakpoints,
                      })}
                      <div className="h-[44px] flex items-center">
                        <img
                          alt="Previous"
                          src={'/img/down.svg'}
                          className="rotate-90 flex-grow-0"
                        />
                        <span
                          className="font-rblack text-[14px] ml-[8px] h-full leading-[44px] group-hover:border-b-4 group-hover:border-b-carbon transition-[border-width] line-clamp-1"
                          title={prevRecord.title}
                        >
                          {prevRecord.title}
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              ) : null}
            </div>
            <div className="flex-1 flex">
              {nextRecord ? (
                <Link href={nextRecord.path} passHref>
                  <a>
                    <div role="button" className="flex-1 flex-col group">
                      {renderImage({
                        title: nextRecord.title,
                        className: nextPrevRecordClassname,
                        containerClassName: nextPrevRecordContainerClassname,
                        imageSources: nextRecord.imageSources,
                        withLightbox: false,
                        breakpoints: prevNextBreakpoints,
                      })}
                      <div className="h-[48px] flex items-center">
                        <span
                          className="ml-auto font-rblack text-[14px] ml-[8px] h-full leading-[48px] group-hover:border-b-4 group-hover:border-b-carbon transition-[border-width] line-clamp-1"
                          title={nextRecord.title}
                        >
                          {nextRecord.title}
                        </span>
                        <img
                          alt="Next"
                          src={'/img/down.svg'}
                          className="-rotate-90 flex-grow-0"
                        />
                      </div>
                    </div>
                  </a>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div ref={ref} />
      {!inView &&
        getNavButtonsJsx(
          'tablet:hidden mobile:fixed bottom-0 left-0 right-0 flex flex-row w-full justify-between px-60px py-10px bg-white',
          true,
        )}
    </div>
  );
};
