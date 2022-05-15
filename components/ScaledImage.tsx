import { useMemo, useState } from 'react';
import Imgix from 'react-imgix';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind.config';
import { TailwindThemeValue } from 'tailwindcss/tailwind-config';
import {
  Breakpoint as MaterialBreakpoint,
  Theme,
  useTheme,
} from '@mui/material';
import { useDownloadProgress } from '@hooks/useDownloadProgress';
import ProgressBar from '@components/ProgressBar';

type TailwindBreakpoint = 'mobile' | 'tablet' | 'laptop' | 'desktop';

export type Breakpoint = TailwindBreakpoint | MaterialBreakpoint;

export type BreakpointRatios = {
  lowerBound: Breakpoint;
  ratio: number;
}[];

function isMaterialBreakpoint(
  breakpoint: Breakpoint,
  theme: Theme,
): breakpoint is MaterialBreakpoint {
  return breakpoint in theme.breakpoints.values;
}

function getBreakpointValue(
  breakpoint: Breakpoint,
  tailwindTheme: TailwindThemeValue,
  materialTheme: Theme,
): number {
  return isMaterialBreakpoint(breakpoint, materialTheme)
    ? materialTheme.breakpoints.values[breakpoint]
    : parseInt((tailwindTheme as any)[breakpoint]);
}

function applyRatio(ratio: number, value: string): string {
  const match = value.match(/^(?<number>\d+)(?<unit>[a-z]+)$/);
  if (!match) {
    throw new Error(
      `"${value}" is not in the format NUMBER + UNIT as expected`,
    );
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

export enum PostLoadStrategy {
  load = 'load',
  doNotLoad = 'do not load',
  loadIfGif = 'load if gif',
}

type ScaledImageProps = {
  src: string;
  alt?: string;
  className?: string;
  breakpoints?: BreakpointRatios;
  postLoadOriginal?: PostLoadStrategy;
};

function ScaledImage({
  src,
  alt,
  className,
  breakpoints,
  postLoadOriginal = PostLoadStrategy.loadIfGif,
}: ScaledImageProps) {
  const DEFAULT_RATIO = 1;
  const SAFE_MARGIN = '-10000px';
  const materialTheme = useTheme();
  const tailwindTheme = useMemo(
    () => resolveConfig(tailwindConfig).theme.screens!,
    [],
  );
  const [loaded, setLoaded] = useState(false);
  const shouldLoadOriginal =
    postLoadOriginal === PostLoadStrategy.load ||
    (postLoadOriginal === PostLoadStrategy.loadIfGif && src.endsWith('.gif'));
  const originalStatus = useDownloadProgress(
    shouldLoadOriginal && loaded ? src : null,
    'low',
  );
  const originalUrl = useMemo(
    () =>
      originalStatus?.loaded ? URL.createObjectURL(originalStatus?.blob) : null,
    [originalStatus],
  );
  const [originalLoaded, setOriginalLoaded] = useState(false);
  const pixelBreakpoints = (breakpoints || [])
    .map(({ lowerBound, ratio }) => ({
      lowerBound: getBreakpointValue(lowerBound, tailwindTheme, materialTheme),
      ratio,
    }))
    .sort(({ lowerBound: a }, { lowerBound: b }) => b - a);
  const desktopWidth = getBreakpointValue(
    'desktop',
    tailwindTheme,
    materialTheme,
  );
  return (
    <div className="relative">
      {originalStatus?.loaded && (
        <img
          src={originalUrl!}
          alt={alt}
          className={className}
          onLoad={() => setOriginalLoaded(true)}
          style={
            originalLoaded
              ? {}
              : {
                  position: 'absolute',
                  left: SAFE_MARGIN,
                  top: SAFE_MARGIN,
                  visibility: 'hidden',
                  // Browser still needs some time to render the downloaded image
                }
          }
        />
      )}
      {(!originalStatus?.loaded || !originalLoaded) && (
        <Imgix
          src={src}
          htmlAttributes={{
            alt,
            onLoad: () => setLoaded(true),
          }}
          className={className}
          sizes={[
            ...(pixelBreakpoints.length === 0 ||
            pixelBreakpoints[0]!.lowerBound <= desktopWidth
              ? [
                  `${lowerBoundCondition(desktopWidth)} ${applyRatio(
                    pixelBreakpoints.length > 0
                      ? pixelBreakpoints[0]!.ratio
                      : DEFAULT_RATIO,
                    `${pixels(desktopWidth)}`,
                  )}`,
                ]
              : []),
            ...pixelBreakpoints.map(
              ({ lowerBound, ratio }) =>
                `${lowerBoundCondition(lowerBound)} ${ratioToViewport(ratio)}`,
            ),
            ratioToViewport(DEFAULT_RATIO),
          ].join(', ')}
        />
      )}
      {originalStatus !== null && !originalStatus.loaded && (
        <ProgressBar progress={originalStatus.progress} />
      )}
    </div>
  );
}

export default ScaledImage;
