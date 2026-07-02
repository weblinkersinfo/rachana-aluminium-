import React, { useState } from 'react';
import './Image.css';

export const Image = ({ src, alt, className = '', aspectRatio = 'auto', priority = false, imgStyle }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div 
      className={`image-wrapper ${className}`} 
      style={{ aspectRatio }}
    >
      {!isLoaded && !error && <div className="image-skeleton"></div>}
      {error && <div className="image-fallback">Image Unavailable</div>}
      
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={`custom-image ${isLoaded ? 'loaded' : ''}`}
        style={imgStyle}
      />
    </div>
  );
};
