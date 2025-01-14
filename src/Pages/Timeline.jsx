import './Timeline.css';
import { useState } from 'react';

function Timeline() {

  const [selectedKey, setSelectedKey] = useState("Shiny Hunter");

  const handleOptionChange = (event) => {
    if (event.target.value !== "") {
      setSelectedKey(event.target.value);
    }
  };

  const map = new Map();

  map.set("El Pollo Loco Prep", { title: "El Pollo Loco", text1: "Between summer 2023 and the end of my senior year of High School I worked at a WKS Restaurant Group owned El Pollo Loco. (July 2023 - June 2024).", text2:"Here I prepared the side dishes, marinated the chicken, performed general cleaning, provided customer service, and maintained standards prompted by higher ups.", text3:"In doing so I developed my communication, time management, and team collaboration skills."});
  map.set("Shiny Hunter", { title: "Shiny Hunter Using ML", text1: "Over the course of around 2 months I endevoured to learn the newly emerged fields of machine intelligence.", text2:"To do this I trained a machine learning algorithm to identify sparkles when encounters digital mons.", text3:"To effectively carry this out I had to combine both deep knowledge hardware and software tools"});
  map.set("High School Graduation", { title: "High School Graduation", text1: "ASU is a university.", text2:"", text3:""});
  map.set("ASU Student", { title: "ASU Student", text1: "ASU is a university.", text2:"", text3:"" });
  map.set("Gwent Card Game", { title: "Gwent Card Game", text1: "ASU is a university.", text2:"", text3:"" });
  map.set("Chepes Grua Website", { title: "Chepes Grua Website", text1: "ASU is a university.", text2:"", text3:"" });

  const options = [
    { text: "", value:""},
    { text: "", value:""},
    { text: "", value:""},
    { text: "El Pollo Loco Prep", value: "El Pollo Loco Prep" },
    { text: "Shiny Hunter", value: "Shiny Hunter" },
    { text: "HS Graduation", value: "High School Graduation" },
    { text: "ASU Student", value: "ASU Student" },
    { text: "Gwent Card Game", value: "Gwent Card Game" },
    { text: "Chepes Grua Website", value: "Chepes Grua Website" },
    { text: "", value:""},
    { text: "", value:""},
    { text: "", value:""}
  ];
  
  return(
    <div className="timeline">
      <div className="timeline-header">
        <h1 className="timeline-header-text">{map.get(selectedKey).title}</h1>
      </div>
      <div className="timeline-body">
        <h1 className="timeline-body-text">{map.get(selectedKey).text1}</h1>
        <h1 className="timeline-body-text">{map.get(selectedKey).text2}</h1>
        <h1 className="timeline-body-text">{map.get(selectedKey).text3}</h1>
      </div>
      <div className="timeline-selection">
        <span className="timeline-selection-line"></span>
        <span className="timeline-selection-optionbox">
          {options.map((option) => (
              <span key={option.value} className="timeline-selection-option">
                <input
                  type="radio"
                  id={option.value}
                  name="timeline"
                  value={option.value}
                  className="radiobutton"
                  checked={selectedKey === option.value}
                  onChange={handleOptionChange}
                />
                <label htmlFor={option.value} className="timeline-selection-option-text">
                  {option.text}
                </label>
              </span>
            ))}
        </span>
      </div>
    </div>
  );
}

export default Timeline;
