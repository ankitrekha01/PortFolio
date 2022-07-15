import React from "react";
import "./Greeting.css";
import SocialMedia from "../socialMedia/SocialMedia";
import { Fade } from "react-reveal";
// import { useHistory } from "react-router-dom";
import PersonLogo from "./PersonLogo";
import { style } from "glamor";

export default function Greeting(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">Hello</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>Ankit Kumar. </span>
                Web Developer, I love building stuff and solving problems.
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1vQ7q7kGwAHX4dICpCJ40417KZMrBPzot/view?usp=sharing",
                      "_blank"
                    );
                  }}
                >
                  Resume
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <PersonLogo theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
