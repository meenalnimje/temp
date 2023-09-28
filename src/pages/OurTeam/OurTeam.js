import React from "react";
import "./OurTeam.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import dummyProfilePhoto from "../../assets/profilePhotos/dummyprofileimage.jpeg";

// Sample team data
const chiefCoordinator = {
  name: "Chief Coordinator",
  position: "Chief Coordinator",
  image: dummyProfilePhoto,
};

const teamMembers = [
  {
    name: "Team Member 1",
    position: "Position 1",
    image: dummyProfilePhoto,
  },
  {
    name: "Team Member 2",
    position: "Position 2",
    image: dummyProfilePhoto,
  },
  {
    name: "Team Member 3",
    position: "Position 3",
    image: dummyProfilePhoto,
  },
  {
    name: "Team Member 4",
    position: "Position 4",
    image: dummyProfilePhoto,
  },
  {
    name: "Team Member 5",
    position: "Position 5",
    image: dummyProfilePhoto,
  },
  // Add more team members here
];

function OurTeam() {
  return (
    <div className="OurTeam">
      <Navbar />
      <h2 className="heading">OUR TEAM</h2>
      <div className="team-container">
        <div className="cards">
          {/* Display Chief Coordinator outside the grid */}
          <div className="team-member chief-coordinator">
            <div
              className="member-image"
              style={{ backgroundImage: `url(${chiefCoordinator.image})` }}
            ></div>
            <div className="member-details">
              <h3>{chiefCoordinator.name}</h3>
              <p>{chiefCoordinator.position}</p>
            </div>
          </div>

          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div
                className="member-image"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>
              <div className="member-details">
                <h3>{member.name}</h3>
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
