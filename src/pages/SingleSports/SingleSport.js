import "./SingleSport.scss";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AiOutlineDoubleRight } from "react-icons/ai";
import Navbar from "../../components/Navbar/Navbar";
import UpcomingMatch from "../../components/UpcomingMatch/UpcomingMatch";
import badminton from "../../assets/eventsPhoto/badminton.jpg";
import basketball from "../../assets/eventsPhoto/basketball.jpg";
import chess1 from "../../assets/eventsPhoto/chess1.jpg";
import football1 from "../../assets/eventsPhoto/football1.jpg";
import rulebook from "../../doc/rulebook.pdf";
import tabletennis from "../../assets/eventsPhoto/tabletennis.jpg";
import volleyball1 from "../../assets/eventsPhoto/volleyball1.jpg";

function SingleSport() {
  const params = useParams();
  const { sportid } = params;
  const [sport, setSport] = useState({});
  const [popUpOpen, setPopUpOpen] = useState(false);
  function handleRegistration(sportName) {
    const response = sportsInfo.find((item) => item.sportName === sportName);
    window.open(response.registrationLink);
  }
  const sportsInfo = [
    {
      id: 1,
      sportName: "Chess",
      imgUrl: chess1,
      desc: "Chess, the game of intellect and strategy, challenges players to outthink their opponents, anticipate moves, and plan ahead. At the Ashvamedha Chess Championship, we celebrate this timeless battle of wits. Whether you're a seasoned player or just starting, join us for two days of intense competition and camaraderie.Information Regarding the event is given below.",
      date: "28th-29th October",
      location: "SES Room No: 218,219",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSc2SFwaA8IdCIIfEKonl_vUyG7c7uw2K54yqyi4iDg4fRpUzA/viewform?usp=sf_link",
      rulebook: rulebook,
      poc: "Devesh Patodkar",
    },
    {
      id: 2,
      sportName: "Badminton",
      imgUrl: badminton,
      desc: "Badminton is a sport that demands speed, agility, and finesse. Whether you're smashing shuttlecocks or diving for a crucial save, the Ashvamedha Badminton Championship promises intense rallies and thrilling matches. Join us on the court for a birdie-tastic showdown.Information Regarding the event is given below.",
      date: "28th-29th October",
      location: "Inside SAC Badminton Court 1,2",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSc2SFwaA8IdCIIfEKonl_vUyG7c7uw2K54yqyi4iDg4fRpUzA/viewform?usp=sf_link",
      rulebook: rulebook,
      poc: "Pranav P",
    },
    {
      id: 3,
      sportName: "Volleyball",
      imgUrl: volleyball1,
      desc: "Volleyball is a dynamic team sport that demands coordination, agility, and teamwork. Whether you're spiking, blocking, or diving for a save, it's all about the thrill of the game. Join us for a spirited match at Ashvamedha Sports Arena.Information Regarding the event is given below.",
      date: "28th-29th October",
      location: "Volleyball Court 1,2",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSc2SFwaA8IdCIIfEKonl_vUyG7c7uw2K54yqyi4iDg4fRpUzA/viewform?usp=sf_link",
      rulebook: rulebook,
      poc: "Justa Tirkey",
    },
    {
      id: 4,
      sportName: "Football",
      imgUrl: football1,
      desc: "Football, the world's most beloved sport, unites people through the joy of scoring goals and making breathtaking saves. At Ashvamedha, we bring the football community together for a thrilling tournament filled with skill, passion, and unforgettable moments.Information Regarding the event is given below.",
      date: "28th-29th October",
      location: "Football Ground",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSc2SFwaA8IdCIIfEKonl_vUyG7c7uw2K54yqyi4iDg4fRpUzA/viewform?usp=sf_link",
      rulebook: rulebook,
      poc: "Megha Shyam",
    },
    {
      id: 5,
      sportName: "Basketball",
      imgUrl: basketball,
      desc: "Basketball is a fast-paced, high-flying game of strategy and skill. Dribble, pass, and shoot your way to victory in the Ashvamedha Basketball Championship. Join us on the court for slam dunks and three-pointers that will leave you in awe.Information Regarding the event is given below.",
      date: "28th-29th October",
      location: "Basketball Court 1,2",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSc2SFwaA8IdCIIfEKonl_vUyG7c7uw2K54yqyi4iDg4fRpUzA/viewform?usp=sf_link",
      rulebook: rulebook,
      poc: "Ayush Singh & Pranav P",
    },
    {
      id: 6,
      sportName: "Table Tennis",
      imgUrl: tabletennis,
      desc: "Requires lightning-quick reflexes and precision. Ashvamedha's table tennis tournament is a showcase of spin serves, rallies, and impressive volleys. Come and experience the thrill of ping pong.Information Regarding the event is given below.",
      location: "Inside SAC Multi-Purpose Hall",
      date: "28th-29th October",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSc2SFwaA8IdCIIfEKonl_vUyG7c7uw2K54yqyi4iDg4fRpUzA/viewform?usp=sf_link",
      poc: "Jatin Sahu",
      rulebook: rulebook,
    },
    {
      id: 7,
      sportName: "Lawn Tennis",
      imgUrl: tabletennis,
      desc: "Requires lightning-quick reflexes and precision. Ashvamedha's table tennis tournament is a showcase of spin serves, rallies, and impressive volleys. Come and experience the thrill of ping pong.Information Regarding the event is given below.",
      location: "Lawn Tennis Court 1,2",
      date: "28th-29th October",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSc2SFwaA8IdCIIfEKonl_vUyG7c7uw2K54yqyi4iDg4fRpUzA/viewform?usp=sf_link",
      poc: "Ashvarth",
      rulebook: rulebook,
    },
  ];
  useEffect(() => {
    const result = sportsInfo.find(({ id }) => id == sportid);
    setSport(result);
  }, [params.id]);
  return (
    <div className="single-sport-page">
      <Navbar />
      <div className="sportspage">
        <div className="popup-content">
          <div className="match-popup">
            <h2 onClick={() => setPopUpOpen(!popUpOpen)} className="hover-link">
              Click here for Upcoming Matches
            </h2>
            <AiOutlineDoubleRight
              onClick={() => setPopUpOpen(!popUpOpen)}
              className="next"
            />
          </div>
          {popUpOpen && (
            <UpcomingMatch
              trigger={true}
              children={"this is popup"}
              sportid={sportid}
            />
          )}
        </div>
        <div className="cards">
          <div className="sports-img">
            <img src={sport.imgUrl} alt="ATHLETICS EVENTS" />
          </div>
          <div className="sports-info">
            <h1 className="name">{sport.sportName}</h1>
            <p className="desc">{sport.desc}</p>
            <p className="poc">
              <span className="highlight">Person of Contact:</span> {sport.poc}
            </p>
            <p className="venue">
              <span className="highlight">Location:</span> {sport.location}
            </p>
            <p className="date">
              <span className="highlight">Date:</span> {sport.date}
            </p>
            <a className="rulebook" href={sport.rulebook} download="Rulebook">
              <span className="highlight">Rulebook:</span> Click here
            </a>
            <button
              className="register-btn"
              onClick={() => handleRegistration(sport.sportName)}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleSport;
