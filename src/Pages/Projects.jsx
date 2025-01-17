import rightArr from "../assets/projectImages/shinyHunter.png";

import "./Projects.css";

function Projects(){

    const options = [
        { src: rightArr, 
        alt:"Image of the relay system of my shiny hunter", 
        value: "Shiny Hunter", 
        text1:"During my sophomore year of high school, I had become HOOKED on shiny hunting. In layman's terms, shiny hunting was a chance-based encounter for a sought-after special type of Pokemon. It’s similar to fishing or gambling, the wait and anticipation brew over until you FINALLY get a big win.",
        text2:"The Issue with this is it’s very time-consuming. I would spend hours a day encountering around 500 Pokemon a day with the odds being around 1/4096. Therefore, me being me I decided to find a way to keep myself productive while still enjoying what I love.",
        text3:"To begin finding a solution I defined the problem and its parameters. For one, I didn’t want aid, because I was already working as fast as the game could go. Moreover, I wanted it to be able to maximize its encounters per day but I wanted to catch the shiny myself so that I could still have the excitement of the final showdown. With these in mind, I settled on automation. ",
        text4:"After scouring the internet although many have done similar things mechanically with the 3DS or the Gameboy, nobody had done it for the Switch because of just how new it was. Because of this, I decided to tackle the project with a broken-down approach. I analyzed what I as a player was doing so that I would know what a computer should look for. And essentially the process can be broken down into 3 steps. Walking in the grass until the encounter happens, checking if the Pokemon is shiny,  and finally either returning to step one or catching the pokemon.",
        text5:"Now with that out of the way, I knew that I’d need to use computer vision. This is because, let’s face it, a 15-year-old with no job doesn’t have $60 to shell out for an Elgato or a capture cam. This led me to learn the basics of Python’s OpenCV library and its TensorFlow Machine Learning library. Over the course of about 2 weeks, I did extensive tutorials, read the APIs, got scolded by people much more knowledgeable than me online, and just generally played around until I could comfortably use these two libraries. Eventually, I was able to read input from a webcam, capture still frames, mask over the frames, and be able to actually garner useful information from these frames. Things like being able to detect faces, animals, color content, and being able to apply logic using these values of certainty or color portion.",
        text6:"Here is where the problems start. How do you interact with the Nintendo Switch digitally if it’s controlled with analog sticks? I honestly had no clue. I had no idea how controllers worked aside from replacing a trigger or a sticky button from time to time. So back to the exploring phase, again. Without much to start on I went out and bought faulty joy-cons (at this time they lasted a maximum of 8 months before drifting so they were pretty cheap $20 if you were smart about it). With not much at risk, I opened them up and learned how they worked because eventually everything can be boiled down to a simple mechanic. What was interesting was that these buttons were VERY simple, they essentially were two contacts that came together with a metallic strip at the top of the button. This made my job a whole lot easier, all I had to do was connect both of these sides to relays which WERE digital and that I could control.",
        text7:"Now with all that solved, the rest was easy because I have a strong background in programming and designing. For the first step, I needed a reliable way to move from walking to finding. This was a little tricky because encounters were random. You could find a Pokemon anywhere from 1 step to 19 steps of walking. But what WAS common was that the screen would start flashing white. Applying this knowledge it was easy to write an algorithm that repeated until this white flash was captured whence it would end and move into the next step.",
        text8:"Now for identifying shiny Pokemon, you can do this by capturing the frames where the Pokemon is first seen. This is because every Pokemon has different shinies and to train for every one of these compared to it’s own normal variant would be time-wasting. Instead, you could look at the sparkles they give off because this is a constant. Now, I would say this wasn’t really difficult rather is was tedious. How do you train on data you don’t even have? Unfortunately, you have to find that data, not only find it but also verify your solution because there are some differences like the difference between a digital image and a real-life captured frame. So this is how I spent an unfortunate amount of time. I would go on YouTube and with videos of fellow Shiny Hunter’s successes I was able to record clips, break these clips into individual images, scale the images to a uniform size, and finally group them into training and testing data. Finally, after a good bit of hard work, I tried these on YouTube clips AND it failed.",
        text9:"The issue was in real life, the switch’s screen has reflection, color distortion with the webcam, and brightness difference. And to solve this I 3d printed an enclosure so that it could be completely covered as well as I limited the webcam’s crop ratio so that it’s less likely to fail. With this, I had to resize and retrain my data. But in the end, it finally WORKED!",
        text10:"The final step in the process was to put it all together and put it to the test. Given that it could run an entire iteration in around 40 seconds, I estimated that I’d have to wait about 45 hours because it can make about 90 encounters an hour. So for the next two days, I left for school and just enjoyed life while my shiny hunter went off with no breaks. And on the 60th hour, I finally came back to it’s first success! And like that, I finished my 2 months long endeavor to finally leave this hobby behind.",
        text11:"After having gone through this experience, I believe I grew as an engineer. I learned that solutions should be made according to a problem not according to what you already know. In doing this, you grow your knowledge and your problem-solving skills. But more importantly, you gain confidence in the realm of abstraction. A realm where we can find new solutions or make new tools to better the world."
        }, 
        { src: rightArr, 
        alt:"Image of the relay system of my shiny hunter", 
        value: "Shiny Hunter", 
        text1:"Awjkdawda a kdnawjdajdb ajdbawdk kjawndj jsdn hsdabwd sdhbcndksn ",
        text2:"",
        text3:"",
        text4:"",
        text5:"",
        text6:"",
        text7:"",
        text8:"",
        text9:"The issue was in real life, the switch’s screen has reflection, color distortion with the webcam, and brightness difference. And to solve this I 3d printed an enclosure so that it could be completely covered as well as I limited the webcam’s crop ratio so that it’s less likely to fail. With this, I had to resize and retrain my data. But in the end, it finally WORKED!",
        text10:"",
        text11:""
        },
        { src: rightArr, 
        alt:"Image of the relay system of my shiny hunter", 
        value: "Shiny Hunter", 
        text1:"Awjkdawda a kdnawjdajdb ajdbawdk kjawndj jsdn hsdabwd sdhbcndksn ",
        text2:"",
        text3:"",
        text4:"",
        text5:"",
        text6:"",
        text7:"",
        text8:"",
        text9:"The issue was in real life, the switch’s screen has reflection, color distortion with the webcam, and brightness difference. And to solve this I 3d printed an enclosure so that it could be completely covered as well as I limited the webcam’s crop ratio so that it’s less likely to fail. With this, I had to resize and retrain my data. But in the end, it finally WORKED!",
        text10:"",
        text11:""
        }, 
        { src: rightArr, 
        alt:"Image of the relay system of my shiny hunter", 
        value: "Shiny Hunter", 
        text1:"Awjkdawda a kdnawjdajdb ajdbawdk kjawndj jsdn hsdabwd sdhbcndksn ",
        text2:"",
        text3:"",
        text4:"",
        text5:"",
        text6:"",
        text7:"",
        text8:"",
        text9:"The issue was in real life, the switch’s screen has reflection, color distortion with the webcam, and brightness difference. And to solve this I 3d printed an enclosure so that it could be completely covered as well as I limited the webcam’s crop ratio so that it’s less likely to fail. With this, I had to resize and retrain my data. But in the end, it finally WORKED!",
        text10:"",
        text11:""
        },
        {src: rightArr, 
        alt:"Image of the relay system of my shiny hunter", 
        value: "Shiny Hunter", 
        text1:"Awjkdawda a kdnawjdajdb ajdbawdk kjawndj jsdn hsdabwd sdhbcndksn ",
        text2:"",
        text3:"",
        text4:"",
        text5:"",
        text6:"",
        text7:"",
        text8:"",
        text9:"The issue was in real life, the switch’s screen has reflection, color distortion with the webcam, and brightness difference. And to solve this I 3d printed an enclosure so that it could be completely covered as well as I limited the webcam’s crop ratio so that it’s less likely to fail. With this, I had to resize and retrain my data. But in the end, it finally WORKED!",
        text10:"",
        text11:""
        }, 
        { src: rightArr, 
        alt:"Image of the relay system of my shiny hunter", 
        value: "Shiny Hunter", 
        text1:"Awjkdawda a kdnawjdajdb ajdbawdk kjawndj jsdn hsdabwd sdhbcndksn ",
        text2:"",
        text3:"",
        text4:"",
        text5:"",
        text6:"",
        text7:"",
        text8:"",
        text9:"The issue was in real life, the switch’s screen has reflection, color distortion with the webcam, and brightness difference. And to solve this I 3d printed an enclosure so that it could be completely covered as well as I limited the webcam’s crop ratio so that it’s less likely to fail. With this, I had to resize and retrain my data. But in the end, it finally WORKED!",
        text10:"",
        text11:""
        },
        { src: rightArr, 
        alt:"Image of the relay system of my shiny hunter", 
        value: "Shiny Hunter", 
        text1:"Awjkdawda a kdnawjdajdb ajdbawdk kjawndj jsdn hsdabwd sdhbcndksn ",
        text2:"",
        text3:"",
        text4:"",
        text5:"",
        text6:"",
        text7:"",
        text8:"",
        text9:"The issue was in real life, the switch’s screen has reflection, color distortion with the webcam, and brightness difference. So to solve this I 3d printed an enclosure so that it could be completely covered as well as I limited the webcam’s crop ratio so that it’s less likely to fail. With this, I had to resize and retrain my data. But in the end, it finally WORKED!",
        text10:"",
        text11:""
        }
    ];

    return(
        <div className="content" id="projects">
            <div className="project-listitems">
                {options.map((option) => (
                    <div key={option.value} className="project-listitem-container">
                        <img src={option.src} className="project-listitem-image" alt={option.alt}/>
                        <div className="project-listitem-text-container">
                            <h1 className="project-listitem-text">{option.text1}</h1>
                            <br/>
                            <h1 className="project-listitem-text">{option.text2}</h1>
                            <br/>
                            <h1 className="project-listitem-text">{option.text3}</h1>
                            <br/>
                            <h1 className="project-listitem-text">{option.text4}</h1>
                            <br/>
                            <h1 className="project-listitem-text">{option.text5}</h1>
                            <br/>
                            <h1 className="project-listitem-text">{option.text6}</h1>
                            <br/>
                            <h1 className="project-listitem-text">{option.text7}</h1>
                            <br/>
                            <h1 className="project-listitem-text">{option.text8}</h1>
                            <br/>
                            <h1 className="project-listitem-text">{option.text9}</h1>
                            <br/>
                            <h1 className="project-listitem-text">{option.text10}</h1>
                            <br/>
                            <h1 className="project-listitem-text">{option.text11}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;