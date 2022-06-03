import { useRouter } from 'next/router';
import { ORIGIN } from '@sections/Constants';

export const useAbsoluteUrl = () => {
  const { basePath, locale } = useRouter();
  return (path?: string) => `${ORIGIN}${basePath}${locale || ''}${path || ''}`;
};
