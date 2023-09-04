import { useState, useEffect, useMemo } from 'react';

export const useIsClient = () => {
  const [isClient, setIsClient] = useState(() => typeof window !== 'undefined');

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

export function useBreakpoint() {
  const isClient = useIsClient();
  const [breakpoints, setBreakpoints] = useState({
    isXs: false,
    isS: false,
    isM: false,
    isL: false,
    isXl: false,
  });

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      const width = window.innerWidth;
      const isXs = width <= 348;
      const isS = width <= 720; //note: this is the same with isM since I don't have any different styles in figma for S and M
      const isM = width <= 720;
      const isL = width < 1120;
      const isXl = width >= 1120; //note: this is the same as isL since I don't have any different styles in figma for L and XL

      setBreakpoints({ isXs, isS, isM, isL, isXl });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  return useMemo(() => breakpoints, [breakpoints]);
}
