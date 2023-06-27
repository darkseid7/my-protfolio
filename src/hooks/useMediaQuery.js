import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const updateMatches = (event) => {
      setMatches(event.matches);
    };

    updateMatches(media);

    media.addEventListener("change", updateMatches);

    return () => {
      media.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
}

export const useDesktop_m = () => useMediaQuery("(max-width: 1200px)");
export const useTablet = () => useMediaQuery("(max-width: 1024px)");
export const useTablet_m = () => useMediaQuery("(max-width: 940px)");
export const useTablet_s = () => useMediaQuery("(max-width: 800px)");
export const usePhone = () => useMediaQuery("(max-width: 650px)");
