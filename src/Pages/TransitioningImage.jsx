import React from 'react';
import "./TransitioningImage.css";

function TransitioningImage({ imageSrcA, imageSrcB, altTextA, altTextB}) {
  return (
        <div className="transitioning-image-container">
            <img loading="lazy" src={imageSrcA} alt={altTextA} className="transitioning-image-a"/>
            <img loading="lazy" src={imageSrcB} alt={altTextB} className="transitioning-image-b"/>
        </div>
  );
}

export default TransitioningImage;