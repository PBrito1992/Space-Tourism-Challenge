import { useIsMobile } from "@/hook/use-is-mobile";
import { useEffect, RefObject } from "react";

const useIntersection = <T extends HTMLElement>(
  elem: RefObject<T>,
  fallbackFn: () => void
) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!elem.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= (isMobile ? 0.5 : 0.75)
          ) {
            fallbackFn?.();
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    observer.observe(elem.current);

    return () => {
      elem.current && observer.unobserve(elem.current);
    };
  }, [fallbackFn, isMobile, elem]);
};

export { useIntersection };
