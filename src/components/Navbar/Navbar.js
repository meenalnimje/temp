import "./Navbar.scss";

import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { VscClose } from "react-icons/vsc";
import ashvamedhaLogo from "../../assets/demoPhotos/ashvamedhaLogo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const menuData = [
    {
      title: "Home",
      path: "/",
      cName: "nav-text",
      navigate: true,
    },
    {
      title: "About Us",
      path: "AboutUs",
      cName: "nav-text",
    },
    {
      title: "Events",
      path: "/events",
      cName: "nav-text",
      navigate: true,
    },
    {
      title: "Leaderboard",
      path: "/leaderboard",
      cName: "nav-text",
      navigate: true,
    },
    {
      title: "Our Team",
      path: "/team",
      cName: "nav-text",
      navigate: true,
    },
    {
      title: "Sponsors",
      path: "/sponsors",
      cName: "nav-text",
      navigate: true,
    },
    {
      title: "Contact Us",
      path: "ContactUs",
      cName: "nav-text",
    },
  ];
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={ashvamedhaLogo} alt="ASHVAMEDHA" />
        </div>
        <div className="content">
          <div className="navbar">
            {!open && (
              <AiOutlineMenu
                onClick={() => setOpen(!open)}
                className="menu-bars"
              />
            )}
          </div>
          <nav className={open ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
              <div className="close">
                <VscClose onClick={() => setOpen(!open)} className="menu-bar" />
              </div>
              {menuData.map((item, index) => {
                return item.navigate ? (
                  <li key={index} className={item.cName}>
                    <Link to="#" onClick={() => navigate(`${item.path}`)}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ) : (
                  <li key={index} className={item.cName}>
                    <Link to={item.path} smooth={true}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
