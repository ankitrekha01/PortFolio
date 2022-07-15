import React from "react";
import "./About.css";
import { Fade } from "react-reveal";

function AboutSection(props) {
  const theme = props.theme;
  return (
    <div>
      <div className="about-main-div">
        <Fade left duration={2000}>
          <div className="about-image-div">
            <img
              src={require("../assests/images/profile_pic.jpg")}
              alt="Profile"
            ></img>
          </div>
        </Fade>
        <div className="about-text-div">
          <Fade right duration={1000}>
            <p className="about-text-p" style={{ color: theme.secondaryText }}>
              I am a Third Year Student from the Indian Institute of Information
              Technology, Gwalior, pursuing my B.Tech in Information Technology
              <br /><br />
              I am Full stack Developer ,I really enjoy building new things. I'm always eager to learn new concepts
              and apply them in my projects. Currently I am actively looking for
              internship opportunities
              <br /><br />
              I am a dedicated team player, and I
              get along well with any team environment. I also have
              good command over Data Structures and Algorithms
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}
export default AboutSection;
