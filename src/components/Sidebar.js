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
                <Link to={"/"} className="sidebarItem" onMouseEnter={changeColor} style={{ color: color }}>home</Link>
                <Link to={"/about"} className="sidebarItem" onMouseEnter={changeColor} style={{ color: color }}>about</Link>
                <Link to={"/music"} className="sidebarItem" onMouseEnter={changeColor} style={{ color: color }}>music</Link>
                <Link to={"/work"} className="sidebarItem" onMouseEnter={changeColor} style={{ color: color }}>work</Link>
                <Link to={"/contact"} className="sidebarItem" onMouseEnter={changeColor} style={{ color: color }}>contact</Link>
            </div>
            <div className="mobileSidebar">
                <div className="mobileSidebarLink">
                    <div onClick={handleClick}>{!isOpen ? 'menu' : 'X'}</div>
                </div>
                <div className={`mobileSidebarList ${isOpen ? "is-open" : ""}`}>
                    <Link to={"/"} className="mobileSidebarItem">home</Link>
                    <Link to={"/about"} className="mobileSidebarItem">about</Link>
                    <Link to={"/music"} className="mobileSidebarItem">music</Link>
                    <Link to={"/work"} className="mobileSidebarItem">work</Link>
                    <Link to={"/contact"} className="mobileSidebarItem">contact</Link>
                    <div  className="mobileSidebarItem">contact</div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;