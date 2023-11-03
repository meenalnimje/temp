import "./UpcomingMatch.scss";

import React, { useEffect, useState } from "react";

import { VscClose } from "react-icons/vsc";
import badminton from "../../assests/demoPhotos/badminton.jpg";
import basketball from "../../assests/demoPhotos/basketball.jpg";
import chess1 from "../../assests/demoPhotos/chess.jpg";
import football from "../../assests/demoPhotos/football.jpg";
import tabletennis from "../../assests/demoPhotos/tt.jpg";
import volleyball from "../../assests/demoPhotos/vb.jpg";

function UpcomingMatch(props) {
  const [sportImg, setSportImg] = useState({});
  const [isTrigger, setIsTrigger] = useState(props.trigger);
  const upcomingmatchImg = [
    { id: 1, sportName: "chess", img: chess1, fixtureName: "chessp" },
    {
      id: 2,
      sportName: "badminton",
      img: badminton,
      fixtureName: "badmintonp",
    },
    {
      id: 3,
      sportName: "volleyball",
      img: volleyball,
      fixtureName: "volleyballp",
    },
    { id: 4, sportName: "football", img: football, fixtureName: "footballp" },
    {
      id: 5,
      sportName: "basketball",
      img: basketball,
      fixtureName: "basketballp",
    },
    { id: 6, sportName: "table-tennis", img: tabletennis, fixtureName: "ttp" },
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
