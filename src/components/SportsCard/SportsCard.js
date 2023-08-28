import React from "react";
import { useNavigate } from "react-router-dom";
import "./SportsCard.scss";
function SportsCard(props) {
  const navigate = useNavigate();
  return (
    <div
      className="sports-card"
      onClick={(e) => {
        navigate(`/events/${props.info.id}`);
      }}
    >
      <img src={props.info.imgUrl} alt="Atheletics" />
      <h2 className="sports-name">{props.info.sportName}</h2>
    </div>
  );
}

export default SportsCard;
