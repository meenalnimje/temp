import "./AboutUs.scss";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import React, { useEffect, useState } from "react";

import { AiOutlineInstagram } from "react-icons/ai";
import CounterUpPage from "./CounterUpPage";
import { Parallax } from "react-parallax";
import axios from "axios";

function AboutUs() {
  const [bg, setBg] = useState("");
  const [logos, setLogos] = useState([]);
  async function fetchBgImages() {
    const response = await axios.post(
      "https://ashvamedha.onrender.com/upload/",
      {
        folderName: "bgImg",
      }
    );
    // setBg(response.data.result);
    setBg(response?.data?.result[0]?.image?.url);
  }
  async function fetchLogoImages() {
    const response = await axios.post(
      "https://ashvamedha.onrender.com/upload/",
      {
        folderName: "logos",
      }
    );
    // setBg(response.data.result);
    setLogos(response?.data?.result);
  }
  useEffect(() => {
    fetchBgImages();
    fetchLogoImages();
  }, []);
  const handleRedirect = (platform) => {
    let url;

    switch (platform) {
      case 1:
        url = "https://www.instagram.com/ashvamedha_iitbbs/";
        break;
      case 2:
        url = "https://www.facebook.com/AshvamedhaIITBBS/";
        break;
      case 3:
        url =
          "https://www.linkedin.com/company/ashvamedha-iit-bhubaneswar/mycompany/";
        break;
      default:
        return;
    }

    window.open(url, "_blank");
  };
  return (
    <div className="AboutUs">
      <Parallax bgImage={bg} strength={500}>
        <div className="content">
          <div className="title">
            <h1>
              <span className="title1">ABOUT </span>
              <span className="title2"> US</span>
            </h1>
          </div>
          <div className="main-body">
            <div className="logos">
              {logos?.map((item, index) => {
                if (index !== 3) {
                  return (
                    <img
                      src={item?.image?.url}
                      alt={item.name}
                      className="logo"
                    />
                  );
                }
              })}
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
                <div
                  className="icons facebook"
                  onClick={() => handleRedirect(2)}
                >
                  <FaFacebookF className="icon" />
                </div>
                <div
                  className="icons instagram"
                  onClick={() => handleRedirect(1)}
                >
                  <AiOutlineInstagram className="icon" />
                </div>
                <div
                  className="icons linkedin"
                  onClick={() => handleRedirect(3)}
                >
                  <FaLinkedinIn className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="counter">
          <CounterUpPage />
        </div>

        <div className="content">
          <div className="title">
            <h1>
              <span className="title1">OUR </span>
              <span className="title2"> MERCHANDISE</span>
            </h1>
          </div>
        </div>

        <div className="ath">
          <img src={logos[3]?.image?.url} alt="tshirt" />
        </div>
      </Parallax>
    </div>
  );
}

export default AboutUs;
