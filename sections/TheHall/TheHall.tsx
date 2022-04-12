import React from 'react';
import { useViewPort } from '@hooks/useViewport';
import { ScrollDesktop } from '@sections/TheHall/ScrollDesktop';
import { ScrollTablet } from './ScrollTablet';
import { ScrollMobile } from './ScrollMobile';
import { data } from './data';

export default () => {
  const { isMobile, isTablet } = useViewPort();

  return (
    <div>
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
