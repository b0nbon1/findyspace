import { useEffect, useState } from 'react';

const useProgressiveImage = (src: any) => {
  const [sourceLoaded, setSourceLoaded] = useState<null | string>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded;
};

export default useProgressiveImage;
