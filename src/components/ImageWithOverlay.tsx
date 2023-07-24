// ImageWithOverlay.tsx

import React, { ReactNode } from 'react';

interface ImageWithOverlayProps {
  imageSrc?: string;
  text?: string;
  overlay: ReactNode;
}

const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({
  imageSrc,
  text,
  overlay,
}) => {
  return (
    <div className="relative inline-block">
      {/* Image or Text below */}
      <div className=""></div>
      

      {/* Overlay in front */}
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-2"
        style={{ overflow: 'visible', whiteSpace: 'normal' }}
      >
        {imageSrc ? (
        <img src={imageSrc} alt="Image" className="w-full" />
      ) : (
        <p>{text}</p>
      )}
        
      </div>
    </div>
  );
};

export default ImageWithOverlay;
