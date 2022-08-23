import React from "react";
import logo from "../world.png"

export default function Navbar(){
    return(
        <nav className="flex">
            <img src={logo} alt="World logo" className="logo-img" />
            <h2 className="heading">Travel Guide</h2>
        </nav>
    )
}