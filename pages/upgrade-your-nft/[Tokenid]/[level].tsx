import type { NextPage } from 'next';
import { TITLES } from '@sections/constants';
import { SharedProps } from '@components/wrapper';
import { useAppRouter } from '@hooks/useAppRouter';
import PageHead from '@components/PageHead';
import React from 'react';
import { useAbsoluteUrl } from '@hooks/useAbsoluteUrl';
import { EventType } from '@sections/types';
import WarlineData from '../../../constants/collections/Warline';
import dynamic from 'next/dynamic';

const UpgradeYourNFT = dynamic(
  () => import('@sections/UpgradeYourNFT/UpgradeYourNFT'),
  {
    ssr: false,
  },
);

const getTitle = (event: EventType) =>
  `Day ${event?.DayNo ?? 0}, ${event?.Time ?? '00:00'}`;

const UpgradePage: NextPage<SharedProps> = ({ signerAddress }) => {
  const { query } = useAppRouter();
  const url = useAbsoluteUrl();

  const Tokenid = query.Tokenid?.toString()!;
  const level = +(query.level?.toString() ?? '0');

  const event = WarlineData.flatMap((d) => d.events).find(
    (e) => e.Tokenid === Tokenid,
  )!;

  const title = getTitle(event);
  return (
    <>
      <PageHead
        title={title}
        subtitle={TITLES.UPGRADE_YOUR_NFT}
        description={`NFT of ${getTitle(event)} created by ${
          event?.ArtistName
        }.\n${event?.DescriptionEnglish}`}
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Tokens',
              item: url('/tokens'),
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Upgrade Your NFT',
              item: url('/tokens'),
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: title,
            },
          ],
        }}
      />
      {signerAddress ? (
        <UpgradeYourNFT
          tokenId={Tokenid}
          level={level}
          signerAddress={signerAddress}
        />
      ) : (
        <div>Cannot get tokens, please sign in</div>
      )}
    </>
  );
};

export default UpgradePage;
