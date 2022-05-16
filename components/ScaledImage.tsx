import { CSSProperties, MouseEventHandler, useMemo, useState } from 'react';
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

export type BreakpointRatios = (
  | {
      lowerBound: Breakpoint;
      ratio: number;
    }
  | {
      lowerBound: Breakpoint;
      width: number;
    }
)[];

type RatioOrWidth = {
  type: 'ratio' | 'width';
  value: number;
};

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

function pixels(value: number): string {
  return `${value}px`;
}

function apply(ratioOrWidth: RatioOrWidth, value: string): string {
  if (ratioOrWidth.type === 'width') {
    return pixels(ratioOrWidth.value);
  } else {
    const match = value.match(/^(?<number>\d+)(?<unit>[a-z]+)$/);
    if (!match) {
      throw new Error(
        `"${value}" is not in the format NUMBER + UNIT as expected`,
      );
    }
    return (
      Math.round(Number(match.groups!.number) * ratioOrWidth.value) +
      match.groups!.unit!
    );
  }
}

function toViewport(ratioOrWidth: RatioOrWidth): string {
  return apply(ratioOrWidth, '100vw');
}

function lowerBoundCondition(bound: number): string {
  return `(min-width: ${pixels(bound)})`;
}

type ScaledImageProps = {
  src: string;
  alt?: string;
  title?: string;
  className?: string;
  containerClassName?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLImageElement>;
  breakpoints?: BreakpointRatios;
  postLoad?: boolean | string;
};

function ScaledImage({
  src,
  alt,
  title,
  className,
  containerClassName,
  style,
  onClick,
  breakpoints,
  postLoad = false,
}: ScaledImageProps) {
  const DEFAULT_RATIO: RatioOrWidth = {
    type: 'ratio',
    value: 1,
  };
  const SAFE_MARGIN = '-10000px';
  const materialTheme = useTheme();
  const tailwindTheme = useMemo(
    () => resolveConfig(tailwindConfig).theme.screens!,
    [],
  );
  const [loaded, setLoaded] = useState(false);
  const postLoadSrc =
    typeof postLoad === 'string' ? postLoad : postLoad ? src : null;
  const postLoadStatus = useDownloadProgress(
    postLoadSrc !== null && loaded ? postLoadSrc : null,
    'low',
  );
  const postLoadObject = useMemo(
    () =>
      postLoadStatus?.loaded ? URL.createObjectURL(postLoadStatus?.blob) : null,
    [postLoadStatus],
  );
  const [postLoaded, setPostLoaded] = useState(false);
  const pixelBreakpoints = (breakpoints || [])
    .map((item) => ({
      lowerBound: getBreakpointValue(
        item.lowerBound,
        tailwindTheme,
        materialTheme,
      ),
      ratioOrWidth: ('ratio' in item
        ? {
            type: 'ratio',
            value: item.ratio,
          }
        : {
            type: 'width',
            value: item.width,
          }) as RatioOrWidth,
    }))
    .sort(({ lowerBound: a }, { lowerBound: b }) => b - a);
  const desktopWidth = getBreakpointValue(
    'desktop',
    tailwindTheme,
    materialTheme,
  );
  return (
    <div className={`relative ${containerClassName ?? ''}`}>
      {postLoadStatus?.loaded && (
        <img
          src={postLoadObject!}
          alt={alt}
          title={title}
          className={className}
          onClick={onClick}
          onLoad={() => setPostLoaded(true)}
          style={{
            ...(style || {}),
            ...(postLoaded
              ? {}
              : {
                  position: 'absolute',
                  left: SAFE_MARGIN,
                  top: SAFE_MARGIN,
                  visibility: 'hidden',
                  // Browser still needs some time to render the downloaded image
                }),
          }}
        />
      )}
      {(!postLoadStatus?.loaded || !postLoaded) && (
        <Imgix
          src={src}
          htmlAttributes={{
            alt,
            title,
            style,
            onClick,
            onLoad: () => setLoaded(true),
          }}
          className={className}
          sizes={[
            ...(pixelBreakpoints.length === 0 ||
            pixelBreakpoints[0]!.lowerBound <= desktopWidth
              ? [
                  `${lowerBoundCondition(desktopWidth)} ${apply(
                    pixelBreakpoints.length > 0
                      ? pixelBreakpoints[0]!.ratioOrWidth
                      : DEFAULT_RATIO,
                    `${pixels(desktopWidth)}`,
                  )}`,
                ]
              : []),
            ...pixelBreakpoints.map(
              ({ lowerBound, ratioOrWidth }) =>
                `${lowerBoundCondition(lowerBound)} ${toViewport(
                  ratioOrWidth,
                )}`,
            ),
            toViewport(DEFAULT_RATIO),
          ].join(', ')}
        />
      )}
      {postLoadStatus !== null && !postLoadStatus.loaded && (
        <ProgressBar progress={postLoadStatus.progress} />
      )}
    </div>
  );
}

export default ScaledImage;
