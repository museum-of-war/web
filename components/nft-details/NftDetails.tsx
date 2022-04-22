import FsLightbox from 'fslightbox-react';
import Link from 'next/link';
import React from 'react';
import { VscTwitter } from 'react-icons/vsc';

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
  title: string;
  descriptionEnglish: string;
  descriptionUkrainian: string;
  twitterUrl: string;
  twitterUsername: string;
  headline: string;
  artistUrl?: string;
  artistName: string;
  editions?: number;
  imageSources: ImageSources;
  prevRecord?: PrevNextRecord;
  nextRecord?: PrevNextRecord;
};
export const NftDetails: React.FC<NftDetailsProps> = ({
  id,
  title,
  descriptionEnglish,
  descriptionUkrainian,
  headline,
  twitterUrl,
  twitterUsername,
  artistName,
  artistUrl,
  editions,
  prevRecord,
  nextRecord,
  imageSources,
}) => {
  const [toggler, setToggler] = React.useState<boolean>(false);
  console.log('qqa', prevRecord, nextRecord);

  const renderImage = ({
    title,
    imageSources,
    className,
    style,
    withLightbox = true,
  }: {
    title: string;
    imageSources: ImageSources;
    className: string;
    withLightbox?: boolean;
    style?: React.CSSProperties;
  }) => {
    const img = (
      <img
        alt={title}
        title={title}
        onClick={withLightbox ? () => setToggler(!toggler) : undefined}
        src={imageSources.previewSrc}
        className={className}
        style={style}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = '/' + imageSources.randomSrc;
          console.log(currentTarget.onerror); // prevents looping
        }}
        onLoad={({ currentTarget }) => {
          if (
            imageSources.isAnimation &&
            currentTarget.src.endsWith(imageSources.previewSrc)
          ) {
            currentTarget.src = imageSources.animationSrc;
          }
        }}
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
    'cursor-pointer flex-1 object-contain aspect-square transition-transform hover:scale-[101%]';

  const counterJsx = (
    <div className="tablet:ml-48px mobile:ml-auto text-14px font-rlight">
      #{id.toString().padStart(4, '0')}
    </div>
  );

  const getPrevButtonJsx = (active: boolean) => (
    <img
      alt="Previous"
      src={'/img/down.svg'}
      className={`rotate-90 flex-grow-0 rounded-full p-[11px] border-carbon border ${
        active ? 'cursor-pointer active:translate-y-1' : 'opacity-20'
      } `}
    />
  );
  const getNextButtonJsx = (active: boolean) => (
    <img
      alt="Next"
      src={'/img/down.svg'}
      className={`-rotate-90 flex-grow-0 rounded-full p-[11px] border-carbon border ${
        active ? 'cursor-pointer active:translate-y-1' : 'opacity-20'
      } `}
    />
  );

  const getNavButtonsJsx = (
    className: string = 'tablet:flex mobile:hidden gap-[24px] ml-auto',
    hasShadow = false,
  ) => (
    <div
      className={className}
      style={{ boxShadow: hasShadow ? '0px 0 10px rgba(0, 0, 0, 0.8)' : '' }}
    >
      {prevRecord ? (
        <Link href={prevRecord.path}>{getPrevButtonJsx(true)}</Link>
      ) : (
        getPrevButtonJsx(false)
      )}
      {nextRecord ? (
        <Link href={nextRecord.path}>{getNextButtonJsx(true)}</Link>
      ) : (
        getNextButtonJsx(false)
      )}
    </div>
  );

  return (
    <div className="font-rnarrow">
      <div className="flex items-center mt-[-36px] mb-[24px]">
        <Link href="/warline">
          <div className="h-[48px] flex items-center  cursor-pointer group">
            <img
              alt="Previous"
              src={'/img/down.svg'}
              className="rotate-90 flex-grow-0"
            />
            <span className="font-rblack text-[14px] ml-[8px] h-full leading-[48px] group-hover:border-b-4 group-hover:border-b-carbon transition-[border-width]">
              Warline
            </span>
          </div>
        </Link>
        <div className="flex items-center flex-1 laptop:hidden">
          {counterJsx}
          {getNavButtonsJsx()}
        </div>
      </div>

      <div className="flex items-center pb-10px border-carbon border-b-4">
        <div
          className="
  mobile:text-38px mobile:leading-40px
  tablet:text-70px tablet:leading-72px
  laptop:text-80px laptop:leading-100px
  font-rblack"
        >
          {title}
        </div>
        <div className="items-center flex-1 hidden laptop:flex">
          {counterJsx}
          {getNavButtonsJsx()}
        </div>
      </div>
      <div className="flex flex-col laptop:flex-row laptop:gap-[20px] gap-[48px] pt-[40px]">
        {renderImage({
          imageSources,
          title,
          style: { maxHeight: 'calc(100vh - 400px)' },
          className:
            'flex-1 overflow-auto object-contain cursor-pointer transition-transform hover:scale-[101%] aspect-square]',
        })}
        <div className="px-[20px] laptop:w-[544px] mobile:w-full box-border flex flex-col gap-[48px] text-[14px] tablet:text-[16px]">
          <div>
            <p>{descriptionEnglish}</p>
            <br />
            <p className="">{descriptionUkrainian}</p>
          </div>
          <a href={twitterUrl} target="_blank" rel="noreferrer">
            <div className="border-carbon border-4 p-[20px] flex flex-row gap-[24px]">
              <div className="flex-1">
                {headline}
                <p className="text-[14px] mt-[24px] font-rlight">{`@${twitterUsername}`}</p>
              </div>
              <VscTwitter className="w-[48px] h-[48px] box-border border border-carbon rounded-full p-[12px]" />
            </div>
          </a>
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
            <div>{editions ? `Editions: ${editions}` : null}</div>
          </div>
          <div className="flex flew-row gap-[48px] mt-[24px] items-start">
            <div className="flex-1 flex">
              {prevRecord ? (
                <Link href={prevRecord.path}>
                  <div role="button" className="flex-1 flex-col group">
                    {renderImage({
                      title: prevRecord.title,
                      className: nextPrevRecordClassname,
                      imageSources: prevRecord.imageSources,
                      withLightbox: false,
                    })}
                    <div className="h-[44px] flex items-center">
                      <img
                        alt="Previous"
                        src={'/img/down.svg'}
                        className="rotate-90 flex-grow-0"
                      />
                      <span className="font-rblack text-[14px] ml-[8px] h-full leading-[44px] group-hover:border-b-4 group-hover:border-b-carbon transition-[border-width]">
                        {prevRecord.title}
                      </span>
                    </div>
                  </div>
                </Link>
              ) : null}
            </div>
            <div className="flex-1 flex mb-60px">
              {nextRecord ? (
                <Link href={nextRecord.path}>
                  <div role="button" className="flex-1 flex-col group">
                    {renderImage({
                      title: nextRecord.title,
                      className: nextPrevRecordClassname,
                      imageSources: nextRecord.imageSources,
                      withLightbox: false,
                    })}
                    <div className="h-[48px] flex items-center">
                      <span className="ml-auto font-rblack text-[14px] ml-[8px] h-full leading-[48px] group-hover:border-b-4 group-hover:border-b-carbon transition-[border-width]">
                        {nextRecord.title}
                      </span>
                      <img
                        alt="Next"
                        src={'/img/down.svg'}
                        className="-rotate-90 flex-grow-0"
                      />
                    </div>
                  </div>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {getNavButtonsJsx(
        'tablet:hidden mobile:fixed bottom-0 left-0 right-0 flex flex-row w-full justify-between px-60px py-10px bg-white',
        true,
      )}
    </div>
  );
};
