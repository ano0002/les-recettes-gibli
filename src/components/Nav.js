import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            {props.navItems.map((item, index) => item.displayInNav ? <NavLink key={index} to={item.url}>{item.name}</NavLink> : null)}
        </nav>
    );
}

export default Nav;