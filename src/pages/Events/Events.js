import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SportsCard from "../../components/SportsCard/SportsCard";
import badminton from "../../assets/eventsPhoto/badminton.jpg";
import chess1 from "../../assets/eventsPhoto/chess1.jpg";
import football1 from "../../assets/eventsPhoto/football1.jpg";
import volleyball1 from "../../assets/eventsPhoto/volleyball1.jpg";
import basketball from "../../assets/eventsPhoto/basketball.jpg";
import tabletennis from "../../assets/eventsPhoto/tabletennis.jpg";
import "./Events.scss";
function Events() {
  const sportsInfo = [
    {
      id: 1,
      sportName: "Chess",
      imgUrl: chess1,
      desc: "Engage your strategic mind and sharpen your mental prowess with the Chess event at Asvamedha. This classic game of intellect and foresight challenges players to outthink their opponents, foresee moves, and plan ahead. Whether you're a seasoned chess player or a beginner, this event offers an opportunity to showcase your tactical acumen and passion for the game.",
      date: "28th-29th October",
    },
    {
      id: 2,
      sportName: "Badminton",
      imgUrl: badminton,
      desc: "Smash, rally, and compete in the thrilling Badminton event at Asvamedha. Bring your agility, reflexes, and precision to the court as you engage in fast-paced matches against fellow enthusiasts. Whether you're a singles champion or part of a doubles dream team, this event celebrates the spirit of friendly competition and sportsmanship.",
      date: "28th-29th October",
    },
    {
      id: 3,
      sportName: "Volleyball",
      imgUrl: volleyball1,
      desc: "Bump, set, and spike your way to victory in the Volleyball event at Asvamedha. Assemble your team and showcase your teamwork, communication, and athleticism on the sand court. With every serve and every block, you'll demonstrate your dedication to the game and your commitment to collaborative excellence.",
      date: "28th-29th October",
    },
    {
      id: 4,
      sportName: "Football",
      imgUrl: football1,
      desc: "Get ready to kick up some excitement in the Football event at Asvamedha. Lace up your cleats, strategize with your teammates, and exhibit your skills in this high-energy sport. From precision passes to powerful shots on goal, the football event promises adrenaline-pumping action and a chance to revel in the camaraderie of the beautiful game.",
      date: "28th-29th October",
    },
    {
      id: 5,
      sportName: "Basketball",
      imgUrl: basketball,
      desc: "Dribble, shoot, and score in the Basketball event at Asvamedha. Take to the court with your team to demonstrate your agility, coordination, and strategic thinking. Whether you're making slam dunks or nailing three-pointers, this event combines athleticism and finesse in an electrifying showcase of hoops talent.",
      date: "28th-29th October",
    },
    {
      id: 6,
      sportName: "Table Tennis",
      imgUrl: tabletennis,
      desc: "Rally and spin your way through the Table Tennis event at Asvamedha. Grab your paddle and engage in lightning-fast matches that require quick reflexes and impeccable hand-eye coordination. Whether you're a seasoned ping pong pro or a casual player, this event offers a platform to exhibit your precision and love for the sport.",
      date: "28th-29th October",
    },
  ];
  return (
    <div className="events">
      <Navbar />
      <div className="event-container">
        <div className="cards">
          {sportsInfo.map((item) => (
            <SportsCard info={item} key={item.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
