import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type LazyLoadingImageProps = {
  src: string;
  alt: string;
  cn: string;
  style?: boolean;
}

export const LazyLoadingImage = ({src, alt, cn}: LazyLoadingImageProps) => {

  
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      className={cn}
    />
  )
}


//  if i add effect blur it will not respect the height of the parent container