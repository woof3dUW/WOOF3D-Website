import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/woof3dlogo.png"
import { Sidebar } from "./Sidebar";

export const Header = () => {
    return (
        <header className="Header">
            <Link className="HeaderText" to="/"><div className="HomeButton"><img className="HeaderImg" src={logo} alt="Club Logo"/>WOOF3D</div></Link>
            <div className="Navbar">
                <Link className="NavItem" to="/printers">Printers</Link>
                {/* <Link className="NavItem" to="/workshops">Workshops</Link> */}
                <Link className="NavItem" to="/projects">Projects</Link>
                <Link className="NavItem" to="/officers">Officers</Link>
                <Link className="NavItem" to="/officehours">Office Hours</Link>
                <Link className="NavItem" to="/filament">Filament</Link>
            </div>
            <Sidebar/>
        </header>
    )
}