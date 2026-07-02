import { useEffect, useRef, useState } from 'react';

export const useReveal = (options = { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }) => {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsRevealed(true);
        observer.unobserve(node); // Trigger only once
      }
    }, options);

    observer.observe(node);

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return { ref, isRevealed };
};
