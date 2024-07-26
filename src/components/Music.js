import React from "react";
import Sidebar from "./Sidebar";
import './styles/music.css'

function Music({color, changeColor}) {
  return (
    <div className="container">
      <Sidebar color={color} changeColor={changeColor} />
      <div className="musicContainer">
        <div className="musicTitle" style={{ color: color }}><div>music</div></div>
        <iframe title='Soundcloud player' className="musicPlayer" width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/728970993&color=%23ef40ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" style={{ color: color }}></iframe>
      </div>
    </div>
  );
}

export default Music;