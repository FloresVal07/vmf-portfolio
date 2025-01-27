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
  map.set("Chepes Grua Website", { title: "Chepes Grua Website", text1: "After completing the Gwent Card Game project, my inability to develop a nice-looking UI was blatantly obvious to me.", text2:"Therefore, to grow as a developer I embarked on a brief front-end journey. During this, I learned many important industry standards, practices, the history of the web, and how to develop accordingly", text3:"By the end of this, I learned just how little I know about the field, just how much impact I can make when I apply my technological expertise to my real-world life, and finally the importance of making a finished and polished-looking project."});
  map.set("Gwent Card Game", { title: "Gwent Card Game", text1: "In according with my desire to learn technologies outside of class I learned JavaFX and Scenebuilder in Java to develop a card game.", text2:"This took several months of the engineering design process where many problems were found, and solved, and ultimately I learned many important lessons on the way.", text3:"After completing this project, I got closer to the lower level programming in learning how the OS works, learning how binary works, learning important data structures and algorithms, etc. On a personal level, this project strengthened my discipline by having a consistent development schedule as well as fed into my passion for Software and technologies."});
  map.set("ASU Student", { title: "ASU Student", text1: "On August 27th 2024, I finally moved into my dorm here at Century Hall on the ASU Polytechnic campus and in doing so began my career in Computer Science.", text2:"While completing my degree, I plan on exploring external tools and concepts so that I can make an impact immediately upon graduation.", text3:"But I’m also excited about making new friends with people that come from different marginalities than me. I’m already involved in the Hacker Devils club as well as the SoDA club. However, I look forward to more hobbyist clubs like an intramural or social club."});
  map.set("High School Graduation", { title: "High School Graduation", text1: "On May 22nd 2024, After 4 years of heavy workload including AP classes, college courses, and Computer Science classes I graduated 5th out of my 732 student large class.", text2:"I graduated from Mesa High School with a passing score on my Spanish bi-literacy test. Being one in a long line of Mesa High graduates in my family.", text3:"Overall High School taught me due diligence, collaboration, social skills, and self-awareness."});
  map.set("Shiny Hunter", { title: "Shiny Hunter Using ML", text1: "Over the course of around 2 months I endevoured to learn the newly emerged fields of machine intelligence.", text2:"To do this I trained a machine learning algorithm to identify sparkles when encounters digital mons.", text3:"To effectively carry this out I had to combine both deep knowledge of hardware and software tools"});
  map.set("El Pollo Loco Prep", { title: "El Pollo Loco", text1: "Between summer 2023 and the end of my senior year of High School I worked at a WKS Restaurant Group owned El Pollo Loco. (July 2023 - June 2024).", text2:"Here I prepared the side dishes, marinated the chicken, performed general cleaning, provided customer service, and maintained standards prompted by higher ups.", text3:"In doing so I developed my communication, time management, and team collaboration skills."});
  
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
