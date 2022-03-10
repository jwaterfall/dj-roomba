import { useMemo } from 'react';

import useViewport from './useViewport';

const useCardCount = () => {
  const { width } = useViewport();

  const cardCount = useMemo(() => {
    if (width < 1000) return 2;
    if (width < 1200) return 3;
    if (width < 1400) return 4;
    if (width < 1600) return 5;
    if (width < 1800) return 6;
    if (width < 2000) return 7;
    if (width < 2200) return 8;
    if (width < 2400) return 9;
    return 10;
  }, [width]);

  return cardCount;
};

export default useCardCount;
