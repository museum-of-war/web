import React from 'react';

export const AboutProject = () => {
  return (
    <div className="mb-80px">
      <div className="h-3px w-full bg-white" />

      <img
        src="/img/pd-logoNoSymbol-black.svg"
        alt="Metahistory"
        className="mt-48px h-[56px] tablet:h-[64px] desktop:h-[96px]"
      />

      <div className="mt-32px tablet:mt-40px desktop:mt-[52px] grid grid-cols-1 tablet:grid-cols-2 gap-24px tablet:gap-40px">
        <p>
          <span className="font-rblack">META HISTORY museum</span> — the largest
          charitable NFT project in Ukraine, created with the support of the
          Ministry of Digital Transformation and the Ministry of Culture of
          Ukraine. We have raised more than $1 million by selling NFT to provide
          humanitarian aid to Ukrainians, support our defenders and restore
          iconic cultural sites, destroyed by the war. We can raise much more
          for these goals with your support. And we are greatly hopeful for it.
        </p>
        <p>
          “Together we will elevate this game and will make a proposition to the
          NFT community ready to invest in sustainable fine art growth and in
          the preservation of something longer than ourselves. We will build a
          bridge between art and NFT potential. As VESA is changing the way
          digital art is experienced and appreciated, as ZINAIDA changes
          perceptions of the role of the past and the future in our existence,
          we will work with creators to change the meaning of NFT for the world.
          And this auction is one of the visible manifestations of a process
          that has already begun”, — VK, founder of the META HISTORY museum.
        </p>
      </div>
    </div>
  );
};
