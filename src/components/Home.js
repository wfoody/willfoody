import React from "react";
import "./styles/home.css";
import Sidebar from "./Sidebar";

function Home({color, changeColor}) {
  return (
    <div className="container">
      <Sidebar color={color} changeColor={changeColor}/>
      <div className="homeContainer">
        <div className="nameContainer" onMouseEnter={changeColor} style={{ color: color }}>will foody</div>
        </div>
    </div>
  );
}

export default Home;