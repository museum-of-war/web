import Image from 'next/image';
import { useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config'
import { Breakpoint as MaterialBreakpoint, Theme, useTheme } from '@mui/material';

type TailwindBreakpoint = 'mobile' | 'tablet' | 'laptop' | 'desktop';

export type Breakpoint = TailwindBreakpoint | MaterialBreakpoint;

export type BreakpointRatios = {
  lowerBound: Breakpoint;
ratio: number;
}[];

function isMaterialBreakpoint(breakpoint: Breakpoint, theme: Theme): breakpoint is MaterialBreakpoint {
  return breakpoint in theme.breakpoints.values;
}

function getBreakpointValue(breakpoint: Breakpoint, materialTheme: Theme): number {
  return isMaterialBreakpoint(breakpoint, materialTheme)
    ? materialTheme.breakpoints.values[breakpoint]
    : parseInt((resolveConfig(tailwindConfig).theme.screens as any)[breakpoint]);
}

function applyRatio(ratio: number, value: string): string {
  const match = value.match(/^(?<number>\d+)(?<unit>[a-z]+)$/);
  if (!match) {
    throw new Error(`"${value}" is not in the format NUMBER + UNIT as expected`);
  }
  return Math.round(Number(match.groups!.number) * ratio) + match.groups!.unit!;
}

function ratioToViewport(ratio: number): string {
  return applyRatio(ratio, '100vw');
}

function pixels(value: number): string {
  return `${value}px`;
}

function lowerBoundCondition(bound: number): string {
  return `(min-width: ${pixels(bound)})`;
}

type ScaledImageProps = {
  src: string;
  alt?: string;
  className?: string;
  dims?: {
    width: number;
    height: number;
  };
  breakpoints?: BreakpointRatios;
};

function ScaledImage({
  src,
  alt,
  className,
  dims,
  breakpoints,
}: ScaledImageProps) {
  const defaultRatio = 1;
  const [{ width, height, shown }, setDims] = useState({
    ...(dims || {
      width: 1,
      height: 1,
      // According to the docs (https://nextjs.org/docs/api-reference/next/image#width), the values here are used
      // only to determine the valid aspect ratio of the rendered image; we use a square as a reasonable approximation
    }),
    shown: !!dims,
  });
  const materialTheme = useTheme();
  const pixelBreakpoints = (breakpoints || []).map(({lowerBound, ratio}) => ({
    lowerBound: getBreakpointValue(lowerBound, materialTheme),
    ratio,
  })).sort(({lowerBound: a}, {lowerBound: b}) => b - a);
  const desktopWidth = getBreakpointValue('desktop', materialTheme);
  return (
      <div style={shown ? {} : {
        visibility: 'hidden',
      }}>
        <Image
            src={src}
            alt={alt ?? ''}
            className={className}
            layout="responsive"
            sizes={[
              ...(pixelBreakpoints.length === 0 || pixelBreakpoints[0]!.lowerBound <= desktopWidth ? [
                `${lowerBoundCondition(desktopWidth)} ${applyRatio(pixelBreakpoints.length > 0
                  ? pixelBreakpoints[0]!.ratio
                  : defaultRatio, `${pixels(desktopWidth)}`)}`
              ] : []),
              ...pixelBreakpoints.map(({lowerBound, ratio}) =>
                `${lowerBoundCondition(lowerBound)} ${ratioToViewport(ratio)}`),
              ratioToViewport(defaultRatio),
            ].join(', ')}
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
