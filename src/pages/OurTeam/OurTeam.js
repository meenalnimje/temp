import "./OurTeam.scss";

import Footer from "../../components/Footer/Footer";
import Image_AnuragBurman from "../../assets/profilePhotos/Image_AnuragBurman.jpg";
import Image_ArihantGarg from "../../assets/profilePhotos/Image_ArihantGarg.jpeg";
import Image_AyushSingh from "../../assets/profilePhotos/Image_AyushSingh.jpg";
import Image_DamtakLigu from "../../assets/profilePhotos/Image_DamtakLigu.jpeg";
import Image_Deepanshu from "../../assets/profilePhotos/Image_Deepanshu.jpg";
import Image_DeveshPatodkar from "../../assets/profilePhotos/Image_DeveshPatodkar.jpg";
import Image_Meenal from "../../assets/profilePhotos/Image_Meenal.jpg";
import Image_NatashaMukherjee from "../../assets/profilePhotos/Image_NatashaMukherjee.jpg";
import Image_RamakrishnaReddy from "../../assets/profilePhotos/Image_RamakrishnaReddy.jpg";
import Image_SarlongkiRongphar from "../../assets/profilePhotos/Image_SarlongkiRongphar.jpg";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";

// Sample team data
const chiefCoordinator = [
  {
    name: "Deepanshu Choudhary",
    position: "Chief Coordinator",
    image: Image_Deepanshu,
    no: "+91 8449485116",
  },
];

const teamMembers = [
  {
    name: "Damtak Ligu",
    position: "Publicity Co-ordinator",
    image: Image_DamtakLigu,
    no: "+91 7630956265",
  },
  {
    name: "Sarlongki",
    position: "Events Co-ordinator",
    image: Image_SarlongkiRongphar,
    no: "+91 8135071971",
  },
  {
    name: "Anurag Barman",
    position: "Sponsor Co-ordinator",
    image: Image_AnuragBurman,
    no: "+91 7099537740",
  },
  {
    name: "Meenal C Nimje",
    position: "Web&D Co-ordinator",
    image: Image_Meenal,
    no: "+91 8591182265",
  },
];
const corehead = [
  {
    name: "Arihant Garg",
    position: "Core Head",
    image: Image_ArihantGarg,
    no: "+91 8448861199",
  },
  {
    name: "Ayush Singh",
    position: "Core Head",
    image: Image_AyushSingh,
    no: "+91 7078421798",
  },
  {
    name: "Natasha Mukherjee",
    position: "Core Head",
    image: Image_NatashaMukherjee,
    no: "+91 9959533758",
  },
  {
    name: "Ram Reddy",
    position: "Core Head",
    image: Image_RamakrishnaReddy,
    no: "+91 8328537734",
  },
  {
    name: "Devesh Patodkar",
    position: "Core Head",
    image: Image_DeveshPatodkar,
    no: "+91 8379957983",
  },
];

function OurTeam() {
  return (
    <div className="OurTeam">
      <Navbar />
      <h2 className="heading">
        <span className="h1">OUR</span>
        <span className="h2"> TEAM</span>
      </h2>
      <div className="team-container">
        <div className="cards">
          {/* Display Chief Coordinator outside the grid */}
          <div className="chief-coordinator">
            {chiefCoordinator.map((member, index) => (
              <div className="card" key={index}>
                <div className="image">
                  <img src={member.image} alt="" />
                </div>
                <div className="description">
                  <p>{member.position}</p>
                  <h3 className="name">{member.name}</h3>
                  <h3>{member.no}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="coordinator">
            {teamMembers.map((member, index) => (
              <div className="card" key={index}>
                <div className="image">
                  <img src={member.image} alt="" />
                </div>
                <div className="description">
                  <p>{member.position}</p>
                  <h3 className="name">{member.name}</h3>
                  <h3>{member.no}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="coreheads">
            {corehead.map((member, index) => (
              <div className="card" key={index}>
                <div className="image">
                  <img src={member.image} alt="" />
                </div>
                <div className="description">
                  <p>{member.position}</p>
                  <h3 className="name">{member.name}</h3>
                  <h3>{member.no}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurTeam;
