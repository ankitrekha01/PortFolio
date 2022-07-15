import React from "react";
import "../Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faDocker, faHtml5, faJs, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";

function SoftwareSkills(props) {
  return (
    <div id="softwareskills">
      <FontAwesomeIcon icon={faHtml5} style={{color:"#E34F26"}} />{" "}
      <FontAwesomeIcon icon={faCss3} style={{color:"#1572B6"}} />{" "}
      <FontAwesomeIcon icon={faReact} style={{color:"#61DAFB"}} />{" "}
      <FontAwesomeIcon icon={faJs} style={{color:"#F7DF1E"}} />{" "}
      <FontAwesomeIcon icon={faNodeJs} style={{color:"#339933"}} />{" "}
      <FontAwesomeIcon icon={faC} style={{color:"#E94E32"}} />{" "}
      <FontAwesomeIcon icon={faPython} style={{color:"#3776AB"}} />{" "}
      <FontAwesomeIcon icon={faDocker} style={{color:"#29B0EE"}} />{" "}
    </div>
  );
}

export default SoftwareSkills;
