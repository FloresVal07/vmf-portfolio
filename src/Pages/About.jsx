import "./About.css";
import MesaPic from "../assets/carouselImages/mesa.jpg";
import Hobbies from "../assets/carouselImages/hob1234.jpg";
import ManLooking from "../assets/carouselImages/manlookingintosky.jpg";
import Column from "./Column.jsx";
import Timeline from "./Timeline.jsx";
function About(){
    const body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const backgroundText = "Hey! As you well know, I’m Hispanic, and aside from really good cuisine, the ethnicity entails much more. With it It brings hard work, it brings joy, it brings discipline, it brings family gatherings every weekend with no exceptions. But most of all, it brings positive influences that have shaped me into the man I am today. The way my mom would show me through her actions of graduating college with 3 children and 2 newborns and succeeding in her field that anything is possible. Or in the ways my dad has prepared me my whole life to be strong because he won’t always be here. But it also meant being the black sheep. In a culture as conservative and traditional as the Hispanic one, it’s been difficult to aspire to contribute to this world with not my hands but my head instead. In school, there were times when I wished to just have one compa I could have study nights or make projects with. Rather, I've learned to manage on my own, to be able to connect with people who might not know what I’m saying in my native tongue. I’ve learned when it’s time to have confidence in myself and my actions. And as a result of my tough childhood, my adulthood is looking promising. With many achievements and many to come, I thank you for taking the time to recognize them.";
    const valuesGoalsText = "For me, values have to be strong. You have to be willing to stick to them not only during the best times but also during the worst. Otherwise, they’d just be vague notions you cling to that can easily be warped. Therefore, I choose to believe in being kind, loyal, authentic, and a hard worker. In the same vein, I want to work hard in my own life, enough so that I can help other people. I’d help just about anybody with anything, a coworker with a project, a community with donations, a person in need with help, just anyway because I feel that if we all cared a little more we’d understand each other better. Even so, I have some personal goals in advancing the field of software development. I want to be a part of something that I can call my own. An app or tool that can help bring us closer to a better world.";
    const hobbiesText = "I like to be active so I love playing sports, going to the gym, and going for walks with my 3 adorable dogs. On a similar note, I like being able to attend sporting events with friends and connecting with people from similar clubs like F.C. Barcelona and Manchester City F.C. But in general, I love to learn. I love learning about new things that I can use or understand because it allows me to appreciate this world even more. For example, I usually decide on a problem I’d like to tackle and learn everything I need to solve it. In the past, this has led to my hardware knowledge improving but most often I’ve taken on software endeavors. But I also like learning about philosophy, instruments, cars, science, etc. Because this world is rich and I’d love to see it and learn it all!";
    return(
        <div className="content" id="about">
            <div className="top">
                <Column title="Background" body={backgroundText} id="left-column" alt="Mesa" src={MesaPic}/>
                <Column title="Values/Goals" body={valuesGoalsText} id="middle-column" alt="Values" src={ManLooking}/>
                <Column title="Hobbies" body={hobbiesText} id="right-column" alt="Hobbies" src={Hobbies}/>
            </div>
            <div className="bottom">
                <Timeline/>
            </div>
        </div>
    );
}

export default About;