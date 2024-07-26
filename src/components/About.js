
import React from "react";
import './styles/about.css';
import Sidebar from "./Sidebar";

function About({ color, changeColor }) {

  return (
    <div className="container">
      <Sidebar color={color} changeColor={changeColor} />
      <div className="aboutContainer">
        <div className="aboutTitle" style={{ color: color }}>about me</div>
        <div className="aboutBody">
          <div style={{ color: color }}>
            Hi, I'm Will Foody. I'm a composer and software engineer located in New York, NY. I enjoy spending my time at the intersection of music, design, and technology.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
