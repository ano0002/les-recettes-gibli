import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            {props.navItems.map((item, index) => <NavLink key={index} to={item.url}>{item.name}</NavLink>)}
        </nav>
    );
}

export default Nav;