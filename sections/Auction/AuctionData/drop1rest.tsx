import { ORIGIN } from '@sections/constants';
import { AuctionCollection, AuctionItemType } from '@sections/types';
import React from 'react';

const Data: AuctionItemType = {
  tokenId: 0,
  name: 'First Drop remaining tokens',
  imageSrc: `${ORIGIN}/img/auction/logos/drop1.png`,
  artist: 'Meta History',
  descriptionEnglish: (
    <span>
      A chronology of events of the Ukrainian history of modern times, set in
      stone. The NFTs are facts accompanied by personal reflections. The formula
      of each NFT is clear and simple: each token is a real news piece from an
      official source and an illustration from artists, both Ukrainian and
      international.
      <br />
      <br />
      The mission of it is to preserve the memory of the real events of that
      time, to spread truthful information among the digital community in the
      world and to collect donations for the support of Ukraine.
    </span>
  ),
  additionalInfo: (
    <p>
      You can buy all remaining tokens of the First Drop right now, at a fixed
      price.
    </p>
  ),
  isSale: true,
  category: AuctionCollection.RestOf1stDrop,
};

export default Data;
