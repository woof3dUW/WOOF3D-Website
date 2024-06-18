import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
    return (
        <>
        <header className="Header">
            <Link className="HeaderText" to="/"><div className="HomeButton"><img className="HeaderImg" src="woof3dlogo.png" alt="WOOF3D Logo"/>WOOF3D</div></Link>
            <div className="Navbar">
                <Link className="NavItem" to="/projects">Projects</Link>
                <Link className="NavItem" to="/officers">Officers</Link>
                <Link className="NavItem" to="/officehours">Office Hours</Link>
                <Link className="NavItem" to="/resources">Member Resources</Link>
            </div>
        </header>
        </>
    )
}