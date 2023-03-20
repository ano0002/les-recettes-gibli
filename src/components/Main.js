import React from "react";
import { Routes, Route } from "react-router-dom";

const Main = (props) => {
    return (
        <Routes>
            {props.routes.map((navLink,index) => <Route key={index} path={navLink.url} element={navLink.element} />)}
        </Routes>
    );
}

export default Main;