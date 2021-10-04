import {useEffect, useRef, useState} from 'react';

const useSticky = () => {
  const [isStuck, setIsStuck] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsStuck(e.intersectionRatio < 1);
      },
      {threshold: [1]},
    );
    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [ref]);

  return {isStuck, ref};
};

export default useSticky;
