import { useState } from "react";
import "./Sidebar.css";
import Link from "next/link";

export default function Sidebar() {
    // Controls the visibility of the sidebar.
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div className="Dim" style={visible ? {opacity: "75%", display: "block"} : {width: "0px", display: "none"}}></div>
            <div className="Sidebar" style={visible ? {width: "75%"} : {width: "0px"}}>
                <div className="Close" onClick={() => setVisible(false)}>&times;</div>
                <Link className="NavItem" href={"/printers"}>Printers</Link>
                {/* <Link className="NavItem" href={"/workshops"}>Workshops</Link> */}
                <Link className="NavItem" href={"/projects"}>Projects</Link>
                <Link className="NavItem" href={"/officers"}>Officers</Link>
                <Link className="NavItem" href={"/officehours"}>Office Hours</Link>
                <Link className="NavItem" href={"/filament"}>Filament</Link>
            </div>
            <div  className="ThreeBars Unselectable" onClick={() => setVisible(true)}>&#9776;</div>
        </>
    );
}