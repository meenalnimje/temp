import React, { useState, useEffect } from "react";
import badminton from "../../assets/eventsPhoto/badminton.jpg";
import chess1 from "../../assets/eventsPhoto/chess1.jpg";
import football1 from "../../assets/eventsPhoto/football1.jpg";
import volleyball1 from "../../assets/eventsPhoto/volleyball1.jpg";
import basketball from "../../assets/eventsPhoto/basketball.jpg";
import tabletennis from "../../assets/eventsPhoto/tabletennis.jpg";
import "./UpcomingMatch.scss";
function UpcomingMatch(props) {
  const [sportImg, setSportImg] = useState({});
  const [isTrigger, setIsTrigger] = useState(props.trigger);
  const upcomingmatchImg = [
    { id: 1, sportName: "Chess", img: chess1 },
    { id: 2, sportName: "Badminton", img: badminton },
    { id: 3, sportName: "Volleyball", img: volleyball1 },
    { id: 4, sportName: "Football", img: football1 },
    { id: 5, sportName: "Basketball", img: basketball },
    { id: 6, sportName: "Table-Tennis", img: tabletennis },
  ];
  useEffect(() => {
    const result = upcomingmatchImg.find(({ id }) => id == props.sportid);
    setSportImg(result);
  }, [props.sportid]);
  return isTrigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setIsTrigger(!isTrigger)}>
          Close
        </button>
        <img
          src={sportImg.img}
          alt="will be announced soon"
          className="images"
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export default UpcomingMatch;
