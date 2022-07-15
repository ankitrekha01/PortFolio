import React from "react";
import "../Projects.css";
import ProjectCard from "./ProjectCard";
import projectArr from "./projectsArr";

function ProjectsSection(props) {
  const theme = props.theme;
  return (
    <div>
      <div className="projects-main-div">
        {projectArr.data.map((repo) => {
          return <ProjectCard key={repo.id} repo={repo} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default ProjectsSection;
