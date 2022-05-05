import Image from 'next/image';
import { useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config'

type ScaledImageProps = {
  src: string;
  alt?: string;
  dims?: {
    width: number;
    height: number;
  };
  mobile?: number;
  laptop?: number;
};

function applyRatio(ratio: number | undefined, value: string): string {
  const match = value.match(/^(?<number>\d+)(?<unit>[a-z]+)$/);
  if (!match) {
    throw new Error(`"${value}" is not in the format NUMBER + UNIT as expected`);
  }
  return Math.round(Number(match.groups!.number) * (ratio ?? 1)) + match.groups!.unit!;
}

function ratioToViewport(ratio: number | undefined): string {
  return applyRatio(ratio, '100vw');
}

function ScaledImage({
  src,
  alt,
  dims,
  mobile,
  laptop,
}: ScaledImageProps) {
  const screens = resolveConfig(tailwindConfig).theme.screens as any;
  const [{ width, height, shown }, setDims] = useState({
    ...(dims || {
      width: 1,
      height: 1,
      // According to the docs (https://nextjs.org/docs/api-reference/next/image#width), the values here are used
      // only to determine the valid aspect ratio of the rendered image; we use a square as a reasonable approximation
    }),
    shown: !!dims,
  });
  return (
      <div style={shown ? {} : {
        visibility: 'hidden',
      }}>
        <Image
            src={src}
            alt={alt ?? ''}
            layout="responsive"
            sizes={`
              (min-width: ${screens.desktop}) ${applyRatio(laptop, screens.desktop)},
              (min-width: ${screens.laptop}) ${ratioToViewport(laptop)},
              ${ratioToViewport(mobile)}
            `}
            width={width}
            height={height}
            onLoadingComplete={
              ({naturalWidth, naturalHeight}) => setDims({
                width: naturalWidth,
                height: naturalHeight,
                shown: true,
              })
            }
        />
      </div>
  );
}

export default ScaledImage;
