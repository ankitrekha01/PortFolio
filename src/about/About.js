import React from "react";
import "./About.css";
import AboutSection from "./AboutSection";
import { Fade } from "react-reveal";

export default function About(props) {
  const theme = props.theme;
  return (
    <div className="main" id="about">
      <br />
      <div className="about-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="about-header" style={{ color: theme.text }}>
            About Me
          </h1>
        </Fade>
      </div>
      <AboutSection theme={theme} />
    </div>
  );
}