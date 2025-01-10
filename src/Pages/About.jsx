import "./About.css";

function About(){
    return(
        <div className="content" id="about">
            <div className="top-column" id="left-column">
                <h1 className="column-title">Background</h1>
            </div>
            <div className="top-column" id="middle-column">
                <h1 className="column-title">My Values And Goals</h1>
            </div>
            <div className="top-column" id="right-column">
                <h1 className="column-title">Hobbies</h1>
            </div>
        </div>
    );
}

export default About;