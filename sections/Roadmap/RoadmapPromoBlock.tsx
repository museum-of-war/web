import Button2 from '@components/Button2';
import Link from 'next/link';
import React from 'react';
import { Ruler } from './Ruler';

const blockConfig = [
  { step: 0, className: 'w-4 h-40px' },
  { step: 4, className: 'w-4 h-24px' },
  { step: 2, className: 'w-2 h-16px' },
];

export const RoadmapPromoBlock = () => {
  return (
    <div className="relative bg-carbon overflow-hidden">
      <div className="absolute top-0 -left-4 flex">
        {[...Array(10)].map((_, i) => (
          <Ruler
            key={i}
            numberOfBlocks={16}
            blockConfig={blockConfig}
            dark={false}
          />
        ))}
      </div>

      <div className="mt-60px mb-40px mx-40px tablet:m-72px flex flex-col tablet:flex-row tablet:items-center gap-40px">
        <h4 className="font-rblack text-white tablet:flex-1 text-27px leading-30px tablet:text-32px tablet:leading-36px">
          Check out our roadmap
        </h4>
        <div className="flex items-center">
          <Link href="/roadmap" passHref>
            <a>
              <Button2 label="View Roadmap" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
