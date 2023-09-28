import { useEffect, useState } from "react";
import { debounce } from "./utils";

// "(max-width: 600px)"
const useMediaQuery = (mediaQueryString: string) => {
  const [isMedia, setIsMedia] = useState<boolean | null>(null);

  useEffect(() => {
    function updateIsMedia() {
      const mediaQueryList = window.matchMedia(mediaQueryString);
      setIsMedia(mediaQueryList.matches);
    }
    const debouncedUpdateIsMedia = debounce(updateIsMedia);

    updateIsMedia();
    window.addEventListener("resize", debouncedUpdateIsMedia);

    return () => window.removeEventListener("resize", debouncedUpdateIsMedia);
  }, []);

  return isMedia;
};

export default useMediaQuery;
