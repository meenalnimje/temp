import React, { useEffect, useState } from "react";
import badminton from "../../assets/eventsPhoto/badminton.jpg";
import chess1 from "../../assets/eventsPhoto/chess1.jpg";
import football1 from "../../assets/eventsPhoto/football1.jpg";
import volleyball1 from "../../assets/eventsPhoto/volleyball1.jpg";
import basketball from "../../assets/eventsPhoto/basketball.jpg";
import tabletennis from "../../assets/eventsPhoto/tabletennis.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { GrFormNext } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";
import "./SingleSport.scss";
import UpcomingMatch from "../../components/UpcomingMatch/UpcomingMatch";
function SingleSport() {
  const params = useParams();
  const navigate = useNavigate();
  const { sportid } = params;
  const [sport, setSport] = useState({});
  const [popUpOpen, setPopUpOpen] = useState(false);
  const sportsInfo = [
    {
      id: 1,
      sportName: "Chess",
      imgUrl: chess1,
      desc: "Aavhan Chess 2023 promises to be a spectacle with a prize fund of over INR 2.2 Lakh along with trophies in various categories, so get ready to be a part of this exhibition with some of the best minds in the country as they battle it out over the 64 squares. Chess would consist of an open Rapid tournament as well as a Blitz exhibition event, so register now on the Aavhan website and see you over the board on 25th and 26th March!",
      date: "28th-29th October",
    },
    {
      id: 2,
      sportName: "Badminton",
      imgUrl: badminton,
      desc: "With multiple indoor and outdoor courts, here's your opportunity to play at IIT Bombay from 24th to 26th March. It's time to make every shot count at Aavhan this year. With overall 7 different categories in total in mens, womens and 30+ mens category, amazing cash prizes are waiting for you. What are you waiting for? The clock's ticking, so sign your team up quickly.",
      date: "28th-29th October",
    },
    {
      id: 3,
      sportName: "Volleyball",
      imgUrl: volleyball1,
      desc: "Be a part of Aavhan this year from 24-26 March, where the spirit of spiking and service lives on! With some of India's top-notch indoor volleyball courts, you'll regret missing out. Limited registrations are available for men's and women's teams!",
      date: "28th-29th October",
    },
    {
      id: 4,
      sportName: "Football",
      imgUrl: football1,
      desc: "Attention to all the footballers out there as we present to you the Aavhan's football fiesta. Here at Aavhan IIT Bombay, we provide a platform for young and talented players to showcase their skills and compete with some of the best football teams in the country. So join us in this festival of football and enjoy the thrills and last minute dramas as the teams battle it out to be crowned as the Aavhan Football Champions.",
      date: "28th-29th October",
    },
    {
      id: 5,
      sportName: "Basketball",
      imgUrl: basketball,
      desc: "With multiple indoor and outdoor courts, here's your opportunity to play at IIT Bombay from 24th to 26th March. It's time to make every shot count at Aavhan this year. So what are you waiting for? The clock's ticking, so sign your team up quickly.",
      date: "28th-29th October",
    },
    {
      id: 6,
      sportName: "Table-Tennis",
      imgUrl: tabletennis,
      desc: "Get ready to participate in the fiercest tournament of the year as we bring to you the table tennis tournament in Aavhan this year. We are hosting three categories for table tennis - men’s singles, men’s team and women’s singles. Only the most skilled and seasoned player will emerge victorious. So gather your racquets and sharpen your skills. I wish you all the very best for the epic showdown at the table.May the best player win.",
      date: "28th-29th October",
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
            <GrFormNext
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
        <div className="card">
          <div className="sports-img">
            <img src={sport.imgUrl} alt="ATHLETICS EVENTS" />
          </div>
          <div className="sports-info">
            <h1 className="name">{sport.sportName}</h1>
            <p className="desc">{sport.desc}</p>
            <h2 className="date">DATE: 28TH-29TH OCTOBER</h2>
            <h2 className="rulebook">Rulebook: Click here</h2>
            <button
              className="register-btn"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default SingleSport;
