import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./styles/mobileHeader.css";

function MobileHeader() {

    const [menuIcon, setMenuIcon] = useState(false)

    const handleClick = () => {
        setMenuIcon(!menuIcon)
    }

    return (
        <div className="mobileHeaderContainer">
            <div  onClick={handleClick}>X</div>
            <div className={`mobileHeaderList ${menuIcon ? "is-open" : "not-open"}`}>
                <Link to={"/"}>home</Link>
                <Link to={"/about"}>about</Link>
                <Link to={"/music"}>music</Link>
                <Link to={"/work"}>work</Link>
                <Link to={"/contact"}>contact</Link>
            </div>
        </div>
    );
}

export default MobileHeader;