// Slider.js
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import '../styles/Slider.css';

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(null);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setDirection('fade-right');
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setDirection('fade-left');
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Manejar el evento de transición para restablecer isTransitioning después de que termine la transición CSS
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    setDirection(null);
  };

  return (
    <div className={`slider ${isTransitioning ? 'transitioning' : ''}`}>
      <button className="btn-prev" onClick={prevSlide}>
        <IoIosArrowForward />
      </button>
      <img
        className={`slider-image ${direction}`}
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        onTransitionEnd={handleTransitionEnd}
      />
      <button className="btn-next" onClick={nextSlide}>
        <IoIosArrowBack />
      </button>
    </div>
  );
};

export default Slider;

