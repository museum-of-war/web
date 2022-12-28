import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import {
  CSSProperties,
  MouseEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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
import { useUpdate } from '@hooks/useUpdate';
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
  containerStyle?: CSSProperties;
  onClick?: MouseEventHandler<HTMLElement>;
  onMouseEnter?: MouseEventHandler<HTMLElement>;
  onMouseLeave?: MouseEventHandler<HTMLElement>;
  breakpoints?: BreakpointRatios;
  postLoad?: boolean | string;
  lazyload?: boolean;
  fallbackSrc?: string;
};

function ScaledImage({
  src,
  alt,
  title,
  className,
  containerClassName,
  style,
  containerStyle,
  onClick,
  onMouseEnter,
  onMouseLeave,
  breakpoints,
  postLoad = false,
  lazyload = false,
  fallbackSrc,
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
  const update = useUpdate();
  const imgRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (
      imgRef.current?.complete ||
      (videoRef.current?.readyState ?? 0 >= HTMLMediaElement.HAVE_CURRENT_DATA)
    ) {
      setPostLoaded(true);
    }
  }, [imgRef.current?.complete, videoRef.current?.readyState]);
  const imgixRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (imgixRef.current?.complete) {
      setLoaded(true);
    }
  }, [imgixRef.current?.complete]);

  return (
    <div
      className={`relative ${containerClassName ?? ''}`}
      style={containerStyle}
    >
      {postLoadStatus?.loaded &&
        (postLoadSrc?.toLowerCase()?.endsWith('.mp4') ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            src={postLoadObject!}
            title={title}
            className={className}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onLoadedData={() => update()}
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
        ) : (
          <img
            ref={imgRef}
            src={postLoadObject!}
            alt={alt}
            title={title}
            className={className}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onLoad={() => update()}
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
        ))}
      {(!postLoadStatus?.loaded || !postLoaded) && (
        <Imgix
          src={src}
          htmlAttributes={
            {
              ref: imgixRef,
              alt,
              title,
              style,
              onClick,
              onMouseEnter,
              onMouseLeave,
              onLoad: () => update(),
              ...(lazyload && {
                src: fallbackSrc,
              }),
            } as any
          }
          className={`${lazyload ? 'lazyload' : ''} ${className}`}
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
          attributeConfig={
            lazyload
              ? {
                  src: 'data-src',
                  srcSet: 'data-srcset',
                  sizes: 'data-sizes',
                }
              : undefined
          }
        />
      )}
      {postLoadStatus !== null && !postLoadStatus.loaded && (
        <ProgressBar progress={postLoadStatus.progress} />
      )}
    </div>
  );
}

export default ScaledImage;
