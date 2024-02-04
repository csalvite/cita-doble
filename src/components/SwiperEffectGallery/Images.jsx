import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

export const Images = ({ src }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageLoaded(true);
  }, [src]);

  return (
    <>
      {imageLoaded ? (
        <img src={src} alt='Imagen' />
      ) : (
        <Skeleton width={300} height={200} />
      )}
    </>
  );
};
