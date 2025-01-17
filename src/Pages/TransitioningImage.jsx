import React from 'react';
import "./TransitioningImage.css";

function TransitioningImage({ imageSrcA, altTextA, href}) {
  return (
        <div className="transitioning-image-container">
          {href ? (
            <a href={"https://" + href} target="_blank" rel="noopener noreferrer">
              <img src={imageSrcA} alt={altTextA} className="transitioning-image-a" />
            </a>
          ) : (
            <a href="mailto:recipient@example.com?subject=Hello&body=How are you?">
              <img src={imageSrcA} alt={altTextA} className="transitioning-image-a" />
            </a>
          )}
        </div>
  );
}

export default TransitioningImage;