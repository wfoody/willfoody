import React from "react";
import Sidebar from "./Sidebar";
import './styles/work.css';
import goodtutor from './images/goodtutor.png';
import represent from './images/represent.png';

function Work({color, changeColor}) {
  return (
    <div className="container">
      <Sidebar color={color} changeColor={changeColor} />
      <div className="workContainer">
        <div className="workTitle" onMouseEnter={changeColor} style={{ color: color }}>projects</div>
        <div className="workItem">
          <a href="https://represent.surge.sh/" target="_blank" rel="noreferrer"><img src={represent} className="projectImage" alt="Represent App screenshot" onMouseEnter={changeColor} style={{ color: color }}/></a>
          <div className="projectImageText" onMouseEnter={changeColor} style={{ color: color }}>A React/Redux web application designed as a platform to help you connect with your elected representatives. You can find this project on GitHub <a href="https://github.com/wfoody/Represent/" target="_blank" rel="noreferrer">here</a>.</div>
        </div>
        <div className="workItem">
          <a href="https://goodtutor.surge.sh/" target="_blank" rel="noreferrer"><img src={goodtutor} className="projectImage"  alt="GoodTutor App screenshot" onMouseEnter={changeColor} style={{ color: color }}/></a>
          <div className="projectImageText" onMouseEnter={changeColor} style={{ color: color }}>GoodTutor is an accessible, online-learning platform designed to provide free tutoring services to students of all ages. You can find this project on GitHub <a href="https://github.com/wfoody/GoodTutor" target="_blank" rel="noreferrer">here</a>.</div>
        </div>
        <div className="workItem">
          <div className="projectImageText" onMouseEnter={changeColor} style={{ color: color }}>You can also find <i>this</i> site on GitHub <a href="https://github.com/wfoody/willfoody" target="_blank" rel="noreferrer">here</a>!</div>
        </div>
        <div className="workItem">
          <div className="projectImageText" onMouseEnter={changeColor} style={{ color: color }}>You can <i>also</i> find <i>another</i> version of <i>this</i> site <a href="https://willfoody-colors.surge.sh" target="_blank" rel="noreferrer">here</a>!</div>
        </div>
      </div>
    </div>
  );
}

export default Work;