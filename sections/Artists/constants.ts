import { ALL_DROPS } from '@constants/collections/Warline';

const DROP_EVENTS = ALL_DROPS.map((drop) => drop.events).flat();
export const ARTISTS = [
  { name: 'Danya Shulipa', avatar: 'Danya Shulipa.jpg', id: 1 },
  { name: 'Oleg Savin', avatar: 'Oleg Savin.jpg', id: 2 },
  { name: 'Olga Smirnova', avatar: 'Olga Smirnova.jpg', id: 3 },
  { name: 'Klimenkova Yelyzaveta', avatar: 'Lisa Klimenkova.jpg', id: 4 },
  { name: 'Dima Gavriliv', avatar: 'dima_gavriliv.jpg', id: 5 },
  { name: 'Dmitriy Shepil', avatar: 'Shepil Dmitriy.png', id: 6 },
  { name: 'Harkavets Iryna', avatar: 'marginai_.png', id: 7 },
  { name: 'Anna Voda', avatar: 'Anna Voda.jpeg', id: 8 },
  { name: 'Margarita Marushevska', avatar: 'Margarita Marushevska.jpg', id: 9 },
  { name: 'Sveta Gavrilenko', avatar: 'Sveta Gavrilenko.jpeg', id: 10 },
  { name: 'Mara Kava', avatar: 'Mara Kava.jpeg', id: 11 },
  { name: 'Valerii Kolor', avatar: 'ZDESROY (Valerii Kolor).jpeg', id: 12 },
  { name: 'PASKA', avatar: 'PASKA.jpeg', id: 13 },
  { name: 'mitya lapko', avatar: 'mitya.lapko.jpg', id: 14 },
  { name: 'Khrystyna Vlasenko', avatar: 'Khrystyna Vlasenko.jpg', id: 15 },
  {
    name: 'Alina Shevchuk',
    avatar: 'LINA SHA ( Alina Shevchuk ).jpeg',
    id: 16,
  },
  { name: 'Barbalat Kateryna', avatar: 'Kateryna Barbalat.png', id: 17 },
  { name: 'Anna Golub', avatar: 'Anna Golub.JPG', id: 18 },
  { name: 'Anton Abo', avatar: 'Anton Abo.jpg', id: 19 },
  { name: 'Kos Reed', avatar: 'Kos Reed.jpg', id: 20 },
  { name: 'Tina Tykhonenko', avatar: 'Tihotak.jpeg', id: 21 },
  // { name: 'SERGOLT', avatar: 'SERGOLT.png', id: 22 },
  { name: 'Zhannet Podobed', avatar: 'Zhannet Podobed.jpeg', id: 23 },
  { name: 'Alisa Gots', avatar: 'Alisa Gots.jpeg', id: 24 },
  { name: 'Julie Grechukh', avatar: '', id: 25 },
  { name: 'Machneva Kateryna', avatar: 'bombini.jpg', id: 26 },
  { name: 'Nika Kurilenko', avatar: 'Nika Kurilenko.jpg', id: 27 },
  { name: 'AlgorithmAB', avatar: 'AlgorithmAB.png', id: 28 },
  { name: 'Yu Andriichuk', avatar: 'yuseless.me.png', id: 29 },
  { name: 'Irene Neyman', avatar: 'Irene Neyman.PNG', id: 30 },
  { name: 'Yana Svyatkina', avatar: 'Yana Sviatkina.jpg', id: 31 },
  { name: 'Olena Kalinina', avatar: 'creblur.png', id: 32 },
  { name: 'Olena Dziura', avatar: 'Olena Dziura.png', id: 33 },
  { name: 'Erlikh Dima', avatar: 'Erlikh_Dima.png', id: 34 },
  { name: 'Anastasiia Taraskevych', avatar: 'taraskevych.jpeg', id: 35 },
];
export const ARTISTS_WITH_ARTS = ARTISTS.map((artist) => ({
  ...artist,
  arts: DROP_EVENTS.filter((event) => event.ArtistName.includes(artist.name))
    .length,
}));

// Anya Kislaya.jpg

