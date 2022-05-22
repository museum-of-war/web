import { IMG_STORAGE } from '@sections/Constants';
import { AuctionCollection, AuctionItemType } from '@sections/types';

const KalushAuctionData: Array<Omit<AuctionItemType, 'index'>> = [
  {
    tokenId: 1,
    imageSrc: `${IMG_STORAGE}/original/avatars/AlexTwin-EvacuationFromBucha.png`, // todo @current
    artist: 'Alex Twin',
    descriptionEnglish:
      'Ukrainian band Kalush Orchestra won the Eurovision Song Contest, a clear show of popular support for the group’s war-ravaged nation that went beyond music. The band and its song “Stefania” beat 24 other performers on the 14th May  in the grand final of the competition. The 439 fan votes is the highest number of televote points ever received in a Eurovision contest, now in its 66th year.',
    descriptionUkrainian:
      'Український гурт Kalush Orchestra переміг на пісенному конкурсі «Євробачення», що є яскравим проявом народної підтримки зруйнованої війною нації групи, яка вийшла за рамки музики. Гурт і його пісня «Stefania» стали краще ніж 24 інших виконавців 14-го травня у гранд-фіналі конкурсу. 439 голосів шанувальників – це найбільша кількість балів телеголосування, коли-небудь отриманих на конкурсі Євробачення, яке триває вже 66-й рік.',
  },
].map((item) => ({
  isSale: false, // todo @current
  category: AuctionCollection.Kalush,
  ...item,
}));

export default KalushAuctionData;
