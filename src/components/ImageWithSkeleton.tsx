import React, { useState } from 'react';
import { Skeleton } from './Skeleton';
import { ImageOff } from 'lucide-react';

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  skeletonClassName?: string;
  alt: string;
}

export const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  skeletonClassName = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Skeleton shown while loading */}
      {!isLoaded && !hasError && (
        <Skeleton
          className={`absolute inset-0 w-full h-full ${skeletonClassName}`}
        />
      )}

      {/* Fallback if error */}
      {hasError ? (
        <div className="absolute inset-0 w-full h-full bg-[#F6F2FD] border border-[#D9C9F4] flex flex-col items-center justify-center p-4 text-center">
          <ImageOff className="w-8 h-8 text-[#7654B3]/50 mb-2" />
          <span className="text-xs text-[#62657D] font-medium">
            {alt || 'Imagen clínica no disponible'}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
