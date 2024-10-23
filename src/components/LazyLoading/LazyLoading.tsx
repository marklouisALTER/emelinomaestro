import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Image } from 'antd';

type LazyLoadingImageProps = {
  src: string;
  alt: string;
  cn: string;
  style?: boolean;
}

export const LazyLoadingImage = ({src, alt, cn, style}: LazyLoadingImageProps) => {

  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <>
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      onLoad={() => setTimeout(() => setIsLoaded(true), 1000)}
      style={{display: isLoaded ? 'none' : 'block'}}
    />
      {isLoaded && (
        <Image 
          src={src} 
          alt={alt} 
          className={cn + 'w-full cursor-pointer'} 
          style = {style ? { objectFit: 'cover', height: '150px'} : {display: 'block'}}
        />
      )}
    </>
  )
}
