"use client";

import "./Header.css";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Link from "next/link";

export default function Header() {
    return (
        <header className="Header">
            <Link className="HeaderText" href={"/"}>
                <div className="HomeButton">
                    <Image className="HeaderImg" src={"/woof3dlogo.png"} width={55} height={55} alt="Club Logo" />
                    WOOF3D
                </div>
            </Link>
            <div className="Navbar">
                <Link className="NavItem" href={"/printers"}>Printers</Link>
                {/* <Link className="NavItem" to="/workshops">Workshops</Link> */}
                <Link className="NavItem" href={"/projects"}>Projects</Link>
                <Link className="NavItem" href={"/officers"}>Officers</Link>
                <Link className="NavItem" href={"/officehours"}>Office Hours</Link>
                <Link className="NavItem" href={"/filament"}>Filament</Link>
            </div>
            <Sidebar/>
        </header>
    )
}