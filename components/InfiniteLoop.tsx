import React from 'react';

type InfiniteLoopProps = {
  speed: number,
  className?: string,
  children: React.ReactNode,
}

const InfiniteLoop = ({ speed, className = '', children }: InfiniteLoopProps) => {
  
  const delay = speed / 2;
  
  return (
    <div className={`${className} w-100% overflow-hidden relative flex flex-row items-center`}>
        <div className="flex-shrink-0 w-max flex flex-row items-center"
        style={{
          animation: `carousel ${speed}s linear infinite`
        }}
        >
          {children}
        </div>
        <div className="flex-shrink-0 w-max flex flex-row items-center"
        style={{
          animationDelay: `${delay}s`,
          animation: `carousel ${speed}s linear infinite`
        }}
        >
          {children}
        </div>
      </div>
  )
}

export default InfiniteLoop;
