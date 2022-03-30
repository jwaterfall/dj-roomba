import { useEffect, useState } from 'react';

const useSticky = () => {
  const [isStuck, setIsStuck] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsStuck(e.intersectionRatio < 1);
      },
      { threshold: [1] },
    );
    observer.observe(ref);
    return () => observer.unobserve(ref);
  }, [ref]);

  return { isStuck, ref: setRef };
};

export default useSticky;
