import "./About.css";
import MesaPic from "../assets/carouselImages/mesa.jpg";
import Hobbies from "../assets/carouselImages/hob1234.jpg";
import ManLooking from "../assets/carouselImages/manlookingintosky.jpg";

function About(){
    return(
        <div className="content" id="about">
            <div className="top">
                <div className="top-column" id="left-column">
                    <h1 className="column-title">Background</h1>
                    <img src={MesaPic} alt="Mesa" className="column-image"/>
                </div>
                <div className="top-column" id="middle-column">
                    <h1 className="column-title">Values/Goals</h1>
                    <img src={ManLooking} alt="Values" className="column-image"/>
                </div>
                <div className="top-column" id="right-column">
                    <h1 className="column-title">Hobbies</h1>
                    <img src={Hobbies} alt="Hobbies" className="column-image"/>
                </div>
            </div>
            <h1>Words</h1>
        </div>
    );
}

export default About;