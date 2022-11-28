import { IMG_STORAGE } from '@sections/constants';
import { AuctionCollection, AuctionItemType } from '@sections/types';

const VesaAndZinaidaAuctionData: AuctionItemType[] = [
  {
    name: 'Silence',
    tokenId: 1,
    imageSrc: `${IMG_STORAGE}/original/vesa-and-zinaida/Vesa_Silence.tif`,
    artist: 'VESA',
    descriptionEnglish: `This work represents and was made during a very dark and challenging time in my life when my company was going bankrupt, I nearly died of pneumonia, and spent time in an intense care unit with multiple surgeries. Before this, due to a herniated disk, I spent a year in intense pain, and the global financial crisis took its toll otherwise. My focus before this was about the intense corruption and the general bad state of the world. The universe seemed a very hostile place, and I needed to discover the positive side and meaning again in a different way. After getting out of intense care to the general hospital side, I started forcefully making my brain focus on things I am grateful for though an active list and stayed with it daily like my life depended on it. During moments of feeling like giving up, it helped me pull through, and see things a new. For many people in Ukraine, there will be parts of this that resonate due to what is going on. The artwork, as dark as it is with an abstract eagle pecking at the neck of the screaming unravelling figure, represents the alchemy that happens through even the darkest of time, if we will it to be. Someone collecting it, after 12 years as the digital original, will be a part of its transformative story. How to turn the negative into something positive to stop the screams.

“One does not become enlightened by imagining figures of light, but by making the darkness conscious.” ― Carl Gustav Jung

I’m very happy to be presenting this with Zinaida, who is a powerful artist along the same vain, attempting alchemy and purpose through her work.`,
  },
  {
    name: 'Silence Mode',
    tokenId: 2,
    imageSrc: `${IMG_STORAGE}/original/vesa-and-zinaida/Zinaida_Silence_Mode.jpg`,
    artist: 'ZINAIDA',
    descriptionEnglish: `Nowadays, peace has been replaced by a silence mode - when the heart skips a beat due to fear and anticipation. In my video works I use mixed techniques, creating a complete image, and in Silence Mode one of the important details is an accessory ̶ an ancient handmade Ukrainian wreath with goose feathers, which was created in one of the villages of western Ukraine, but now this tradition has been lost.
Overlaying special effects on the photo of the girl in the form of a veil for the bride, as if it is "smoky" due to current events in Ukraine ̶ flashes, explosions and fires. I am grateful that I was able to empower this work with the energy of interaction through cooperation with the Finnish artist VESA.`,
  },
].map((item) => ({
  isSale: false,
  category: AuctionCollection.VesaZinaida,
  ...item,
}));

export default VesaAndZinaidaAuctionData;
