import "./Home.css";
import selfie from "../assets/selfie.jpg";
import Carousel from "./Carousel.jsx";

function Home(){
    return(
        <div className="content" id="home">
            <div className="topHalf">
                <div className="overview">
                    <h1 className="overview-title">Overview</h1>
                    <br/>
                    <hr className="overview-line"/>
                    <br/>
                    <p className="overview-text">Welcome to my personal website! To give you a basic run down, my name is Valentin Mateo Flores. 
                        I’m a current Computer Science freshman at the Ira Fulton College at Arizona State University.
                        I’m a proud Mexican and want to do everything in my power to learn and better the world. Be it
                        through innovation, guidance, or anything I can do. This website will document all my 
                        achievements and interests along the way.</p>
                    <br/>
                    <hr className="overview-line"/>
                    <br/>
                </div>
                <div className="overview-image-holder">
                    <img src={selfie} className="overview-image" alt="selfie image of Valentin"/>
                </div>
            </div>
            <Carousel/>
        </div>
        
    );
}

export default Home;