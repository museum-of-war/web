import React from 'react';
import { useViewPort } from '@hooks/useViewport';
import Button2 from '@components/Button2';
import Link from 'next/link';

export const ApplyAsAnArtist: React.FC = () => {
  const { isMobile } = useViewPort();

  return (
    <>
      {isMobile ? (
        <>
          <div className="bg-carbon p-40px flex flex-col items-center justify-center mobile:mt-[40px]">
            <div className="flex align-center justify-center">
              <p className="font-rblack mobile:text-29px text-white leading-30px">
                Apply as an artist
              </p>
            </div>
            <div className="pt-40px mobile:w-full">
              <Link href="/for-artists" passHref>
                <a>
                  <Button2
                    label="Apply"
                    className="min-w-240px leading-36px mobile:text-14px mobile:w-full"
                  />
                </a>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-carbon flex desktop:basis-1/2 tablet:basis-1/2 mt-[60px]">
          <div className="w-100% p-36px flex flex-col items-start">
            <p className="font-rblack text-32px text-white leading-36px">
              Apply as an artist
            </p>
            <Link href="/for-artists" passHref>
              <a>
                <Button2
                  label="Apply"
                  className="text-14px mt-[72px] px-[72px]"
                />
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
