import { useState } from "react";
import "./ImageSlider.css";

export const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const slideBackground = {
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (index) => {
        setCurrentIndex(index);
    }

    return <div className="Slider">
        <div className="Arrow Left Unselectable" onClick={prevSlide}>&#10094;</div>
        <div className="Arrow Right Unselectable" onClick={nextSlide}>&#10095;</div>
        <div className="Slide" style={slideBackground}></div>
        <div className="DotContainer">
            {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="Dot Unselectable" onClick={() => goToSlide(slideIndex)}>•</div>
            ))}
        </div>
    </div>
}