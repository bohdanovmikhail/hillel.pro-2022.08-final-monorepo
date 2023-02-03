import { useState, useEffect } from 'react';

export function useScreenWidth(): number {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handler() {
      const newWidth = window.innerWidth;

      if (width !== newWidth) {
        setWidth(newWidth);
      }
    }

    handler();
    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, [width]);

  return width;
}

export function useScreenHeight(): number {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handler() {
      const newHeight = window.innerHeight;

      if (height !== newHeight) {
        setHeight(newHeight);
      }
    }

    handler();
    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, [height]);

  return height;
}
