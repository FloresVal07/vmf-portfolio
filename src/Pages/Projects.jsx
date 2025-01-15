import rightArr from "../assets/projectImages/shinyHunter.png";

import "./Project.css";

function Projects(){

    const options = [
        { src: rightArr, 
        alt:"Image of the relay system of my shiny hunter", 
        value: "Shiny Hunter", 
        text1:"Awjkdawda a kdnawjdajdb ajdbawdk kjawndj jsdn hsdabwd sdhbcndksn "
        }, 
        { src: rightArr, 
        alt:"Image of the relay system of my shiny hunter", 
        value: "Shiny Hunter", 
        text1:"Awjkdawda a kdnawjdajdb ajdbawdk kjawndj jsdn hsdabwd sdhbcndksn "
        },
        { src: rightArr, 
        alt:"Image of the relay system of my shiny hunter", 
        value: "Shiny Hunter", 
        text1:"Awjkdawda a kdnawjdajdb ajdbawdk kjawndj jsdn hsdabwd sdhbcndksn "
        },
        { src: rightArr, 
        alt:"Image of the relay system of my shiny hunter", 
        value: "Shiny Hunter", 
        text1:"Awjkdawda a kdnawjdajdb ajdbawdk kjawndj jsdn hsdabwd sdhbcndksn "
        }
    ];

    return(
        <div className="content">
            <div className="project-listitems">
                {options.map((option) => (
                    <div key={option.value} className="project-listitem-container">
                        <img src={option.src} className="project-listitem-image" alt={option.alt}/>
                        <div className="project-listitem-text-container">
                            <h1 className="project-listitem-text">{option.text1}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;