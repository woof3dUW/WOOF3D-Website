import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Page.css";
import volcano from "./images/volcano.jpg"
import volcano2 from "./images/vash.jpg"
import volcano3 from "./images/joshua.jpg"
import { ImageSlider } from "../components/ImageSlider";


export const VolcanoesPage = () => {
    const slides = [
        {url: volcano, title: "volcano"},
        {url: volcano2, title: "volcano2"},
        {url: volcano3, title: "volcano3"}
    ];
    
    return (
        <div className="Container">
            <Header/>
            <main className="MainContent">
                <h1 className="Head Center">Volcanoes</h1>
                <div className="Row">
                    <div className="SliderContainer">
                        <ImageSlider slides={slides}/>
                    </div>
                    <div className="ProjectText">
                        <p className="Text">Goal: Work with Steve on his personal project of printing the topographical maps of the Northwest's five volcanos. 
                            He showed them how to create 3D topo maps, how to use MeshMixer to manipulate the STL files, slice the files and how-to 3D print the files.
                        </p>
                        <p className="Text">Results: Our team lead did an excellent good job with this project and Steve was happy with the results. 
                            The team improved upon the original method designed by club members for the process to create several models that the club will show off at future workshops. 
                            We also plan to continue to expand this project and see what other data can be used to create and print 3D models.
                        </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}