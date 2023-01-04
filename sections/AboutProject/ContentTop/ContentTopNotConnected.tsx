import React, { useState } from 'react';
import ApprovedAndSupportedBy from '@components/ApprovedAndSupportedBy';
import Button from '@components/Button';
import MintingModal from '../../../components/MintingModal';
import { Links } from '@components/Links';
import Link from 'next/link';

const ContentTopNotConnected = () => {
  const [openMintingModal, setOpenMintingModal] = useState<boolean>(false);

  return (
    <div className="pb-40px tablet:pb-72px desktop:pb-100px">
      <div className="flex flex-col desktop:flex-row gap-48px desktop:justify-between">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="font-rblack uppercase desktop:mt-10px tablet:mt-0 tablet:text-84px tablet:leading-72px mobile:text-46px mobile:leading-40px">
              The NFT-museum
            </p>
            <p className="font-rblack mobile:mt-10px mobile:text-27px mobile:leading-30px tablet:text-32px tablet:leading-36px tablet:mt-12px">
              of the war of putin&apos;s russia against Ukraine
            </p>
          </div>
          <div className="mt-30px tablet:mt-36px desktop:mt-30px w-100% flex flex-col tablet:flex-row justify-center items-center">
            <Link href="/collection/warline">
              <a>
                <Button
                  mode="primary"
                  className="px-48px tablet:h-48px mobile:h-60px mobile:w-100% tablet:w-auto"
                  round={false}
                  label="Buy NFT Now"
                />
              </a>
            </Link>

            <div
              className="desktop:mt-0 tablet:mt-0 mobile:mt-30px desktop:ml-auto tablet:ml-auto mobile:ml-0
              desktop:px-0 tablet:px-0 mobile:px-20px desktop:w-auto tablet:w-auto mobile:w-full"
            >
              <Links />
            </div>
          </div>
        </div>
        <div
          className="flex-1"
          dangerouslySetInnerHTML={{
            __html: `<video class="w-100%" src="/vid/pd-header-optimized.mp4" autoPlay loop muted playsInline/>`,
          }}
        />
        {openMintingModal ? (
          <MintingModal setOpenMintingModal={setOpenMintingModal} />
        ) : (
          <></>
        )}
      </div>
      <ApprovedAndSupportedBy />
    </div>
  );
};

export default ContentTopNotConnected;
