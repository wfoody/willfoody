import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles/sidebar.css'

function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState("#39FF14");

    const handleClick = () => {
        setIsOpen(!isOpen);
    };



    function randomColor() {
        let color = [];
        for (let i = 0; i < 3; i++) {
            color.push(Math.floor(Math.random() * 256));
        }
        return 'rgb(' + color.join(', ') + ')';
    };

    const changeColor = () => {
        setColor(randomColor());
        console.log(randomColor());

    }



    return (
        <div>
            <div className="sidebar">
                <Link to={"/"} className="sidebarItem" onMouseEnter={changeColor} style={{color: color}}>home</Link>
                <Link to={"/about"} className="sidebarItem">about</Link>
                <Link to={"/music"} className="sidebarItem">music</Link>
                <Link to={"/work"} className="sidebarItem">work</Link>
                <Link to={"/contact"} className="sidebarItem">contact</Link>
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
                </div>
            </div>
        </div>
    );
}

export default Sidebar;