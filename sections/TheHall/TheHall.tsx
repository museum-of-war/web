import React from 'react';
import { useViewPort } from '@hooks/useViewport';
import { ScrollDesktop } from '@sections/TheHall/ScrollDesktop';
import Blurb from '@sections/AboutProject/Blurb';
import { ScrollTablet } from './ScrollTablet';
import { ScrollMobile } from './ScrollMobile';
import { data } from './data';

export default () => {
  const { isMobile, isTablet } = useViewPort();

  return (
    <div>
      <Blurb
        header="The hall"
        english={`This is not just a war between two countries. This is a war against humanity, against the light. The whole world — and these amazing individuals, in part — unprecedentedly united in this battle. The Hall is a collection of NFT art that was created in gratitude for public figures that stand for Ukraine (and can be claimed only by them.) It's the least how we can say "thank you"`}
        ukrainian="Це не просто війна двох країн. Це війна проти людства, проти світла. Весь світ — і частково ці дивовижні особистості — безпрецедентно об’єдналися в цій битві. The Hall — це колекція  NFT експонатів, створених на знак подяки громадським діячам, які виступають за Україну (і на них можуть претендувати лише вони). Це найменше, як ми можемо сказати «дякую»."
      />
      {isMobile ? (
        <div>
          <ScrollMobile data={data} />
        </div>
      ) : isTablet ? (
        <div>
          <ScrollTablet data={data} />
        </div>
      ) : (
        <div className="px-10%">
          <ScrollDesktop data={data} />
        </div>
      )}
    </div>
  );
};
