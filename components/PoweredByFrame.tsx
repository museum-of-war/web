import { useViewPort } from '@hooks/useViewport';
import React from 'react';
import { FRAME_LINK, MINISTRY_LINK } from '@sections/Constants';
import { openInNewTab } from '@sections/utils';

const PoweredByFrame = () => {
  const { isMobile } = useViewPort();
  // return isMobile ? (
  //   <div className="relative flex flex-row font-rlight py-10px border-y-4 border-carbon  ">
  //     <div className="absolute top-6">
  //       <button onClick={() => openInNewTab(MINISTRY_LINK)}>
  //         <img alt="banner" src={"img/pd-banner.png"} width="40%" />
  //       </button>
  //     </div>
  //     <div className="ml-60px pr-10% leading-20px text-16px">
  //       <p>
  //         An official collection approved by the Ministry of Digital
  //         Transformation
  //       </p>
  //       <button
  //         className="flex flex-row items-center mt-10px mb-5px"
  //         onClick={() => openInNewTab(FRAME_LINK)}
  //       >
  //         <p>Powered by</p>
  //         <img
  //           alt="Fair Logo"
  //           src={"img/pd-frameLogo.png"}
  //           width="60px"
  //           className="ml-10px"
  //         />
  //       </button>
  //     </div>
  //   </div>
  // ) : isTablet ? (
  //   <div className="border-y-4 border-carbon flex flex-row items-center justify-between py-5px mt-6% w-100%">
  //     <div className="flex flex-row items-center ">
  //       <button onClick={() => openInNewTab(MINISTRY_LINK)}>
  //         <img alt="banner" src={"img/pd-banner.png"} width="30px" />
  //       </button>

  //       <p className="ml-20px font-rlight text-14px ">
  //         An official collection approved by the Ministry of Digital
  //         Transformation
  //       </p>
  //     </div>
  //     <div className="min-w-250px flex flex-row items-center justify-end ">
  //       <p className="font-rlight text-14px ">Powered by</p>
  //       <img
  //         alt="Fair Logo"
  //         src={"img/pd-frameLogo.png"}
  //         width="70px"
  //         className="ml-10px"
  //       />
  //     </div>
  //   </div>
  // ) : (
  return (
    <div className="flex flex-row items-center justify-between py-5px mt-24px w-100%">
      <div className="flex flex-row items-center tablet:leading-24px laptop:leading-24px mobile:leading-20px">
        <button onClick={() => openInNewTab(MINISTRY_LINK)}>
          <img alt="banner" src={'img/pd-banner.png'} width="40px" />
        </button>
        <p
          style={{ display: 'inline-block' }}
          className="font-rlight ml-20px laptop:text-16px tablet:text-16px mobile:text-14px w-75%"
        >
          An official collection approved by the Ministry of Digital
          Transformation.{' '}
          <button onClick={() => openInNewTab(FRAME_LINK)}>
            <span>Powered by</span>
            <img
              alt="Fair Logo"
              src={'img/pd-frameLogo.png'}
              width={!isMobile ? '62px' : '40px'}
              style={{ display: 'inline-block' }}
              className="laptop:ml-10px tablet:ml-10px mobile:ml-5px laptop:mb-5px tablet:mb-5px"
            />
          </button>
        </p>
      </div>
    </div>
  );
};

export default PoweredByFrame;
