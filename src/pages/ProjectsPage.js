
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import "./Page.css";
import volcano from "./volcano.jpg";

export const ProjectsPage = () => {
    return (
        <div className="Container">
            <Header/>
            <main className="MainContent">                
                <h1 className="Head Center">Past Projects</h1>
                <div className="Row">
                    <div className="RowSection">
                        <img className="Portrait" src={volcano} alt="3D Printed Volcano"/>
                        <Link className="Name" to="/projects/volcanoes">Volcanoes</Link>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}