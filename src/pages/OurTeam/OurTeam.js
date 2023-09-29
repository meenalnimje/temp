import "./OurTeam.scss";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import dummyProfilePhoto from "../../assets/profilePhotos/dummyprofileimage.jpeg";

// Sample team data
const chiefCoordinator = {
  name: "Deepanshu Choudhary",
  position: "Chief Coordinator",
  image: dummyProfilePhoto,
  no: "+91 8449485116",
};

const teamMembers = [
  {
    name: "Damtak Ligu",
    position: "Publicity Co-ordinator",
    image: dummyProfilePhoto,
    no: "+91 7630956265",
  },
  {
    name: "Sarlongki",
    position: "Events Co-ordinator",
    image: dummyProfilePhoto,
    no: "+91 8135071971",
  },
  {
    name: "Anurag Barman",
    position: "Sponsorship Co-ordinator",
    image: dummyProfilePhoto,
    no: "+91 7099537740",
  },
  {
    name: "Meenal C Nimje",
    position: "Web&D Co-ordinator",
    image: dummyProfilePhoto,
    no: "+91 8591182265",
  },
  {
    name: "Arihant Garg",
    position: "Core Head",
    image: dummyProfilePhoto,
    no: "+91 8448861199",
  },
  {
    name: "Ayush Singh",
    position: "Core Head",
    image: dummyProfilePhoto,
    no: "+91 7078421798",
  },
  {
    name: "Natasha Mukherjee",
    position: "Core Head",
    image: dummyProfilePhoto,
    no: "+91 9959533758",
  },
  {
    name: "Ram",
    position: "Core Head",
    image: dummyProfilePhoto,
    no: "+91 8328537734",
  },
  {
    name: "Aditya Mishra",
    position: "Core Head",
    image: dummyProfilePhoto,
    no: "+91 9343586835",
  },
  {
    name: "Devesh Patodkar",
    position: "Core Head",
    image: dummyProfilePhoto,
    no: "+91 8379957983",
  },
  {
    name: "Piyush Mishra",
    position: "Core Head",
    image: dummyProfilePhoto,
    no: "+91 9528790874",
  },
  // Add more team members here
];

function OurTeam() {
  return (
    <div className="OurTeam">
      <Navbar />
      <h2 className="heading">
        <span className="h1">OUR</span>TEAM
      </h2>
      <div className="team-container">
        <div className="cards">
          {/* Display Chief Coordinator outside the grid */}
          <div className="ui-card chief-coordinator">
            <img src={chiefCoordinator.image} alt="" />
            <div className="description">
              <h3>{chiefCoordinator.name}</h3>
              <h3>{chiefCoordinator.no}</h3>
              <p>{chiefCoordinator.position}</p>
            </div>
          </div>
          {teamMembers.map((member, index) => (
            <div className="ui-card" key={index}>
              <img src={member.image} alt="" />
              <div className="description">
                <h3>{member.name}</h3>
                <h3>{member.no}</h3>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurTeam;
