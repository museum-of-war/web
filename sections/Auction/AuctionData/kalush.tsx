import { IMG_STORAGE } from '@sections/Constants';
import { AuctionCollection, AuctionItemType } from '@sections/types';
import Button from '@components/Button';
import React from 'react';
import { openInNewTab } from '@sections/utils';
// import { ethers } from 'ethers';

const monobankLink = 'https://send.monobank.ua/jar/1283iHXvsQ';

const BigButton = () => {
  return (
    <div className="basis-6/12 ml-32px">
      <Button
        mode="primary"
        label="Place Bid in USD"
        onClick={() => openInNewTab(monobankLink)}
        className="w-100% h-48px"
      />
      <p className="text-center text-14px leading-24px opacity-[70%]">
        via <b>monobank</b>
      </p>
    </div>
  );
};

const SmallButton = () => {
  return (
    <div className="basis-6/12 ml-16px">
      <Button
        mode="primary"
        label="USD"
        onClick={() => openInNewTab(monobankLink)}
        className="w-100% h-60px"
      />
      <div className="flex">
        <p className="bg-[#212121] m-auto px-[4px] text-center text-14px leading-24px opacity-[80%]">
          <span className="opacity-[87.5%]">
            via <b>monobank</b>
          </span>
        </p>
      </div>
    </div>
  );
};

//const SmallButton

const KalushAuctionData: AuctionItemType = {
  tokenId: 1,
  name: 'Crystal Microphone 2022',
  imageSrc: `${IMG_STORAGE}/original/special/Kalush_Eurovision.jpg`,
  artist: 'MetaHistory',
  descriptionEnglish: (
    <p>
      The symbols of the Kalush Orchestra's victory at Eurovision will now help
      make Ukraine's victory in the war with the Russian occupiers. The band
      auctions the Eurovision Glass Mic Trophy awarded to the winner of
      Eurovision 2022 to collect donations to help the Armed Forces of Ukraine.
      <br />
      <br />
      The representatives of the ENKO label Kalush Orchestra with the song
      Stefania won Eurovision 2022 with a total score of 631 points by a large
      margin. This is the third victory of Ukraine at Eurovision and the first
      song written entirely in the Ukrainian language. With such voting,
      Europeans supported not only the Kalush Orchestra but Ukraine in general.
      The country is currently fighting against russian occupiers for its
      freedom, independence, democracy, and peace.
      <br />
      <br />
      It’s noteworthy that the first attempt to mint the NFT trophy "Crystal
      Microphone" belongs to Ukraine. It is also the world's first auction with
      the Eurovision winner's cup.
      <br />
      <br />
      The raffle initiative is supported by the Ministry of Culture and
      Information Policy, the Ministry of Digital Transformation of Ukraine, and
      the European Broadcasting Union (EBU), the association of broadcasters
      that organizes the international Eurovision Song Contest.
      <br />
      <br />
      All of the money raised will go to the{' '}
      <a href="https://prytulafoundation.org/" className="underline">
        CO Charitable Foundation of Serhiy Prytula
      </a>
      .
    </p>
  ),
  additionalInfo: (
    <p>
      Meta History helds the auction off the real "Eurovision 2022” statuette.
      You bid in "ETH", and only the biggest bid of all will be saved. Therefore
      the bids that do not win the auction will be returned to the participants
      in ETH. In addition to the trophy, the winner will also get an
      all-expenses-paid trip to dinner with the Kalush Orchestra band at their
      favorite restaurant in Kyiv
      <br />
      <br />
      The fiat money are transferred to the general fund with no possibility of
      return. However, when you send fiat money, you are also participating in a
      lottery where you can also win vocalist Oleh Psiuk's famous pink Panama.
      <br />
      <br />
      We use "soft close", so the auction will be extended by 10 minutes after
      the last bid.
      <br />
      <br />
      <b>Example:</b>
      <br />
      If somebody will bid at 20:00, then auction will be prolonged to 20:10. If
      it is prolonged and somebody will bid at 20:05, then it will be prolonged
      to 20:15 and so on. If there are no bids for 10 minutes after the
      prolongation, then the auction will be closed.
      <br />
      <br />
      <p className="font-rlight whitespace-pre-wrap mobile:text-14px tablet:text-16px leading-[150%]">
        The winner must directly contact the Organizers at this mail address to
        approve his data as winner and maybe take part in live broadcast of the
        ceremony:{' '}
        <a
          href="mailto:serhiy.prytula.kyiv@gmail.com?subject=Stefania For Ukraine"
          className="underline"
        >
          serhiy.prytula.kyiv@gmail.com
        </a>
      </p>
    </p>
  ),
  videoSrc: 'https://www.youtube-nocookie.com/embed/F1fl60ypdLs?autoplay=1',
  posterSrc: '/img/auction/posters/kalush.png',
  isSale: false,
  category: AuctionCollection.Kalush,
  bonuses: [
    'A 100% unique 1 of 1 NFT of the Crystal Microphone.',
    'An exclusive meeting and dinner with members of the Kalush Orchestra.',
    'An opportunity to receive a physical object, the Crystal Microphone, as long as the bid is higher than the fiat (regular) currency bid.',
  ],
  //externalBid: ethers.constants.WeiPerEther,
  externalButton: {
    Big: BigButton,
    Small: SmallButton,
  },
};

export default KalushAuctionData;
