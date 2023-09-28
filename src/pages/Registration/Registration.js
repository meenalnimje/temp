import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../assets/demoPhotos/ashvamedhaLogo.png";
import "./Registration.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { TOAST_SUCCESS, TOAST_FAILURE } from "../../App";
import { showToast } from "../../redux/slice/appConfigSlice";
function Registration() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [sportName, setSportName] = useState("");
  const [category, setCategory] = useState("");
  // async function handleRegistration(e) {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("/user/register", {
  //       name,
  //       email,
  //       collegeName,
  //       phoneNo,
  //       gender: category,
  //       sportName,
  //     });
  //     if (response?.data?.result?.statusCode === 201) {
  //       dispatch(
  //         showToast({
  //           type: TOAST_SUCCESS,
  //           message: "Regristration successfull",
  //         })
  //       );
  //     }
  //   } catch (e) {
  //     console.log("error from registration frontend side", e);
  //   }
  // }
  return (
    <div className="registration">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="ASHVAMEDHA" />
        </div>
        <h1 className="title">Ashvamedha Registration</h1>
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email Id:</label>
              <input
                type="text"
                id="email"
                placeholder="Enter your Email id"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="name">College Name:</label>
              <select
                name="college-name"
                id="college-name"
                onClick={(e) => setCollegeName(e.target.value)}
              >
                <option value="aiims">AIIMS</option>
                <option value="bjb">B.J.B</option>
                <option value="bgu">B.G.U</option>
                <option value="centurion">CENTURION</option>
                <option value="cvraman">CV RAMAN</option>
                <option value="ict">I.C.T</option>
                <option value="igit">I.G.I.T</option>
                <option value="iiit">IIIT</option>
                <option value="iitbbs">IIT BBS</option>
                <option value="outr">O.U.T.R</option>
                <option value="niser">NISER</option>
                <option value="silicon">SILICON</option>
              </select>
            </div>
            <div className="input-box">
              <label htmlFor="name">Phone No.:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your Phone No"
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="sports-name">Select Sport:</label>
              <select
                name="sports-name"
                id="sports-name"
                onClick={(e) => setSportName(e.target.value)}
              >
                <option value="chess">Chess</option>
                <option value="badminton-single">Badminton-Singles</option>
                <option value="badminton-double">Badminton-Doubles</option>
                <option value="badminton-mix">Badminton-Mix</option>
                <option value="basketball">Basketball</option>
                <option value="football">Football</option>
                <option value="tabletennis-single">Table Tennis-Singles</option>
                <option value="tabletennis-double">Table Tennis-Double</option>
                <option value="tabletennis-mix">Table Tennis-Mix</option>
                <option value="volleyball">Volleyball</option>
              </select>
            </div>
            <div className="gender-box">
              <span className="label">Category:</span>
              <div className="category">
                <div className="radio-box">
                  <input
                    type="radio"
                    id="mens"
                    name="gender"
                    value="mens"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label htmlFor="">Mens</label>
                </div>
                <div className="radio-box">
                  <input
                    type="radio"
                    id="womens"
                    name="gender"
                    value="womens"
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <label htmlFor="">Womens</label>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="submit-btn">
            <div className="btn">
              <input type="submit" onClick={handleRegistration} />
            </div>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default Registration;
