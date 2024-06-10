import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <h3>WOOF3D</h3>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/projects">Projects</Link>
            {" | "}
            <Link to="/officers">Officers</Link>
            {" | "}
            <Link to="/officehours">Office Hours</Link>
            {" | "}
            <Link to="/resources">Member Resources</Link>
            <hr></hr>
        </header>
    )
}