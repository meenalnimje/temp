import React from "react";
import "./ProfileCard.scss";
function ProfileCard(props) {
  return (
    <div className="container">
      <div class="column">
        <div class="card">
          <div class="pro-pic">
            <img src={props.info.img} alt={props.info.name} />
          </div>
          <div class="desciption-wrap">
            <div class="description">
              <h3>{props.info.name}</h3>
              <h4>{props.info.por}</h4>
              <h4>{props.info.email}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
