import React, { useCallback, useEffect, useRef, useState } from 'react';

type InfiniteLoopProps = {
  speed: number,
  direction: 'right' | 'left',
  className?: string,
  children: React.ReactNode,
}

const InfiniteLoop = ({ speed, direction, className = '', children }: InfiniteLoopProps) => {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const instanceWidth = width / innerRef.current.children.length;

    if (width < parentWidth + instanceWidth) {
      setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
    }
  }, [looperInstances]);

  useEffect(() => {
    setupInstances();
  }, [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <div className={`w-100vw overflow-hidden flex items-center ${className}`} ref={outerRef}>
      <div className='flex justify-center w-fit' ref={innerRef}>
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className={`flex items-center w-max animate-[carousel_linear_infinite]`}
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteLoop;
