import "./About.css";
import MesaPic from "../assets/carouselImages/mesa.jpg";
import Hobbies from "../assets/carouselImages/hob1234.jpg";
import ManLooking from "../assets/carouselImages/manlookingintosky.jpg";
import Column from "./Column.jsx";

function About(){
    const body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return(
        <div className="content" id="about">
            <div className="top">
                <Column title="Background" body={body} id="left-column" alt="Mesa" src={MesaPic}/>
                <Column title="Values/Goals" body={body} id="middle-column" alt="Values" src={ManLooking}/>
                <Column title="Hobbies" body={body} id="right-column" alt="Hobbies" src={Hobbies}/>
            </div>
            <div className="bottom">
                <h1>HECK</h1>
                <h1>HECK</h1>
                <h1>HECK</h1>
                <h1>HECK</h1>
            </div>
        </div>
    );
}

export default About;