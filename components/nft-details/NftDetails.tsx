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

  return (
    <div className="font-rnarrow">
      <p
        className="border-carbon border-b-4
  mobile:text-38px mobile:leading-40px
  tablet:text-70px tablet:leading-72px
  desktop:text-80px desktop:leading-100px
  font-rblack mb-10px"
      >
        {title}
      </p>
      <div className="flex flex-row gap-[20px] pt-[40px]">
        {renderImage({
          imageSources,
          title,
          style: { maxHeight: 'calc(100vh - 400px)' },
          className:
            'flex-1 overflow-auto object-contain cursor-pointer transition-transform hover:scale-[101%] aspect-square]',
        })}
        <div className="px-[20px] w-[544px] box-border flex flex-col gap-[48px]">
          <div>
            <p>{descriptionEnglish}</p>
            <br />
            <p className="">{descriptionUkrainian}</p>
          </div>
          <a href={twitterUrl} target="_blank" rel="noreferrer">
            <div className="border-carbon border-4 p-[20px] flex flex-row gap-[24px]">
              <div className="flex-1">
                {headline}
                <p className="text-[14px] mt-[24px]">{`@${twitterUsername}`}</p>
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
          <div className="flex flew-row gap-[48px] mt-[48px]">
            <div className="flex-1 flex">
              {prevRecord ? (
                <Link href={prevRecord.path}>
                  {renderImage({
                    title: prevRecord.title,
                    className: nextPrevRecordClassname,
                    imageSources: prevRecord.imageSources,
                    withLightbox: false,
                  })}
                </Link>
              ) : null}
            </div>
            <div className="flex-1 flex">
              {nextRecord ? (
                <Link href={nextRecord.path}>
                  {renderImage({
                    title: nextRecord.title,
                    className: nextPrevRecordClassname,
                    imageSources: nextRecord.imageSources,
                    withLightbox: false,
                  })}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
