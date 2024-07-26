import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles/sidebar.css'

function Sidebar({color, changeColor}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="sidebar">
                <Link to={"/"} className="sidebarItem" style={{ color: color }}>home</Link>
                <Link to={"/about"} className="sidebarItem" style={{ color: color }}>about</Link>
                <Link to={"/work"} className="sidebarItem" style={{ color: color }}>work</Link>
                <Link to={"/music"} className="sidebarItem" style={{ color: color }}>music</Link>
                <Link to={"/contact"} className="sidebarItem" style={{ color: color }}>contact</Link>
                <br />
                <div className="sidebarItem" id="changeColorButton" style={{ color: color }} onClick={changeColor}>change mood</div>
            </div>
            <div className="mobileSidebar">
                <div className="mobileSidebarLink">
                    <div onClick={handleClick} style={{ color: color }}>{!isOpen ? 'menu' : 'X'}</div>
                </div>
                <div className={`mobileSidebarList ${isOpen ? "is-open" : ""}`} style={{ backgroundColor: 'snow' }}>
                    <Link to={"/"} className="mobileSidebarItem" style={{ color: color }}>home</Link>
                    <Link to={"/about"} className="mobileSidebarItem" style={{ color: color }}>about</Link>
                    <Link to={"/work"} className="mobileSidebarItem" style={{ color: color }}>work</Link>
                    <Link to={"/music"} className="mobileSidebarItem" style={{ color: color }}>music</Link>
                    <Link to={"/contact"} className="mobileSidebarItem" style={{ color: color }}>contact</Link>
                    <br />
                    <div className="mobileSidebarItem" id="changeColorButton" style={{ color: color }} onClick={changeColor}>change mood</div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;