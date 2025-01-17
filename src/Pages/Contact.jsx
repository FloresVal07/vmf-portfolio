import "./Contact.css";
import TransitioningImage from "./TransitioningImage";

import gmail from "../assets/contactImages/gmail.png";
import insta from "../assets/contactImages/insta.jpg";
import linkedin from "../assets/contactImages/linkedIn.png";
import figma from "../assets/contactImages/figma.jpg";

function Contact(){
    
    return(
        <div className="content" id="contact">
            <div className="content-box-container">
                <div className="content-box-holder">
                    <div className="content-box-row">
                        <div className="content-box" id="hidden-box"></div>
                        <div className="content-box">
                            <TransitioningImage imageSrcA={gmail} altTextA="a" href=""></TransitioningImage>
                        </div>
                        <div className="content-box" id="hidden-box"></div>
                    </div>
                    <div className="content-box-row">
                        <div className="content-box">
                            <TransitioningImage imageSrcA={insta} altTextA="a" href="www.instagram.com/v.flores.07/?utm_source=ig_embed&amp;utm_campaign=loading"></TransitioningImage>
                        </div>
                        <div className="content-box" id="hidden-box"></div>
                        <div className="content-box">
                            <TransitioningImage imageSrcA={linkedin} altTextA="a" href="www.linkedin.com/in/valentin-flores-9233362a1"></TransitioningImage>
                        </div>
                    </div>
                    <div className="content-box-row">
                        <div className="content-box" id="hidden-box"></div>
                        <div className="content-box">
                        <TransitioningImage imageSrcA={figma} altTextA="a" href="www.figma.com/@valentinflores"></TransitioningImage>
                        </div>
                        <div className="content-box" id="hidden-box"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;