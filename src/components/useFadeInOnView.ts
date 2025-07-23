import { useEffect, useRef, useState } from 'react';

export function useFadeInOnView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    fadeInClass: isVisible
      ? 'opacity-100 translate-y-0 transition-all duration-1000 ease-out'
      : 'opacity-0 translate-y-8',
  };
} 