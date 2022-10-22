import React, { HTMLAttributes } from 'react';

const defaultBlockConfig = [
  { step: 0, className: 'w-6 h-72px' },
  { step: 4, className: 'w-4 h-40px' },
  { step: 2, className: 'w-2 h-16px' },
];

interface RulerProps {
  numberOfBlocks: number;
  dark?: boolean;
  blockConfig?: {
    step: number;
    className: HTMLAttributes<HTMLDivElement>['className'];
  }[];
}

export const Ruler = ({
  numberOfBlocks,
  dark = true,
  blockConfig = defaultBlockConfig,
}: RulerProps) => {
  return (
    <div className="flex">
      {[...Array(numberOfBlocks)].map((_, i) => {
        let configIndex = 0;
        let dashClassName = 'w-1 h-8px';
        while (configIndex < blockConfig.length) {
          if (
            (blockConfig[configIndex]!.step === 0 && i === 0) ||
            i % blockConfig[configIndex]!.step === 0
          ) {
            dashClassName = blockConfig[configIndex]!.className || '';
            break;
          }
          configIndex++;
        }

        return (
          <div key={i} className="relative w-20px h-72px">
            <div
              className={`${dark ? 'bg-carbon' : 'bg-white'} ${dashClassName}`}
            />
          </div>
        );
      })}
    </div>
  );
};
