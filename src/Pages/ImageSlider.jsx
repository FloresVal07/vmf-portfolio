import "./ImageSlider.css";
import { useState } from "react";

function App({slides}) {
  const [activeSlide, setActiveSlide] = useState(0);


  return (
    <section className="container">
      <div className="slider-wrapper">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === activeSlide ? "active" : ""}`}
            >
              {slide}
            </div>
          ))}
        </div>
        <div className="slider-nav">
          {slides.map((_, index) => (
            <button
              key={index}
              className={index === activeSlide ? "active" : ""}
              onClick={() => setActiveSlide(index)}
            >
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
