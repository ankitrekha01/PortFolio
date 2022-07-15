import React from "react";
import "./Projects.css";
import { Fade } from "react-reveal";
import ProjectsSection from "./components/ProjectsSection";

export default function Projects(props) {
  const theme = props.theme;
  return (
    <div className="main" id="projects">
      <br />
      <div className="projects-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="projects-header" style={{ color: theme.text }}>
            Projects
          </h1>
        </Fade>
      </div>
      <ProjectsSection theme={theme} />
      <br />
      <br />
    </div>
  );
}
