import React from "react";
import { Parallax } from "react-parallax";
import aboutus from "../../assets/demoPhotos/aboutus.jpg";
import ashvamedhalogo from "../../assets/demoPhotos/ashvamedhaLogo.png";
import "./AboutUs.scss";
import athletes from "../../assets/demoPhotos/athletes.jpg";

function AboutUs() {
<<<<<<< HEAD
  return (
    <div className="AboutUs">
      <Parallax bgImage={aboutus} strength={500}>
        <div className="content">
          <div className="title">
            <h1>
              <span className="title1">ABOUT </span>
              <span className="title2"> US</span>
            </h1>
          </div>
          <div className="main-body">
            <div className="description">
              <p className="para">
                Welcome to Asvamedha, IIT Bhubaneswar's annual sports fest. We
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
                celebration. Let's come together to make Asvamedha 2023 an
                unforgettable experience.
              </p>
            </div>
            <div style={{ height: "60vh" }} />
          </div>
          <div className="ath">
            <img src={ashvamedhalogo} alt="atheletes-image" />
          </div>
        </div>
      </Parallax>
    </div>
  );
=======
    return (
        <div className="AboutUs">
            <Parallax bgImage={aboutus} strength={500}>
                <div className="content">
                    <div className="title">
                        <h1>
                            <span className="title1">ABOUT </span>
                            <span className="title2"> US</span>
                        </h1>
                    </div>
                    <div className="main-body">
                        <div className="description">
                            <p className="para">
                                Welcome to Asvamedha, IIT Bhubaneswar's annual
                                sports fest. We are passionate about sports and
                                dedicated to promoting a culture of fitness,
                                competition, and camaraderie among the youth.
                            </p>
                            <p className="para">
                                Our fest offers a wide range of sports and
                                activities for participants of all skill levels.
                                Whether you are a seasoned athlete or just
                                looking for some fun, Asvamedha has something
                                for everyone.
                            </p>
                            <p className="para">
                                Join us for a week of excitement, sportsmanship,
                                and celebration. Let's come together to make
                                Asvamedha 2023 an unforgettable experience.
                            </p>
                        </div>
                        <div style={{ height: "60vh" }} />
                    </div>

                    <div className="ath">
                        <img src={athletes} alt="atheletes-image" />
                    </div>
                </div>
            </Parallax>
        </div>
    );
>>>>>>> 08d5fb0230467480f9c4d0e7b59caacd173f39d0
}

export default AboutUs;
