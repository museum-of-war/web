import React from 'react';
import { useViewPort } from '@hooks/useViewport';
import { ScrollDesktop } from '@sections/Collections/TheHall/ScrollDesktop';
import Blurb from '@sections/AboutProject/Blurb';
import { ScrollTablet } from '@sections/Collections/TheHall/ScrollTablet';
import { ScrollMobile } from '@sections/Collections/TheHall/ScrollMobile';
import { data } from '@constants/collections/TheHall/data';
import SocialMediaButton from '@components/SocialMediaButton';

const TheHall = () => {
  const { isMobile, isTablet } = useViewPort();

  return (
    <>
      <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
        <div className="the-hall-wrapper">
          <Blurb header="The hall" />
          {isMobile ? (
            <ScrollMobile data={data} />
          ) : isTablet ? (
            <ScrollTablet data={data} />
          ) : (
            <ScrollDesktop data={data} />
          )}
          <Blurb
            english={`The Hall is a collection of NFT portraits of prominent people who have supported Ukraine. This is a symbol of our gratitude, which we will give to the celebrities depicted on the items upon request. And everyone can buy a copy here.

The Queen of Great Britain — Elizabeth — encouraged us to open the collection for sale. One of the NFTs was intended for her. However, Elizabeth will never get it. But it can still help Ukraine by being sold. So we present the portrait of the Queen as the first token of The Hall gallery. Together with the NFTs of Elon Musk and Vitalik Buterin, which have already been sent to them.`}
            ukrainian={`The Hall — колекція NFT-портретів видатних людей, які підтримали Україну. Це символ нашої подяки, який ми подаруємо знаменитостям, зображеним на потретах, за першим запитом. А копію кожен бажаючий може придбати тут.

Королева Великобратинії — Єлизавета — спонукала нас відкрити колекцію для продажу. Один з NFT був призначений для неї. Однак Єлизавета вже ніколи не зможе отримати його. Та він все ще може допомогти Україні, будучи проданим. Тож ми представляємо портрет королеви, як перший токен галереї The Hall. Разом з NFT Ілона Маска та Віталіка Бутеріна, які вже були їм відправлені.`}
          />
        </div>
      </div>
      <div className="bg-carbon mx-auto desktop:mt-120px tablet:mt-72px mobile:mt-40px">
        <div className="desktop:container desktop:px-132px tablet:px-72px mobile:px-24px mx-auto bg-carbon text-white desktop:py-120px tablet:py-[96px] mobile:py-60px">
          <div className="flex desktop:flex-row tablet:flex-col mobile:flex-col justify-between items-center">
            <div className="desktop:text-70px desktop:leading-72px tablet:text-70px tablet:leading-72px mobile:text-29px mobile:leading-30px font-rblack">
              #takeyourNFT
            </div>
            <div className="flex flex-row desktop:mt-0 tablet:mt-48px mobile:mt-40px justify-center w-full">
              <SocialMediaButton
                customStyle={{ borderRadius: '50%' }}
                customClasses="border-white border-2 box-content mobile:mr-6% tablet:mr-24px last:mr-0"
                twitter
                href="test"
              />
              <SocialMediaButton
                customClasses="border-white border-2 box-content mobile:mr-6% tablet:mr-24px last:mr-0"
                customStyle={{ borderRadius: '50%' }}
                telegram
                href="test"
              />
              <SocialMediaButton
                customClasses="border-white border-2 box-content mobile:mr-6% tablet:mr-24px last:mr-0"
                customStyle={{ borderRadius: '50%' }}
                instagram
                href="test"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px desktop:mt-120px tablet:mt-72px mobile:mt-40px">
        <div className="desktop:text-32px desktop:leading-24px tablet:text-32px tablet:leading-24px mobile:text-27px mobile:leading-30px font-rblack desktop:mt-0 tablet:mt-0 mobile:mt-30px">
          1
        </div>
        <Blurb
          english="We propose to draw the attention of celebrities to The Hall collection together. To do this, we are starting a series of flash mobs. Each of them will be dedicated to a certain person depicted on the new NFT. By asking them to accept the META HISTORY gift through social networks, we will increase the chances of attention to the collection and to Ukraine as a whole."
          ukrainian="Пропонуємо разом звернути увагу знаменитостей на колекцію The Hall. Для цього розпочинаємо серію флеш-мобів. Кожен з них буде присвячений певній людині, зображеній на нових NFT. Звернувшись до неї з проханням прийняти подарунок META HISTORY через соціальні мережі, ми збільшимо шанси на увагу до колекції і до України в цілому."
        />
        <div className="desktop:text-32px desktop:leading-24px tablet:text-32px tablet:leading-24px mobile:text-27px mobile:leading-30px font-rblack desktop:mt-0 tablet:mt-0 mobile:mt-30px">
          2
        </div>
        <Blurb
          english="As a token of our gratitude for your support, we will randomly select one of the participants of the flash mob and give them a copy of this NFT. If the celebrity accepts the gift, they will leave their digital signature on all copies of the token. And the lucky one will receive an autographed gift."
          ukrainian="На знак нашої вдячності за підтримку вам ми оберемо випадковим чином одного з учасників флеш-мобу і подаруємо копію цього NFT. Якщо знаменитість прийме подарунок, вона залишить свій цифровий підпис на всіх екземплярах токена. І щасливчик одержить подарунок з автографом."
        />
        <div className="desktop:text-32px desktop:leading-24px tablet:text-32px tablet:leading-24px mobile:text-27px mobile:leading-30px font-rblack desktop:mt-0 tablet:mt-0 mobile:mt-30px">
          3
        </div>
        <Blurb
          english="Announcements of flash mobs will appear on META HISTORY museum social networks. To join the raffle, you need to publish a post or story with the tag of the celebrity's profile, project and hashtag-call during the flash mob. Follow the announcements and join us!"
          ukrainian="Анонси флешмобів зʼявлятимуться у соціальних мережах META HISTORY museum. Щоб долучитися до розіграшу, потрібно впродовж флеш-мобу опублікувати пост або сторіз з тегом профілю знаменитості, проекту і хештегом-закликом. Стежте за анонсами і долучайтесь до нас!"
        />
        <div className="desktop:text-32px desktop:leading-24px tablet:text-32px tablet:leading-24px mobile:text-27px mobile:leading-30px font-rblack desktop:mt-0 tablet:mt-0 mobile:mt-30px">
          4
        </div>
        <Blurb
          english="Other tokens with the celebrity's signature will be available for purchase here. In any case, all owners of NFTs from The Hall collection will get free access to Ukrainian museums with a QR-code."
          ukrainian="Інші токени з підписом знаменитості будуть доступні для покупки тут. У будь-якому разі всі власники NFT з колекції The Hall одержать вільний доступ до українських музеїв за QR-кодом."
        />
      </div>
    </>
  );
};

export default TheHall;
