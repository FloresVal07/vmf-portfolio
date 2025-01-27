import "./Projects.css";
import ImageSlider from "./ImageSlider.jsx";

//Shiny Hunter Assets
import firstEver from "../assets/projectImages/shinyHunter/firstEver.jpg";
import hobby from "../assets/projectImages/shinyHunter/hobby.jpg";
import controllers from "../assets/projectImages/shinyHunter/controllers.jpg";
import shinyHunter from "../assets/projectImages/shinyHunter/shinyHunter.png";
import container from "../assets/projectImages/shinyHunter/unnamed.jpg";
import success from "../assets/projectImages/shinyHunter/success.jpg";
import working from "../assets/projectImages/shinyHunter/working.mp4";


//Gwent Card Game Assets
import card from "../assets/projectImages/gwentCardGame/card.png";
import deck from "../assets/projectImages/gwentCardGame/deck.png";
import scenebuilder from "../assets/projectImages/gwentCardGame/scenebuilder.png";
import choose from "../assets/projectImages/gwentCardGame/choose.png";
import board from "../assets/projectImages/gwentCardGame/board.png";
import game from "../assets/projectImages/gwentCardGame/game.png";
import gwentvideo from "../assets/projectImages/gwentCardGame/gwentVideo.mp4";
import construction from "../assets/constructionImage.png";

//chepes grua assets
import englishProject from "../assets/projectImages/chepesGrua/englishProject.png";
import webResearch from "../assets/projectImages/chepesGrua/webResearch.png";
import figmaDesign from "../assets/projectImages/chepesGrua/figmaDesign.png";
import jsxFiles from "../assets/projectImages/chepesGrua/jsxFiles.png";
import viteCmds from "../assets/projectImages/chepesGrua/viteCmds.png";
import websitePic from "../assets/projectImages/chepesGrua/websitePic.png";
import analytics from "../assets/projectImages/chepesGrua/analytics.png";

