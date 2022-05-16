import { useState } from 'react';

export function useUpdate(): () => void {
  const [, setUpdateCounter] = useState(0);
  return () => {
    setUpdateCounter((counter) => counter + 1);
  };
}
