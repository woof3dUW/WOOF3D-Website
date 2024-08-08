import { Link } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css";

export const Sidebar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div className="Dim" style={visible ? {opacity: "75%", display: "block"} : {width: "0px", display: "none"}}></div>
            <div className="Sidebar" style={visible ? {width: "75%"} : {width: "0px"}}>
                <div className="Close" onClick={() => setVisible(false)}>&times;</div>
                <Link className="SideNavItem" to="/projects">Projects</Link>
                <Link className="SideNavItem" to="/officers">Officers</Link>
                <Link className="SideNavItem" to="/officehours">Office Hours</Link>
                <Link className="SideNavItem" to="/filament">Filament</Link>
            </div>
            <div  className="ThreeBars Unselectable" onClick={() => setVisible(true)}>&#9776;</div>
        </>
    );
}