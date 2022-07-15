import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";

function Header(props) {
  const theme = props.theme;
  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.theme.name === "light" ? "#10fc53" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        props.theme.name === "light" ? "#50e340" : "#646464"
      }`,
    },
  });
  const [currTheme, setCurrTheme] = useState(props.theme);
  function changeTheme() {
    if (currTheme === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }
  const icon =
    props.theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#fdfcfb" : "#A7A7A7"}
      />
    );
  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <a
            rel="noreferrer"
            href="https://github.com/ankitrekha01"
            target="_blank"
            className="logo"
          >
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}>
              A
            </span>
            <span style={{ color: theme.text }}></span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            {/* <li>
              <a
                className="homei"
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Home
              </a>
            </li> */}
            <li>
              <a
                className="ec"
                href="#about"
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className="xp"
                href="#skills"
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Technology
              </a>
            </li>
            <li>
              <a
                className="projects"
                href="#projects"
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                className="cr"
                href="https://drive.google.com/file/d/1vQ7q7kGwAHX4dICpCJ40417KZMrBPzot/view?usp=sharing"
                target="_blank"
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Resume
              </a>
            </li>
            <button {...styles} onClick={changeTheme}>
              {icon}
            </button>
          </ul>
        </header>
      </div>
    </Fade>
  );
}

export default Header;
