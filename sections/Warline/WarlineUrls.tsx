import { IMG_STORAGE } from '@sections/Constants';

export function getUrls(
  tokenId: string,
  image: string | undefined,
  randomSrc: string,
) {
  const isNoImage = image === '' || image === undefined;
  const isAnimation = image?.endsWith('.gif') || image?.endsWith('.mp4');
  const fileNameStartIndex = (image?.lastIndexOf('/') ?? -1) + 1;
  const prefixFolder = image?.substr(0, fileNameStartIndex);
  const fileNameWithoutExtension = image?.substr(
    fileNameStartIndex,
    image?.lastIndexOf('.') - fileNameStartIndex,
  );

  if (fileNameWithoutExtension === 'placeholder')
    return {
      previewSrc: `${IMG_STORAGE}/${image}`,
      originalSrc: `${IMG_STORAGE}/${image}`,
      animationSrc: `${IMG_STORAGE}/${image}`,
      isAnimation,
      randomSrc,
    };

  const previewSrc: string = isNoImage
    ? randomSrc
    : `${IMG_STORAGE}/preview/${prefixFolder}${fileNameWithoutExtension}.webp`;
  const originalSrc: string = isNoImage
    ? randomSrc
    : `${IMG_STORAGE}/original/${image}`;
  const animationSrc: string = isNoImage
    ? randomSrc
    : `${IMG_STORAGE}/animation/${prefixFolder}${fileNameWithoutExtension}.webp`;

  return {
    previewSrc,
    originalSrc,
    animationSrc,
    isAnimation,
    randomSrc,
  };
}
