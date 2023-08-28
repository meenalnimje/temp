import React from "react";
function ProfileCard(props) {
  return (
    <div className="profile-card">
      <div className="container">
        <img src={props.info.imgUrl} alt="image of persons/sponsors" />
        <h2 className="name">{props.info.name ? props.info.name : " "}</h2>
      </div>
    </div>
  );
}
export default ProfileCard;
