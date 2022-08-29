import React from 'react';

type InfiniteLoopProps = {
  speed: number;
  className?: string;
  children: React.ReactNode;
};

const InfiniteLoop = ({
  speed,
  className = '',
  children,
}: InfiniteLoopProps) => {
  const delay = speed / 2;

  return (
    <div
      className={`${className} w-100% overflow-hidden relative flex flex-row items-center`}
    >
      <div
        className="flex-shrink-0 w-max flex flex-row items-center"
        style={{
          WebkitAnimation: `carousel ${speed}s linear infinite`,
          MozAnimation: `carousel ${speed}s linear infinite`,
          OAnimation: `carousel ${speed}s linear infinite`,
          animation: `carousel ${speed}s linear infinite`,
          // @ts-ignore
          WebkitWillChange: 'translateX',
          MozWillChange: 'translateX',
          OWillChange: 'translateX',
          willChange: 'translateX',
        }}
      >
        {children}
      </div>
      <div
        className="flex-shrink-0 w-max flex flex-row items-center"
        style={{
          WebkitAnimationDelay: `${delay}s`,
          MozAnimationDelay: `${delay}s`,
          OAnimationDelay: `${delay}s`,
          animationDelay: `${delay}s`,
          WebkitAnimation: `carousel ${speed}s linear infinite`,
          MozAnimation: `carousel ${speed}s linear infinite`,
          OAnimation: `carousel ${speed}s linear infinite`,
          animation: `carousel ${speed}s linear infinite`,
          // @ts-ignore
          WebkitWillChange: 'translateX',
          MozWillChange: 'translateX',
          OWillChange: 'translateX',
          willChange: 'translateX',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default InfiniteLoop;
