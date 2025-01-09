import "./Carousel.css";
import car1 from "../assets/carouselImages/gwentImage.png";
import car2 from "../assets/carouselImages/contact.png";
import car3 from "../assets/carouselImages/hob1234.jpg";
import car4 from "../assets/carouselImages/manlookingintosky.jpg";
import car5 from "../assets/carouselImages/mesa.jpg";
import car6 from "../assets/carouselImages/shinyHuntingImage.png";
import car7 from "../assets/carouselImages/soccer.png";
import rightArrow from "../assets/rightArrow.svg";
import leftArrow from "../assets/leftArrow.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Carousel() {
  const cars = [
    { src: car1, link: "/" }, // Home
    { src: car2, link: "/about" }, // About
    { src: car3, link: "/contact" }, // Contact
    { src: car4, link: "/projects" }, // Projects
    { src: car5, link: "/" }, // Home
    { src: car6, link: "/about" }, // About
    { src: car7, link: "/projects" }, // Projects
  ];
  const [carsPos, setCarsPos] = useState(0);
  const navigate = useNavigate();

  const handleLeftClick = () => {
    setCarsPos((prevPos) => (prevPos - 1 + cars.length) % cars.length);
  };

  const handleRightClick = () => {
    setCarsPos((prevPos) => (prevPos + 1) % cars.length);
  };

  const handleImageClick = () => {
    navigate(cars[carsPos].link); // Navigate to the associated page
  };

  return (
    <div className="image-holder">
      <img
        className="car"
        id="car-left"
        src={cars[(carsPos - 1 + cars.length) % cars.length].src}
        alt="Previous car"
        onClick={handleLeftClick}
        style={{ zIndex: 0 }}
      />

      <img
        className="car-button"
        src={leftArrow}
        alt="leftButton"
        onClick={handleLeftClick}
        style={{ zIndex: 2 }}
      />

      <img
        className="car"
        id="car-middle"
        src={cars[carsPos].src}
        onClick={handleImageClick}
        alt="Current car"
        style={{ zIndex: 1 }}
      />

      <img
        className="car-button"
        src={rightArrow}
        alt="rightButton"
        onClick={handleRightClick}
        style={{ zIndex: 2 }}
      />

      <img
        className="car"
        id="car-right"
        src={cars[(carsPos + 1) % cars.length].src}
        alt="Next car"
        onClick={handleRightClick}
        style={{ zIndex: 0 }}
      />
    </div>
  );
}

export default Carousel;
