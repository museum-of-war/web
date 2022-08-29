import { useRouter } from 'next/router';
import { ORIGIN } from '@sections/constants';

export const useAbsoluteUrl = () => {
  const { basePath, locale } = useRouter();
  return (path?: string) =>
    path && path.startsWith('https://')
      ? path
      : `${ORIGIN}${basePath}${locale || ''}${path || ''}`;
};
