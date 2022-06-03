import type { NextPage } from 'next';
import { SharedProps } from '@components/wrapper';
import { useAppRouter } from '@hooks/useAppRouter';
import UpgradeYourNFT from '@sections/UpgradeYourNFT/UpgradeYourNFT';
import PageHead from '@components/PageHead';
import React from 'react';
import { useAbsoluteUrl } from '@hooks/useAbsoluteUrl';
import { EventType } from '@sections/types';
import WarlineData from '@sections/Warline/WarlineData';

const getTitle = (event: EventType) =>
  `Day ${event?.DayNo ?? 0}, ${event?.Time ?? '00:00'}`;

const TokensPage: NextPage<SharedProps> = (props) => {
  const { push, query } = useAppRouter();
  const url = useAbsoluteUrl();

  if (!props.signerAddress) push('/');

  const Tokenid = query.Tokenid?.toString()!;
  const level = +(query.level?.toString() ?? '0');

  const event = WarlineData.flatMap((d) => d.events).find(
    (e) => e.Tokenid === Tokenid,
  )!;

  const title = getTitle(event);
  return (
    <>
      <PageHead
        title={`${title} - Upgrade Your NFT`}
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
      <UpgradeYourNFT
        tokenId={Tokenid}
        level={level}
        signerAddress={props.signerAddress}
      />
    </>
  );
};

export default TokensPage;
