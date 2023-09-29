<<<<<<< HEAD
import "./AboutUs.scss";

import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import CounterUp from "../CounterUp/CounterUp";
import { Parallax } from "react-parallax";
import React from "react";
import aboutus from "../../assets/demoPhotos/aboutus.jpg";
import ashvamedha from "../../assets/demoPhotos/ashvamedhaLogo.png";
import college from "../../assets/demoPhotos/3.png";
import event from "../../assets/demoPhotos/2.png";
import footfall from "../../assets/demoPhotos/1.png";
import iitbbs from "../../assets/demoPhotos/iitbbsLogo.png";
import sportCouncil from "../../assets/demoPhotos/sportCouncil.png";
import tshirt from "../../assets/demoPhotos/tshirtdummyphoto.webp";

=======
import React from "react";
import { Parallax } from "react-parallax";
//import aboutus from "../../assets/demoPhotos/aboutus.jpg";
import aboutus from "../../assets/demoPhotos/bgimage.jpg";
import ashvamedhalogo from "../../assets/demoPhotos/ashvamedhaLogo.png";
import iitbbslogo from "../../assets/demoPhotos/iitbbsLogo.png"
import sportsCouncilLogo from "../../assets/demoPhotos/sportCouncil.png"
import tshirt from "../../assets/demoPhotos/tshirtdummyphoto.webp"
import "./AboutUs.scss";

>>>>>>> 0bb15bad2787975dccdb2f716412c207792f14c8
function AboutUs() {
  const handleRedirect = (platform) => {
    let url;

    switch (platform) {
      case 1:
        // Instagram
        url = "https://www.instagram.com/ashvamedha_iitbbs/";
        break;
      case 2:
        // Facebook
        url = "https://www.facebook.com/AshvamedhaIITBBS/";
        break;
      case 3:
        // LinkedIn
        url =
          "https://www.linkedin.com/company/ashvamedha-iit-bhubaneswar/mycompany/";
        break;
      default:
        // Default action if platform parameter is not recognized
        return;
    }

    window.open(url, "_blank"); // Open the URL in a new tab
  };
  return (
    <div className="AboutUs">
      <Parallax bgImage={aboutus} strength={500}>
        <div className="content-about">
          <div className="title">
            <h1>
              <span className="title1">ABOUT </span>
              <span className="title2"> US</span>
            </h1>
          </div>
          <div className="logos">
            <img src={sportCouncil} alt="" />
            <img src={iitbbs} alt="" />
            <img src={ashvamedha} alt="" />
          </div>
          <div className="main-body">
          <div className="logos">
            <img src={iitbbslogo} alt="IIT Bhubaneswar" className="logo" />
            <img src={ashvamedhalogo} alt="Asvamedha" className="logo" />
            <img src={sportsCouncilLogo} alt="Sports Council" className="logo" />
          </div>
            <div className="description">
              <p className="para">
                Welcome to Ashvamedha, IIT Bhubaneswar's annual sports fest. We
                are passionate about sports and dedicated to promoting a culture
                of fitness, competition, and camaraderie among the youth.
              </p>
              <p className="para">
                Our fest offers a wide range of sports and activities for
                participants of all skill levels. Whether you are a seasoned
                athlete or just looking for some fun, Asvamedha has something
                for everyone.
              </p>
              <p className="para">
                Join us for a week of excitement, sportsmanship, and
                celebration. Let's come together to make Ashvamedha 2023 an
                unforgettable experience.
              </p>
              <div className="social-media">
                <div className="icons" onClick={() => handleRedirect(1)}>
                  <AiOutlineInstagram />
                </div>
                <div className="icons" onClick={() => handleRedirect(2)}>
                  <FaFacebookF />
                </div>
                <div className="icons" onClick={() => handleRedirect(3)}>
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
            <div className="count">
              <div className="item">
                <CounterUp content="Footfall" number="2000" image={footfall} />
              </div>
              <div className="item">
                <CounterUp content="Colleges" number="10" image={college} />
              </div>
              <div className="item">
                <CounterUp content="Events" number="10" image={event} />
              </div>
            </div>
          </div>
        </div>
        <div className="ath">
            <img src={tshirt} alt="tshirt" />
        </div>
      </Parallax>
    </div>
  );
}

export default AboutUs;

