import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

const { VITE_REACT_APP_BACKIMAGE } = import.meta.env;

export const Images = ({ src }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageLoaded(true);
  }, [src]);

  console.log(`${VITE_REACT_APP_BACKIMAGE}/${src}`);

  return (
    <>
      {imageLoaded ? (
        <img
          src={`${VITE_REACT_APP_BACKIMAGE}/${src}`}
          alt={`Imagen ${src} `}
        />
      ) : (
        <Skeleton width={300} height={200} />
      )}
    </>
  );
};
