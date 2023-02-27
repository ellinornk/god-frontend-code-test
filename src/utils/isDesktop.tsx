import { useRef } from "react";

export const useIsDesktop = () => {
  const windowSize = useRef(window.innerWidth);
  const isDesktop = windowSize.current > 480;
  return isDesktop;
};