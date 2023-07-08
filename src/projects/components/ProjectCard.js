import React from "react";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";
import imageToSrc from "./image-code";

export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  // Hover for project card
  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDarker} 0 7px 20px`,
    },
  });
  return (
    <div className="project_each_div">
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          &nbsp;
          <div className="repo-details">
            {/* <img src={require("../../assests/images/reactJS.svg").default} alt="ab"></img> */}
            {repo.languages.map((lang, i) => (
              <div className="repo-images tooltip">
                {" "}
                <img
                  src={require(`../../assests/images/${imageToSrc[lang].src}`)}
                  alt={lang}
                  height="40px"
                  width="40px"
                  key={i}
                />
                <span style={{ color: theme.text }} className="tooltiptext">
                  {imageToSrc[lang].name}
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              // <span key={i}>{lang} </span>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}
