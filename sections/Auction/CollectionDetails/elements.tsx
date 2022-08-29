import Link from 'next/link';
import React from 'react';

export const NavBack = () => (
  <Link href="/auction" passHref>
    <a>
      <div className="h-[48px] flex items-center cursor-pointer group">
        <img
          alt="arrow back"
          src="/img/down-white.svg"
          className="rotate-90 flex-grow-0 leading-[48px]"
        />
        <span className="font-rblack text-[14px] ml-[8px] h-full leading-[48px] hover:border-b-4 hover:border-white">
          All collections
        </span>
      </div>
    </a>
  </Link>
);
