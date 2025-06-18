import { useState } from "react";
import "./ImageSlider.css";

interface ImageSliderProps {
  slides: string[];
}

export default function ImageSlider({slides}: ImageSliderProps) {
    // The index of the currently displayed slide.
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // If there are no slides, return an empty HTML tag.
    if (slides.length === 0) return <></>;
    
    // Decreases the current slide index by 1, wrapping around to the last slide if at the first slide.
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    // Increases the current slide index by 1, wrapping around to the first slide if at the last slide.
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    
    // Dynamic CSS style to change the background image of the slide component based on the current slide index.
    const slideBackground = {
        backgroundImage: `url(${slides[currentIndex]})`
    }

    // Dynamic CSS styles for the selected dot.
    const selected = {
        color: "rgb(218, 201, 255)"
    }

    // Dynamic CSS styles for the unselected dots.
    const unselected = {
        color: "black"
    }
    
    return (
        <div className="Slider">
            <div className="Arrow Left Unselectable" onClick={prevSlide}>{slides.length > 1 ? "❮" : ""}</div>
            <div className="Arrow Right Unselectable" onClick={nextSlide}>{slides.length > 1 ? "❯" : ""}</div>
            <div className="Slide" style={slideBackground}></div>
            <div className="DotContainer">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} className="Dot Unselectable" onClick={() => setCurrentIndex(slideIndex)} style={slideIndex === currentIndex ? selected : unselected}>{slides.length > 1 ? "•" : ""}</div>
                ))}
            </div>
        </div>
    );
}