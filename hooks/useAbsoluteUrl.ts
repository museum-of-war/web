import { useRouter } from 'next/router';

export const useAbsoluteUrl = () => {
  const { basePath, locale } = useRouter();
  return (path?: string) => `${location.origin}${basePath}${locale || ''}${path || ''}`;
}
