import React, { useEffect, useState } from 'react';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { useAppRouter } from '@hooks/useAppRouter';
import { SharedProps } from '@components/wrapper';
import { AuctionCollection, AuctionCollectionType } from '@sections/types';
import AuctionCollectionData from '@sections/Auction/AuctionCollectionData';
import PageHead from '@components/PageHead';
import { useAbsoluteUrl } from '@hooks/useAbsoluteUrl';
import { useIsMounted } from '@hooks/useIsMounted';
import CollectionDetails from '@sections/Auction/CollectionDetails/CollectionDetails';
import { OneItemAuctionCollectionDetails } from '@sections/Auction/CollectionDetails/OneItemAuctionCollectionDetails';

const CollectionPage: React.FC<SharedProps> = ({ menuOpen }) => {
  const { query } = useAppRouter();
  const url = useAbsoluteUrl();
  const { canMint: getCanMint, canMintSecondDrop } = useWeb3Modal();

  const [canMint, setCanMint] = useState<boolean>(false);
  const [collectionData, setCollectionData] = useState<AuctionCollectionType>();
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

  useEffect(() => {
    setCollectionData(AuctionCollectionData[query.id as AuctionCollection]);
  }, [query.id]);

  if (!collectionData) return null;

  return (
    <>
      <PageHead
        title={`${collectionData.name} - Auction`}
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
