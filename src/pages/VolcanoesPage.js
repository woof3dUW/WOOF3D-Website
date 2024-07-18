import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Page.css";
import volcano from "./volcano.jpg"
import volcano2 from "./vash.jpg"
import volcano3 from "./joshua.jpg"
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
                <div className="SliderContainer">
                    <ImageSlider slides={slides}/>
                </div>
                
            </main>
            <Footer/>
        </div>
    )
}