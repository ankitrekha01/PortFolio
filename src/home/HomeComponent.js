import React from "react";
import Header from "./components/header/Header";
import Greeting from "./components/greetings/Greeting";
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
// import Footer from "../../components/footer/Footer";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <About theme={props.theme} />
      <Skills theme={props.theme} />
      <Projects theme={props.theme} />
    </div>
  );
}

export default Home;