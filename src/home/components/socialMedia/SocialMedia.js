import React from "react";
import "./SocialMedia.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faGoogle, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href={"https://github.com/ankitrekha01"}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} color="white"></FontAwesomeIcon>
        <span></span>
      </a>
      <a
        href={"https://www.linkedin.com/in/ankit2001/"}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} color="white"></FontAwesomeIcon>
        <span></span>
      </a>
      <a
        href={`mailto:${"ankitrekha27@gmail.com"}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGoogle} color="white"></FontAwesomeIcon>
        <span></span>
      </a>
      <a
        href={"https://www.instagram.com/ankit_______01/"}
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} color="white"></FontAwesomeIcon>
        <span></span>
      </a>
    </div>
  );
}