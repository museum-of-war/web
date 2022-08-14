import { WarlineDrop } from '@sections/Warline/constants';
import { TransferInfoType } from '@sections/types';

export const ACHIEVE_DATA = {
  metaverseEvents: 3,
  warlineDrops: Object.keys(WarlineDrop).length,
};

export const KNOWN_WALLETS = {
  ['0xfD429C4499AEbB0165D3550b23796Fa346b2d8C8'.toLowerCase()]:
    'Meta History Deployer',
  ['0x98c30d4B65b2A0ab0838E7b1E09352c0FD70736C'.toLowerCase()]:
    'Meta History Donation',
  ['0x165CD37b4C644C2921454429E7F9358d18A45e14'.toLowerCase()]:
    'Ukraine Crypto Donation',
  ['0xEDd9Fa9ec9247699dB95De38A06f2DcbEed8423a'.toLowerCase()]:
    'Cultural Restoration Wallet',
  ['0x0c9ff692daD2553Bad91d2D73Ebb6194600B2bEf'.toLowerCase()]:
    'Meta History Artists Wallet',
  ['0x557f10757Ef9E28E23E33c82B6d8c035189D7f3f'.toLowerCase()]:
    'Kalush & Prytula Wallet',
} as Record<string, string>;

export const MAIN_TRANSFERS = [
  {
    date: new Date(1649699333000),
    eth: 248.85,
    usd: 248.85 * 2979.52,
    from: '0xd3228e099e6596988ae0b73eaa62591c875e5693',
    to: '0x165CD37b4C644C2921454429E7F9358d18A45e14',
    hash: '0x3d96d81818b2a16cab5f54b0cb2691d89ed214b3fffc508f5f610c6a8aded88c',
  },
  {
    date: new Date(1650654224000),
    eth: 0.606,
    usd: 0.606 * 2963.17,
    from: '0x806ca46e7df33f6c6f4e28839162f8f85755116a',
    to: '0xEDd9Fa9ec9247699dB95De38A06f2DcbEed8423a',
    hash: '0x913cbada7ff1385bd166b4e2a236183a3de145a251046ba28cf35cfb9b42d39c',
  },
  {
    date: new Date(1650654373000),
    eth: 0.21,
    usd: 0.21 * 2963.17,
    from: '0x806ca46e7df33f6c6f4e28839162f8f85755116a',
    to: '0xEDd9Fa9ec9247699dB95De38A06f2DcbEed8423a',
    hash: '0x1bc45edca390af3e8af3b47c803ad12ebf516cccc03b4d2d6d506a69cf0a8bab',
  },
  {
    date: new Date(1650654538000),
    eth: 0.2121,
    usd: 0.2121 * 2963.17,
    from: '0x806ca46e7df33f6c6f4e28839162f8f85755116a',
    to: '0xEDd9Fa9ec9247699dB95De38A06f2DcbEed8423a',
    hash: '0xbe7e90001dec48aa05ed3ad8607a66f9f71d61f2822567560ed91f2987d6b554',
  },
  {
    date: new Date(1650654688000),
    eth: 0.25,
    usd: 0.25 * 2963.17,
    from: '0x806ca46e7df33f6c6f4e28839162f8f85755116a',
    to: '0xEDd9Fa9ec9247699dB95De38A06f2DcbEed8423a',
    hash: '0xad8310db303bfa47cff967e49144456f45a47b39369157eb978f8431f3cbaa6c',
  },
  {
    date: new Date(1650654820000),
    eth: 0.35,
    usd: 0.35 * 2963.17,
    from: '0x806ca46e7df33f6c6f4e28839162f8f85755116a',
    to: '0xEDd9Fa9ec9247699dB95De38A06f2DcbEed8423a',
    hash: '0xca6d9368b1226718f112a0362836802f752787f432d7ec8da41db9b716ea2862',
  },
  {
    date: new Date(1650654942000),
    eth: 0.29,
    usd: 0.29 * 2963.17,
    from: '0x806ca46e7df33f6c6f4e28839162f8f85755116a',
    to: '0xEDd9Fa9ec9247699dB95De38A06f2DcbEed8423a',
    hash: '0x6ec4face4690c420e1473bb2f5d16b21e8e384a37ab29ed85ed1362e9ee225fb',
  },
  {
    date: new Date(1650655123000),
    eth: 0.337,
    usd: 0.337 * 2963.17,
    from: '0x806ca46e7df33f6c6f4e28839162f8f85755116a',
    to: '0xEDd9Fa9ec9247699dB95De38A06f2DcbEed8423a',
    hash: '0x9be4ce829997e2daa7e57811d98925c557d19431461c890267a27ca2e54b4e85',
  },
  {
    date: new Date(1650655237000),
    eth: 0.168161608016,
    usd: 0.168161608016 * 2963.17,
    from: '0x806ca46e7df33f6c6f4e28839162f8f85755116a',
    to: '0xEDd9Fa9ec9247699dB95De38A06f2DcbEed8423a',
    hash: '0xd44f7bc7f4bfabd9bd134a7271de31b919d636d0a3ca5e2c43b45136b13c745a',
  },
  {
    date: new Date(1650655469000),
    eth: 0.160906015,
    usd: 0.160906015 * 2963.17,
    from: '0x806ca46e7df33f6c6f4e28839162f8f85755116a',
    to: '0xEDd9Fa9ec9247699dB95De38A06f2DcbEed8423a',
    hash: '0xf38c5bb802d1e82fccded4451b62325a46caa15b991f08b35773b7d8ec3bdaeb',
  },
  {
    date: new Date(1650655575000),
    eth: 0.18454515,
    usd: 0.18454515 * 2963.17,
    from: '0x806ca46e7df33f6c6f4e28839162f8f85755116a',
    to: '0xEDd9Fa9ec9247699dB95De38A06f2DcbEed8423a',
    hash: '0x554320e25ec5d83d2e4c94946e0a033c9d20898fca2cbc7bcfc948b5ec0cc3a7',
  },
  {
    date: new Date(1650655678000),
    eth: 0.153015,
    usd: 0.153015 * 2963.17,
    from: '0x806ca46e7df33f6c6f4e28839162f8f85755116a',
    to: '0xEDd9Fa9ec9247699dB95De38A06f2DcbEed8423a',
    hash: '0xbbf2ac40adef54c4dceca501c55d19e9f8555d69ce741742b184905b0df8d89e',
  },
  {
    date: new Date(1650655780000),
    eth: 0.333,
    usd: 0.333 * 2963.17,
    from: '0x806ca46e7df33f6c6f4e28839162f8f85755116a',
    to: '0xEDd9Fa9ec9247699dB95De38A06f2DcbEed8423a',
    hash: '0x183894afdb5ce71c294636ca0d598695a0337a85e2e804a394226a756cef794f',
  },
  {
    date: new Date(1650655901000),
    eth: 0.29,
    usd: 0.29 * 2963.17,
    from: '0x806ca46e7df33f6c6f4e28839162f8f85755116a',
    to: '0xEDd9Fa9ec9247699dB95De38A06f2DcbEed8423a',
    hash: '0xd1c63c8262badf12e62c9a33529b9f65bd1b2db2912e6a38326b2ef87653dabb',
  },
  {
    date: new Date(1650656030000),
    eth: 0.8,
    usd: 0.8 * 2963.17,
    from: '0x806ca46e7df33f6c6f4e28839162f8f85755116a',
    to: '0xEDd9Fa9ec9247699dB95De38A06f2DcbEed8423a',
    hash: '0x3b6e61184772a3c94a9d1e702acdb614ca2ccac82c0921d82cc1addead40bb8e',
  },
  {
    date: new Date(1650656132000),
    eth: 0.3801,
    usd: 0.3801 * 2963.17,
    from: '0x806ca46e7df33f6c6f4e28839162f8f85755116a',
    to: '0xEDd9Fa9ec9247699dB95De38A06f2DcbEed8423a',
    hash: '0xb6e1773d6f0c481e647fe07868445ba06b2bb4c3c3174317682f3a19e88fbedf',
  },
  {
    date: new Date(1653248455000),
    eth: 12.656,
    usd: 12.656 * 2041.08,
    from: '0xfe30d555f4c31e8d3dc459bf666405d9343d6b00',
    to: '0x165CD37b4C644C2921454429E7F9358d18A45e14',
    hash: '0xfc54df73526117f3e954f238729787f5933f89d7998f793ea2afd0fbeeaa1a3d',
  },
  {
    date: new Date(1653855936000),
    eth: 500,
    usd: 900000, // price was fixed on https://youtu.be/y9d5I1sYOio
    from: '0x13093a3e93bfb4d7f65b82ecc4683bccf72138df',
    to: '0x557f10757Ef9E28E23E33c82B6d8c035189D7f3f',
    hash: '0xf39e32efa1e4cc884f6de5439fa9ab0d1c45ffad136c71bdee6b21565d0f7870',
  },
  {
    date: new Date(1655109048000),
    eth: 12,
    usd: 12 * 1209.12,
    from: '0xd3228e099e6596988ae0b73eaa62591c875e5693',
    to: '0x165CD37b4C644C2921454429E7F9358d18A45e14',
    hash: '0x42f72ca9fe5d6a82a9fa2384d5559f126982d2d8ac2f49ce41bfdb231fe2a22a',
  },
  {
    date: new Date(1655110260000),
    eth: 12,
    usd: 12 * 1209.12,
    from: '0x01f86f668f00ea8d929479edf81c232c1bca8307',
    to: '0x165CD37b4C644C2921454429E7F9358d18A45e14',
    hash: '0x4218a0eb4bd248669dae95ff5dc82401be32fd49d7a9fa881dea46f6e0621daa',
  },
] as TransferInfoType[];
