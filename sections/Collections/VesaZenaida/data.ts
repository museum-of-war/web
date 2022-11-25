export const startDate = '30th of November 2022';
export const nftDescription =
  'For cultural heritage protection by the largest charity NFT-project in Ukraine. Award-winning digital art meets technology that changes the world and people who build the future. World-famous artists donated their artworks for tokenization and selling. The funds will go to the restoration of Ukrainian iconic sites.';
export const projectDescription =
  '600+ sites of Ukrainian culture were damaged by the war. META HISTORY museum will restore them together with the Ministry of Culture and Information Policy of Ukraine. Make your contribution to the survival of the best examples of the art of previous generations by purchasing NFT works of outstanding contemporary artists.';

interface NFTInfo {
  name: string;
  imgUrl: string;
  author: string;
  type: string;
  year?: number;
  description: string;
}
export const nfts: NFTInfo[] = [
  {
    name: 'Silence',
    imgUrl: '/img/vesa-zinaida/vesa.webp',
    author: 'VESA',
    type: 'Mixed media digital',
    year: 2010,
    description:
      '«The artwork, as dark as it is with an abstract eagle pecking at the neck of the screaming unraveling figure, represents the alchemy that happens through even the darkest of time if we will it to be. Someone collecting it, after 12 years as the digital original, will be a part of its transformative story. How to turn the negative into something positive to stop the screams. This work represents and was made during a very dark and challenging time in my life when my company was going bankrupt, I nearly died of pneumonia and spent time in an intense care unit with multiple surgeries. The universe seemed a very hostile place, and I needed to discover the positive side and meaning again in a different way. I’m very happy to be presenting this with Zinaida, who is a powerful artist along the same vein, attempting alchemy and purpose through her work», — VESA.',
  },
  {
    name: 'Silence Mode',
    imgUrl: '/img/vesa-zinaida/zinaida.webp',
    author: 'ZINAIDA',
    type: 'Videoart',
    description:
      "«My video works use mixed techniques to compile a holistic image. Silence Mode is one such multilayered image, where the photo of the girl is complemented by the bride's veil, which looks as if it is 'smoky' because of the events that are currently taking place in Ukraine - flashes, explosions, and fires. One of the very symbolic details is an old Ukrainian wreath of goose feathers, which was created by hand in one of the villages of western Ukraine, and now this tradition is lost. In the work, I address the theme of silence, because nowadays in Ukraine peace has been replaced by a mode of silence, during which the heart freezes with fear and expectation. I am glad that I was able to strengthen this work with the energy of interaction through cooperation with the Finnish artist VESA», — ZINAIDA.",
  },
];

interface Author {
  name: string;
  description: string;
}
export const authors: Author[] = [
  {
    name: 'VESA',
    description:
      'is the mixed media artist whose work might best be defined as “Western abstraction.” He combines oil painting, body painting, and photography to create his imagery. The filmmaker, photographer, painter, and Photoshop artist, Vesa brings these skills to a new kind of expression. The technical process involves painting on canvas, body painting on his model, photographing the whole process from start to finish, taking more photos out in nature, and combining all those images in Photoshop as a collage. He is considered to be the leading early artist building the metaverse and NFT expansion, being among the first to enter the earliest stages. His art has been collected by hedge funds, exchanges, CEOs, and influencers. Among them are Charles Hoskinson, Charlie Lee, Dr. Marwan Al Zarouni, Saeed Al Darmaki, Tone Vays, Willy Woo, Adam Williams, and others.',
  },
  {
    name: 'ZINAIDA',
    description:
      'is a Ukrainian artist and cultural activist who is oriented on characters and myths about women’s issues and female identity in both Ukrainian and world culture. Her artworks address images rooted in Ukrainian traditions, but for the expression of which the artistic medium of contemporary art is used. In the mix of technological approach and archaic materials, it is possible to see how our modernity is stitched with deep traditional national origins, nourishing all the new images that emerge afterward. A characteristic feature of Zinaida’s work — is research into mythologies, national archaic images, and their integration into the medium of contemporary art. Most of them indirectly participate in cultural and ethnographic research and communicate with the bearers of ancient cultural practices. Zinaida’s works are kept in private collections in Ukraine, the UK, Spain, and the USA, as well as in public collections.',
  },
];
