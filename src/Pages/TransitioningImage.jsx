import React from 'react';
import "./TransitioningImage.css";

function TransitioningImage({ imageSrcA, imageSrcB, altTextA, altTextB, href}) {
  return (
        <div className="transitioning-image-container">
            <a href={"https://"+href} target="_blank"><img loading="lazy" src={imageSrcA} alt={altTextA} className="transitioning-image-a"/></a>
            <a href={"https://"+href} target="_blank"><img loading="lazy" src={imageSrcB} alt={altTextB} className="transitioning-image-b"/></a>
        </div>
  );
}

export default TransitioningImage;