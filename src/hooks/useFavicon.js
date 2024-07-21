import { useEffect } from "react";

const useFavicon = (iconFilename) => {
  useEffect(() => {
    const updateFavicon = (iconFilename) => {
      const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
      favicon.type = 'image/svg+xml';
      favicon.rel = 'icon';
      favicon.href = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/${iconFilename}.svg`;
      document.getElementsByTagName('head')[0].appendChild(favicon);
    };

    updateFavicon(iconFilename);
  }, [iconFilename]);
};

export default useFavicon;
