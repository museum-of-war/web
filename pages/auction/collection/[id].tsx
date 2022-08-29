import React, { useEffect, useState } from 'react';
import { TITLES } from '@sections/constants';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { SharedProps } from '@components/wrapper';
import { AuctionCollection } from '@sections/types';
import AuctionCollectionData from '@sections/Auction/AuctionCollectionData';
import PageHead from '@components/PageHead';
import { useAbsoluteUrl } from '@hooks/useAbsoluteUrl';
import { useIsMounted } from '@hooks/useIsMounted';
import CollectionDetails from '@sections/Auction/CollectionDetails/CollectionDetails';
import { OneItemAuctionCollectionDetails } from '@sections/Auction/CollectionDetails/OneItemAuctionCollectionDetails';

type CollectionProps = { id: string };

const CollectionPage: React.FC<SharedProps & CollectionProps> = ({
  menuOpen,
  id,
}) => {
  const url = useAbsoluteUrl();
  const { canMint: getCanMint, canMintSecondDrop } = useWeb3Modal();

  const [canMint, setCanMint] = useState<boolean>(false);
  const collectionData = AuctionCollectionData[id as AuctionCollection];
  const [mintFetched, setMintFetched] = useState(false);

  const isMounted = useIsMounted();

  useEffect(() => {
    if (collectionData && !mintFetched) {
      canMintSecondDrop().then((val) => {
        if (!isMounted.current) {
          return;
        }
        if (val) {
          setCanMint(true);
          setMintFetched(true);
        } else {
          getCanMint().then((i) => {
            if (!isMounted.current) {
              return;
            }
            setCanMint(i);
            setMintFetched(true);
          });
        }
      });
    }
  }, [collectionData]);

  if (!collectionData) return null;

  return (
    <>
      <PageHead
        title={collectionData.title ?? collectionData.name ?? 'Collection'}
        subtitle={TITLES.AUCTION}
        description={collectionData.description}
        image={collectionData.logoSrc}
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Auction',
                item: url('/auction'),
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: collectionData.name,
              },
            ],
          },
        ]}
        canonical={`/auction/collection/${id}`}
      />
      {collectionData.oneItemAuction ? (
        <OneItemAuctionCollectionDetails
          menuOpen={menuOpen}
          canMint={canMint}
          collectionData={collectionData}
        />
      ) : (
        <CollectionDetails
          menuOpen={menuOpen}
          canMint={canMint}
          collectionData={collectionData}
        />
      )}
    </>
  );
};

export default CollectionPage;

export function getStaticProps({ params }: { params: CollectionProps }) {
  return { props: params };
}

export function getStaticPaths() {
  return {
    paths: Object.keys(AuctionCollectionData).map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
}
