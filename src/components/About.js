import React, { useState } from "react";
import './styles/about.css';
import Sidebar from "./Sidebar";

function About() {

  const [color, setColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  function randomColor() {
      let color = [];
      for (let i = 0; i < 3; i++) {
          color.push(Math.floor(Math.random() * 256));
      }
      return 'rgb(' + color.join(', ') + ')';
  };

  const changeColor = () => {
      setColor(randomColor());
      setBackgroundColor(randomColor())
      console.log(randomColor());
  }
  
  return (
    <div className="container" style={{backgroundColor: backgroundColor}}>
      <Sidebar />
      <div className="aboutContainer">
        <div className="aboutTitle">about me</div>
        <div className="aboutBody">
          <div onMouseEnter={changeColor} style={{ color: color }}>Hi,</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>I'm</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>Will</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>Foody.</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>I'm</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>a</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>composer</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>and</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>software</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>engineer</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>located</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>in</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>New</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>York,</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>NY.</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>I</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>enjoy</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>spending</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>my</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>time</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>at</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>the</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>intersection</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>of</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>music,</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>design,</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>and</div>
          <div onMouseEnter={changeColor} style={{ color: color }}>technology.</div></div>
      </div>
    </div>
  );
}

export default About;
