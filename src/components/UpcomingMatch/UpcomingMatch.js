import React, { useState, useEffect } from "react";
import basketball from "../../assets/eventsPhoto/bbmatch.jpg";
import tabletennis from "../../assets/eventsPhoto/ttmatch.jpg";
import football from "../../assets/eventsPhoto/fbmatch.jpg";
import chess1 from "../../assets/eventsPhoto/chess1.jpg";
import volleyball from "../../assets/eventsPhoto/vbmatch.jpg";
import { VscClose } from "react-icons/vsc";
import "./UpcomingMatch.scss";
function UpcomingMatch(props) {
  const [sportImg, setSportImg] = useState({});
  const [isTrigger, setIsTrigger] = useState(props.trigger);
  const upcomingmatchImg = [
    { id: 1, sportName: "Chess", img: chess1 },
    { id: 2, sportName: "Badminton", img: basketball },
    { id: 3, sportName: "Volleyball", img: volleyball },
    { id: 4, sportName: "Football", img: football },
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
          <VscClose className="close" />
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
