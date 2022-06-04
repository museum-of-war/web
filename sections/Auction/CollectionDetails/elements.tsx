import React from 'react';
import Link from 'next/link';

export const NavBack = () => (
  <Link href="/auction" passHref>
    <a>
      <div className="h-[48px] flex items-center cursor-pointer group">
        <img
          alt="arrow back"
          src={'/img/down-white.svg'}
          className="rotate-90 flex-grow-0 leading-[48px]"
        />
        <span className="font-rblack text-[14px] ml-[8px] h-full leading-[48px] hover:border-b-4 hover:border-white">
          All collections
        </span>
      </div>
    </a>
  </Link>
);

export const CollectionLogo = ({ size, src }: { size: number; src?: string }) =>
  src ? (
    <div
      className="border-4 border-white bg-carbon"
      style={{
        width: size + 8,
        height: size + 8,
        borderRadius: '50%',
        top: -size / 2,
        left: 0,
        right: 0,
        margin: 'auto',
        position: 'absolute',
      }}
    >
      <img
        src={src}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
        }}
      />
    </div>
  ) : null;
