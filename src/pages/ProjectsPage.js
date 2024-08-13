
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import "./Page.css";
import volcano from "./images/volcano.jpg";
import volcano2 from "./images/vash.jpg"
import volcano3 from "./images/joshua.jpg"

export const ProjectsPage = () => {
    const slides = [
        {url: volcano, title: "volcano"},
        {url: volcano2, title: "volcano2"},
        {url: volcano3, title: "volcano3"}
    ];
    
    return (
        <div className="Container">
            <Header/>
            <main className="MainContent">                
                <h1 className="Head Center">Past Projects</h1>
                <div className="Row">
                    <div className="RowSection">
                        <Link className="Name" to="/projects/project" state={
                            {
                                title: "Volcanoes",
                                slides: slides, 
                                text: "Goal: Work with Steve on his personal project of printing the topographical maps of the Northwest's five volcanos. He showed them how to create 3D topo maps, how to use MeshMixer to manipulate the STL files, slice the files and how-to 3D print the files. Results: Our team lead did an excellent good job with this project and Steve was happy with the results. The team improved upon the original method designed by club members for the process to create several models that the club will show off at future workshops. We also plan to continue to expand this project and see what other data can be used to create and print 3D models."
                            }
                        }><div><img className="Portrait" src={volcano} alt="3D Printed Volcano"/>Volcanoes</div></Link>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}