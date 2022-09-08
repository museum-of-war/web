import React from 'react';
import { useViewPort } from '@hooks/useViewport';
import { ScrollDesktop } from '@components/collections/TheHall/ScrollDesktop';
import Blurb from '@sections/AboutProject/Blurb';
import { ScrollTablet } from '@components/collections/TheHall/ScrollTablet';
import { ScrollMobile } from '@components/collections/TheHall/ScrollMobile';
import { data } from '@constants/collections/TheHall/data';

const TheHall = () => {
  const { isMobile, isTablet } = useViewPort();

  return (
    <div className="the-hall-wrapper">
      <Blurb
        header="The hall"
        english="This is not just a war between two countries. This is a war against humanity, against the light. The whole world — and these amazing individuals, in part — unprecedentedly united in this battle. The Hall is a collection of NFT art that was created in gratitude for public figures that stand for Ukraine (and can be claimed only by them.) It's the least we can do to thank you."
        ukrainian="Це не просто війна однієї країни проти іншої. Це війна проти людства, проти світла. Весь світ — і, зокрема, ці неймовірні особистості — безпрецедентно об’єдналися в цій битві. The Hall — це колекція NFT-експонатів, створених на знак подяки громадським діячам, які виступають за Україну. Це найменше, як ми можемо сказати «дякуємо». Музей готовий передати NFT їх власникам за першою вимогою!"
      />
      {isMobile ? (
        <ScrollMobile data={data} />
      ) : isTablet ? (
        <ScrollTablet data={data} />
      ) : (
        <ScrollDesktop data={data} />
      )}
    </div>
  );
};

export default TheHall;
