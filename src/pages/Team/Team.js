import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import bg1 from "../../assets/demoPhotos/eventbg.jpg";
import bg2 from "../../assets/demoPhotos/eventbg2.jpg";
import bg3 from "../../assets/demoPhotos/eventbg3.jpg";
import bg5 from "../../assets/demoPhotos/eventbg5.jpg";
import "./Team.scss";
function Team() {
  const teamInfo = [
    {
      name: "Deepanshu Choudhary",
      img: bg1,
      por: "Chief-Coordinator",
      email: "coor@ashvamedha.in",
    },
    {
      name: "Bharat Raj",
      img: bg2,
      por: "Deputy-Chief-Coordinator",
      email: "coor@ashvamedha.in",
    },
    {
      name: "Damtak Ligu",
      img: bg3,
      por: "Publicity-Coordinator",
      email: "coor@ashvamedha.in",
    },
    {
      name: "Anurag Barman",
      img: bg5,
      por: "Sponsorship-Coordinator",
      email: "coor@ashvamedha.in",
    },
    {
      name: "Meenal C Nimje",
      img: bg5,
      por: "Web&Design-Coordinator",
      email: "coor@ashvamedha.in",
    },
  ];
  return (
    <div className="team">
      {teamInfo.map((item) => (
        <ProfileCard info={item} />
      ))}
    </div>
  );
}

export default Team;
