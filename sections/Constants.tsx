import { BigNumber } from 'ethers';

export const ORIGIN = 'https://metahistory.gallery';
export const IMG_STORAGE = 'https://meta-history.imgix.net';
export const TWITTER_LINK =
  'https://twitter.com/Meta_History_UA?t=gjhrJDPwV026--t4UsgkYA&s=09';
export const TWITTER_LINK_MOBILE =
  'https://mobile.twitter.com/Meta_History_UA?t=gjhrJDPwV026--t4UsgkYA&s=09';
export const INSTAGRAM_LINK =
  'https://instagram.com/meta_history_ua?utm_medium=copy_link';
export const GITHUB_LINK = 'https://github.com/museum-of-war';
export const TELEGRAM_LINK = 'https://t.me/metahistory_ua';
export const DISCORD_LINK = 'https://discord.gg/A4R2rVqbXR';
export const OPENSEA_LINK = 'https://opensea.io/collection/metahistorymuseum';
export const FRAME_LINK = 'https://www.fair.xyz';
export const MINISTRY_DT_LINK = 'https://thedigital.gov.ua/';
export const MINISTRY_CULTURE_LINK = 'https://mkip.gov.ua/';
export const WAR_START_DATE = '02/24/2022';
export const RELEASE_DATE = '2022-03-30T16:59:59.000-04:00';
export const SECOND_DROP_DATE = '2022-05-01T23:59:59.000+03:00';
export const THIRD_DROP_DATE = '2022-07-21T23:00:00.000+03:00';
export const MINT_LINK = `https://app.fair.xyz/collection/MHXYZ/queue`;
export const CHAIN = 'mainnet' as 'mainnet' | 'rinkeby';
export const PROJECT_WALLET_ADDRESS =
  '0x98c30d4B65b2A0ab0838E7b1E09352c0FD70736C';
export const UKRAINE_WALLET_ADDRESS =
  '0x165CD37b4C644C2921454429E7F9358d18A45e14';
export const FIRST_DROP_ADDRESS =
  CHAIN === 'mainnet'
    ? '0xD3228e099E6596988Ae0b73EAa62591c875e5693'
    : '0xcE7714Ed3040a5858b35B258Fa84112f4fc2c714';
export const SECOND_DROP_ADDRESS =
  CHAIN === 'mainnet'
    ? '0x01F86f668f00Ea8d929479EDF81c232C1bcA8307'
    : '0x34622ae51FaEbD000e77D7972a31dE4539B82Bea';
export const THIRD_DROP_ADDRESS =
  CHAIN === 'mainnet'
  ? '0xe8b95A3A15dAcBe3368BcA1DA71564C2Ec14Ff37'
  : '0xf0192B97135abAa218bcfF255B8F4B22171A7590';
export const PROSPECT_100_ADDRESS =
  CHAIN === 'mainnet'
    ? '0x932aEAc0eEBaA1fE8fdB53C4f81312cBA5F771A8'
    : '0x962A02e7230d33b6010202B6F3f6eE5Ea24D035d';
export const AVATARS_ADDRESS =
  CHAIN === 'mainnet'
    ? '0x11F0640bdb99E54Cbb7bE40E18460F9c9c16B957'
    : '0x9dD6D5286800B6cB0985A24b4137eCB055dD8390';
export const KALUSH_ADDRESS =
  CHAIN === 'mainnet'
    ? '0xA99b2742A0073f933fcf004cfD9d30Ce2A485F89'
    : '0x505AEDa9bA09C907d00c8A1f864Eb159c8a8167F';
export const MERGER_ADDRESS =
  CHAIN === 'mainnet'
    ? '0xb43e9576aAb2eE3A02b0721d5466E12217e45Fa2'
    : '0x2d1b257Fbb04B46b1E117325FFE88a3DcAaE2AC0';
export const BATCH_SELLER_ADDRESS =
  CHAIN === 'mainnet'
  ? '0x616d0343c6283B8fd7825e25122e65B72560853B'
  : '0xe5C8962646fC8777Fd3485eAd0C551dBbf4BF4EF';
export const AUCTION_END_DATE = '2022-04-22T23:00:00.000+03:00';
export const AUCTION_CLOSING_DATE = '2022-04-22T20:00:00.000+03:00';
export const AUCTION_START_DATE = '2022-04-17T23:00:00.000+03:00';
export const KALUSH_BID = BigNumber.from('500000000000000000000');
export const JOINLIST_LINK = 'https://www.joinlist.me/metahistory';
export const TICKET_EXPIRATION_PERIOD = 5 * 60; // 5 minutes
