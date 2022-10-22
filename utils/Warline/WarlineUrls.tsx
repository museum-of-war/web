import { IMG_STORAGE } from '@sections/constants';

export function getUrls(
  tokenId: string | number,
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

const rand_imgs: string[] = [
  '/img/dots-1.png',
  '/img/dots-2.png',
  '/img/dots-3.png',
  '/img/dots-4.png',
  '/img/dots-5.png',
  '/img/dots-6.png',
  '/img/dots-7.png',
  '/img/dots-8.png',
];

export const getImageSources = (event: {
  Tokenid: string;
  ImageType: string;
}) => {
  const randomSrc = rand_imgs[parseInt(event.Tokenid, 10) % 8] as string;
  return getUrls(event.Tokenid, event.ImageType, randomSrc as string);
};
