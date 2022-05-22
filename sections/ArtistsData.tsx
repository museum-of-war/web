import { ArtistType } from '@sections/types';

const ArtistsData = (
  [
    {
      name: 'Volodymyr Bondar',
      bio: "The most famous science fiction book cover illustrator in Ukraine. Recognized as the Europe's best science fiction and fantasy book cover illustrator, prestigious EuroCon 2006 award. Pioneer of the digital art in Ukraine.",
      avatarSrc: '/img/avatars/bondar.jpg.webp',
    },
    {
      name: 'Rostyslav Zagornov',
      bio: 'Ukrainian video game and movie artist living in UK. Concept artist for Bladerunner 2049, Ghost In The Shell, Fantastic Beasts, Thor: Ragnarok, Spiderman: No Way Home movies and Metro: Exodus video game.',
      avatarSrc: '/img/avatars/zagornov.jpg.webp',
    },
    {
      name: 'Stanislav Lunin',
      bio: 'Ukrainian concept artist for video games from Room 8 studio. Stanislav created the iconic image serving as a frontrunner of the collection in the first days of war. It quickly became recognized around the world as the symbol of free Ukraine.',
      avatarSrc: '/img/avatars/lunin.jpg.webp',
    },
    {
      name: 'Vlada Hladkova',
      bio: 'A striking Ukrainian artist from Kherson that created multiple iconic images reflecting on the war in Ukraine that immediately became popular. Vlada is also an established NFT artist.',
      avatarSrc: '/img/avatars/hladkova.jpg.webp',
    },
    {
      name: 'Alex Twin',
      bio: 'A successful Ukrainian artist, credited for his work on famous video game franchises Halo and Prey.',
      avatarSrc: '/img/avatars/twin.png.webp',
    },
    {
      name: 'Roman Chalyi',
      bio: 'Illustrator for games, worked on a series of cinematics for the  League of Legends game. Concept artist on the animated series Star Trek and other famous movie franchises.',
      avatarSrc: '/img/avatars/chalyi.jpg.webp',
    },
    {
      name: 'Oleksii Gnievyshev',
      bio: 'Oleksii Gnievyshev is a highly professional artist, master of realistic painting. Born in Ukraine, since 2014 lives and works in Brühl, Germany. His paintings are in private collections and museums around the world.',
      avatarSrc: '/img/avatars/gnievyshev.jpg.webp',
    },
  ] as ArtistType[]
).reduce(
  (obj, artist) => ({ ...obj, [artist.name]: artist }),
  {} as Record<string, ArtistType>,
);

export default ArtistsData;
