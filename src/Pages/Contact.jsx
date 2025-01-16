import "./Contact.css";
import TransitioningImage from "./TransitioningImage";

import gmail from "../assets/contactImages/gmail.png";
import insta from "../assets/contactImages/insta.jpg";
import linkedin from "../assets/contactImages/linkedIn.png";
import slack from "../assets/contactImages/slack.png";

function Contact(){
    
    return(
        <div className="content" id="contact">
            <div className="content-box-container">
                <div className="content-box-holder">
                    <div className="content-box-row">
                        <div className="content-box" id="hidden-box"></div>
                        <div className="content-box">
                            <TransitioningImage imageSrcA={gmail} imageSrcB={slack} altTextA="a" altTextB="b" href="www.linkedin.com/in/valentin-flores-9233362a1"></TransitioningImage>
                        </div>
                        <div className="content-box" id="hidden-box"></div>
                    </div>
                    <div className="content-box-row">
                        <div className="content-box">
                            <TransitioningImage imageSrcA={insta} imageSrcB={gmail} altTextA="a" altTextB="b" href="www.linkedin.com/in/valentin-flores-9233362a1"></TransitioningImage>
                        </div>
                        <div className="content-box" id="hidden-box"></div>
                        <div className="content-box">
                            <TransitioningImage imageSrcA={linkedin} imageSrcB={insta} altTextA="a" altTextB="b" href="www.linkedin.com/in/valentin-flores-9233362a1"></TransitioningImage>
                        </div>
                    </div>
                    <div className="content-box-row">
                        <div className="content-box" id="hidden-box"></div>
                        <div className="content-box">
                        <TransitioningImage imageSrcA={slack} imageSrcB={linkedin} altTextA="a" altTextB="b" href="www.linkedin.com/in/valentin-flores-9233362a1"></TransitioningImage>
                        </div>
                        <div className="content-box" id="hidden-box"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;