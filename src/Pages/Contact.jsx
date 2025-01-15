import "./Contact.css";
import TransitioningImage from "./TransitioningImage";
import image1 from "../assets/carouselImages/contact.png";
import image2 from "../assets/carouselImages/manlookingintosky.jpg";

function Contact(){
    
    return(
        <div className="content" id="contact">
            <div className="content-box-container">
                <div className="content-box-holder">
                    <div className="content-box-row">
                        <div className="content-box" id="hidden-box"></div>
                        <div className="content-box">
                            <TransitioningImage imageSrcA={image1} imageSrcB={image2} altTextA="a" altTextB="b"></TransitioningImage>
                        </div>
                        <div className="content-box" id="hidden-box"></div>
                    </div>
                    <div className="content-box-row">
                        <div className="content-box">
                            <TransitioningImage imageSrcA={image2} imageSrcB={image1} altTextA="a" altTextB="b"></TransitioningImage>
                        </div>
                        <div className="content-box" id="hidden-box"></div>
                        <div className="content-box">
                            <TransitioningImage imageSrcA={image1} imageSrcB={image2} altTextA="a" altTextB="b"></TransitioningImage>
                        </div>
                    </div>
                    <div className="content-box-row">
                        <div className="content-box" id="hidden-box"></div>
                        <div className="content-box">
                        <TransitioningImage imageSrcA={image2} imageSrcB={image1} altTextA="a" altTextB="b"></TransitioningImage>
                        </div>
                        <div className="content-box" id="hidden-box"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;