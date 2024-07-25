import React from "react";
import Sidebar from "./Sidebar";
import './styles/music.css'

function Music() {
  return (
    <div className="container">
      <Sidebar />
      <div className="musicContainer">
        <div className="musicTitle">music</div>
        <iframe className="musicPlayer" width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/728970993&color=%23ef40ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </div>
    </div>
  );
}

export default Music;