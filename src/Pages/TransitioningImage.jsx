import React from 'react';
import "./TransitioningImage.css";

function TransitioningImage({ imageSrcA, imageSrcB, altTextA, altTextB, href}) {
  return (
        <div className="transitioning-image-container">
          <img loading="lazy" src={imageSrcA} alt={altTextA} className="transitioning-image-a" />
          {href ? (
            <a href={"https://" + href} target="_blank" rel="noopener noreferrer">
              <img loading="lazy" src={imageSrcB} alt={altTextB} className="transitioning-image-b" />
            </a>
          ) : (
            <a href="mailto:recipient@example.com?subject=Hello&body=How are you?">
              <img loading="lazy" src={imageSrcB} alt={altTextB} className="transitioning-image-b" />
            </a>
          )}
        </div>
  );
}

export default TransitioningImage;