import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import QRVerifier from '@sections/QRVerifier/QRVerifier';
import type { NextPage } from 'next';

const QRVerifierPage: NextPage<SharedProps> = () => {
  return (
    <>
      <PageHead
        title="QR Codes Verifier"
        description="QR code verifier can be used to scan and verify ticket containing QR code created from Meta History NFT."
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'QR Verifier',
            },
          ],
        }}
      />
      <QRVerifier />
    </>
  );
};

export default QRVerifierPage;
