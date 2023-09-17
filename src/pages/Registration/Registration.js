import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Registration.scss";
function Registration() {
  return (
    <div className="registration">
      {/* <Navbar /> */}
      <div className="container">
        <div className="title">Registration</div>
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <label htmlFor="name">Email Id:</label>
              <input type="text" id="name" placeholder="Enter your Emailid" />
            </div>
            <div className="input-box">
              <label htmlFor="name">College Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your college name"
              />
            </div>
            <div className="input-box">
              <label htmlFor="name">Phone No.:</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <label htmlFor="sports-name">Select Sport:</label>
              <select name="sports-name" id="sports-name">
                <option value="badminton">Badminton</option>
                <option value="chess">Chess</option>
                <option value="tabletennis">Table Tennis</option>
                <option value="volleyball">Volleyball</option>
                <option value="basketball">Basketball</option>
                <option value="football">Football</option>
              </select>
            </div>
            <div className="gender-box">
              <span className="label">Gender:</span>
              <div className="category">
                <div className="radio-box">
                  <input type="radio" id="male" name="gender" value="male" />
                  <label htmlFor="">Male</label>
                </div>
                <div className="radio-box">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                  <label htmlFor="">Female</label>
                </div>
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="idimg">Upload Your Id Card</label>
              <input type="file" id="idimg" accept="img/*" />
            </div>
          </div>
          <div className="submit-btn"></div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
