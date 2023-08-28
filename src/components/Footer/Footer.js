import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BiSolidPhoneCall, BiCopyright } from "react-icons/bi";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer ContactUs">
      <div className="container">
        <div className="part1">
          <div className="left">
            <h1 className="title">
              <span className="p1">ASHVA</span>
              <span className="p2">MEDHA</span>
            </h1>
            <h2 className="desc">The Annual Sports fest of IIT Bhubaneswar</h2>
            <div className="social-media">
              <div className="icons">
                <AiOutlineInstagram />
              </div>
              <div className="icons">
                <FaFacebookF />
              </div>
              <div className="icons">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="right">
            <h2 className="address">Address</h2>
            <p className="location">
              <span>
                <HiLocationMarker />
              </span>
              Gymkhana Office, IIT Bhubaneswar
            </p>
            <p className="call">
              <span>
                <BiSolidPhoneCall />
              </span>
              +91 81260 48919
            </p>
            <p className="email">
              <span>
                <AiOutlineMail />
              </span>
              coord.ashvamedha@iitbbs.ac.in
            </p>
          </div>
        </div>
        <div className="part2">
          <div className="bottom">
            <BiCopyright />
            <p className="copyright">
              Ashvamedha, <span className="p2">All Right Reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
