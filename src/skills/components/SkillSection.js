import React from "react";
import "../Skills.css";
import { Fade } from "react-reveal";
import PersonImg from "./PersonImg";
import SoftwareSkills from "./SoftwareSkills";
import skillPoints from "./skillPoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHornbill } from "@fortawesome/free-brands-svg-icons";

function SkillSection(props) {
  const theme = props.theme;
  return (
    <div>
      <div className="skills-main-div">
        <Fade left duration={2000}>
          <div className="skills-image-div">
            <PersonImg theme={theme} />
          </div>
        </Fade>
        <div className="skills-text-div">
          <Fade right duration={1000}>
            <h1 className="skills-heading" style={{ color: theme.text }}>
              Full Stack Developement
            </h1>
            <SoftwareSkills />
          </Fade>
          <Fade right duration={1500}>
            {skillPoints.map((points,i) => (
              <div key={i} className="bulletin">
                <FontAwesomeIcon
                  icon={faHornbill}
                  style={{ color: theme.accentColor }}
                />
                <p style={{ color: theme.secondaryText }}>
                  {points}
                </p>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