function Projects(){

    const shinyHunterAssets = [
        <img src={firstEver} alt="First Ever" />,
        <img src={hobby} alt="Hobby" />,
        <img src={controllers} alt="Controllers" />,
        <img src={shinyHunter} alt="Shiny Hunter" />,
        <img src={container} alt="Container" />,
        <img src={success} alt="Success" />,
        <video controls>
          <source src={working} type="video/mp4" alt="video of the shiny hunter working"/>
          Your browser does not support the video tag.
        </video>,
      ];

    const gwentAssets = [
        <img src={card} alt="First Ever" />,
        <img src={deck} alt="Hobby" />,
        <img src={scenebuilder} alt="Controllers" />,
        <img src={choose} alt="Shiny Hunter" />,
        <img src={board} alt="Container" />,
        <img src={game} alt="Success" />,
        <video controls>
          <source src={gwentvideo} type="video/mp4" alt="video of the shiny hunter working"/>
          Your browser does not support the video tag.
        </video>,
    ];

    const chepesAssets = [
        <img src={englishProject} alt="English Project" />,
        <img src={webResearch} alt="English Website Research" />,
        <img src={figmaDesign} alt="Figma Design" />,
        <img src={jsxFiles} alt="Some JSX Files Of The Chepes React Project" />,
        <img src={viteCmds} alt="The build command for the website" />,
        <img src={websitePic} alt="The Website Itself" />,
        <img src={analytics} alt="The Website analytics after it has matured" />
    ]
    const constructionAssets = [
        <img src = {construction} alt = "Construction Image"/>
    ];

    const options = [
        { slides: shinyHunterAssets, 
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
        { slides: gwentAssets, 
        value: "Gwent Card Game", 
        text1:"During the first couple months of university I was struggling in my CSE205 class. The issue was that I had learnt java all the way back in junior high. Although I did have experience with the fundamentals of java I had no real clue how to create anything of value with it. So instead of trudging through and struggling with the minute details I decided to work on something I’d be proud of.",
        text2:"After thorough consideration, I settled on making a card game with a GUI and completely custom backend. This was because in this way I could practice concepts like Polymorphism and Data Structures through displaying cards, storing cards in efficient structures, and data manipulation using GUI input.",
        text3:"Before I explain the process I have to dive into the game itself. Essentially, the game is a best out of 3 rounds where players take turns placing cards onto 3 different rows. At the end of each round the rows are tallied up and whoever has the most amount of winning rows wins. However, cards have special effects that can reduce, enhance, destroy, etc… as well as leaders that have further abilities that can impact the game.",
        text4:"Now then, I started off by creating the cards themselves. As stated previously, I wanted to practice concepts integral to object oriented programming. Therefore, I created the general card class with special card types in mind which was redundant for some cards but essential for others. I then practiced manipulating the cards using the console as input to make sure everything was in order. Finally, there needs to be a class for the player because data such as deck type, name, and cards in hand need to be stored.",
        text5:"With the base done I was able to move on into the GUI part. To do this I decided on JavaFX because I had heard of a framework that was simple to learn, powerful, and easy to interact with using Java, SceneBuilder. Using scene builder I created the start up pages that asked for information such as a player name, deck type, and leader card. From there I would style using CSS and just general spacing.",
        text6:"The hardest part during this I’d say was working around the fact that scenebuilder object’s had to be predefined. This meant, I’d have to have a set amount of card displaying objects no matter what, which was a simple yet inefficient work around. Another small problem was transitioning because all the logic was performed on the same class as the class that managed each individual scene in scene builder.",
        text7:"Although each individual scene was quite simple, the page where cards were chosen was the most difficult. This was because each array HAD to be 20 cards but there was a restricted amount of each cards. Even so, using event clickers and simple writing/rewriting of selected cards interacted with in scenebuilder I managed to safely manage a chosen amount of cards in the card selection page.",
        text8:"Finally, the actual game itself. The game logic was held on the board. And to effectively render cards on each row there had to be array lists of both cards on each row and card gui representations. Using this, rows could be tallied up against each other and displayed in the correct order using information from the card lists of each row. This was relatively easy to implement and the effects were too, bar some minor planning beforehand.",
        text9:"And like that the Gwent Card Game was finished in pretty good time, it ran from August 17th to around October 1st. During this, I learned how to use JavaFX with SceneBuilder, was up to date with my Java knowledge, and learned file navigation in terms of dependencies, absolute, and relative pathing.",
        text10:"",
        text11:""
        },
        { slides: chepesAssets, 
            value: "Chepes Grua Website", 
            text1:"For the entire time I’ve been a developer or learning syntaxes to develop I’ve always heard terms such as front-end, back-end, React, Node, APIs, SQL, and things of the like being thrown around. Although I knew each related to web development or web apps I never quite understood exactly what they were. What’s more, my dad had just started his own tow trucking company and since I’m more of a scholar than handyman I decided to help in my way, by making him a website.",
            text2:"Accordingly, around the time I finished my Gwent Card Game, I decided to finally consecrate some answers to these notions. And me being me, what better way to learn than to build!",
            text3:"However, as a rule of thumb, I do design before any building. Funnily enough around the time that these ideas were running through my mind, we were assigned a project to research and write a paper on as well as a simple webpage on Google Sites on any topic we’d like. Therefore, with explicit and achievable goals I set sail. I learned everything from old technologies such as Apache server hosting to new ones such as the annoying reasons we have to use Javascript in our day-to-day.",
            text4:"With this newly acquired knowledge, I settled on learning a framework that would be simple to learn and relatively powerful. My choice, of course, was the React Js framework using the Vite build tool (because the 4-hour-long YouTube tutorial said so). This was because I specialize in backend development so my mind instantly goes towards concepts such as functions or classes. What’s cool about React is that it’s very modular meaning pages are comprised of several smaller pages made in React. A home page could be a header page, content page, and footer page instead for example. This helps my brain MASSIVELY because, if you’ve read the other projects, I always try to break bigger problems into smaller more manageable ones. ",
            text5:"Now that I had some familiarity with the tools and their capabilities I had to learn even more (I know, it’s exhausting, but I LOVE this journey type of life). What I mean by this is that front-end developers usually design before coding their web pages. They use tools such as Figma, Photoshop, etc to make appealing, polished, and professional websites. The tool I decided to learn was Figma, mostly because the icon looked cool to me. I’m joking, I chose this one because it’s an industry standard that works similarly to GitHub in that I could take inspiration or guidance from the community.",
            text6:"With all the learning done and the new tools learned, I began designing. I created the basic template in figma which was maybe the most tedious thing. I felt as though I were a NASCAR driver in traffic. Even so, I eventually finished and with all the practice I had done in React on smaller webpages I had become familiar enough to actualize my ideas.",
            text7:"And since I wanted to do something fast and cheap I decided to use CloudFlare’s free website hosting service because having it displayed on search engines made the site feel just that extra amount of special.",
            text8:"",
            text9:"Google Site Link: https://sites.google.com/view/web-development-simplified/home (For those who are curious)",
            text10:"",
            text11:""
        },
        //TO DO: ADD THE IMAGES TO GO WITH CHEPES WEBSITE
        //TO DO: Fix visual bug with navbar on iphones (update z index)
        { slides: constructionAssets, 
        value: "To Be Determined", 
        text1:"",
        text2:"",
        text3:"",
        text4:"I'm still YOUNG I have much to do and look forward to becoming more involved and creative in my Software Engineering journey",
        text5:"",
        text6:"",
        text7:"",
        text8:"",
        text9:"",
        text10:"",
        text11:""
        }
    ];

    return(
        <div className="content" id="projects">
            <div className="project-listitems">
                {options.map((option) => (
                    <div key={option.value} className="project-listitem-container">
                        <ImageSlider slides={option.slides}></ImageSlider>
                        <div className="project-listitem-text-container">
                            <h1 className="project-listitem-title">{option.value}</h1>
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