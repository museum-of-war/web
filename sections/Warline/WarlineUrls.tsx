import { IMG_STORAGE } from '@sections/Constants';

export function getUrls(
  tokenId: string,
  image: string | undefined,
  randomSrc: string,
) {
  const isNoImage = image === '' || image === undefined;
  const isAnimation = image?.endsWith('.gif');

  const previewSrc: string = isNoImage
    ? randomSrc
    : `${IMG_STORAGE}/preview/${tokenId}.webp`;
  const originalSrc: string = isNoImage ? randomSrc : `${IMG_STORAGE}/original/${image}`;
  const animationSrc: string = isNoImage
    ? randomSrc
    : `${IMG_STORAGE}/animation/${tokenId}.webp`;

  return {
    previewSrc,
    originalSrc,
    animationSrc,
    isAnimation,
    randomSrc,
  };
}
