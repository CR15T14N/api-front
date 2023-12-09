import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/discologo.png";
import "../styles/NavBar.css";

function NavBar(){
    return(
        <>
        <nav className="flex">
            <div className="image-text">
                    <img  src={logo} className="logo" alt="logo play"></img>
            </div>
            <div className="links">

            <NavLink  to={'/'}>
                <button className="btn">Home</button>
            </NavLink>
            <NavLink to={'/artists'} >
                <button className="btn">Artists</button>
            </NavLink>
            <NavLink to={'/vistaprevia'} >
                <button className="btn">Preview</button>
            </NavLink>
            </div>
        </nav>
         </>
    )
}
export default NavBar

