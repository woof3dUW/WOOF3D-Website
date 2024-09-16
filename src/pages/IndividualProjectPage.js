import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Page.css";
import { useLocation } from "react-router-dom";
import { ImageSlider } from "../components/ImageSlider";


export const IndividualProjectPage = () => {
    function scrollToTop() {
        window.scrollTo(0,0);
    }
    
    const location = useLocation();
    const { title, slides, text } = location.state;

    return (
        <div className="Container">
            <Header/>
            <main className="MainContent" onLoad={scrollToTop()}>
                <div className="Section">
                    <h1 className="Head">{title}</h1>
                    <div className="SliderContainer">
                        <ImageSlider slides={slides}/>
                    </div>
                    <br/>
                    <p className="Text">
                        {text.map((paragraph) => (
                            <div className="Text" style={{marginTop: "20px"}}>{paragraph}</div>
                        ))}
                    </p>
                </div>
            </main>
            <Footer/>
        </div>
    )
}