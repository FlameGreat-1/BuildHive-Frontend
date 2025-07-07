
import { useEffect, useRef } from "react";

type ScrollDirection = "left" | "right";

interface AutoScrollOptions {
  speed?: number; // pixels per frame
  direction?: ScrollDirection;
  pauseOnHover?: boolean;
}

export function useAutoScroll<T extends HTMLElement>({
  speed = 1,
  direction = "right",
  pauseOnHover = false,
}: AutoScrollOptions = {}) {
  const ref = useRef<T | null>(null);
  const animationId = useRef<number | null>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const scroll = () => {
      if (!isPaused.current) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        const isAtEnd = container.scrollLeft >= maxScroll;
        const isAtStart = container.scrollLeft <= 0;

        if (direction === "right") {
          container.scrollLeft += speed;
          if (isAtEnd) container.scrollLeft = 0;
        } else {
          container.scrollLeft -= speed;
          if (isAtStart) container.scrollLeft = container.scrollWidth;
        }
      }

      animationId.current = requestAnimationFrame(scroll);
    };

    animationId.current = requestAnimationFrame(scroll);

    return () => {
      if (animationId.current) cancelAnimationFrame(animationId.current);
    };
  }, [speed, direction]);

  useEffect(() => {
    if (!pauseOnHover || !ref.current) return;

    const container = ref.current;
    const pause = () => (isPaused.current = true);
    const resume = () => (isPaused.current = false);

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);

    return () => {
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
    };
  }, [pauseOnHover]);

  return ref;
}
