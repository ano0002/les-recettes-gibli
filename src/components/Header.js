import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";

import Nav from "./Nav";

import "../styles/Header.css";

const Header = (props) => {
    return ( 
        <header>
            <NavLink to="/">
                <img src={logo} alt="logo" />
            </NavLink>
            <Nav navItems={props.navItems}/>
        </header>
    );
}

export default Header;
