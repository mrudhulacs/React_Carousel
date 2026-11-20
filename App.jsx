
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const images = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex(
      (currentIndex + 1) % images.length
    );
  };

  const previousImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (currentIndex) => (currentIndex + 1) % images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">

      <h1>Food Image Carousel</h1>

      <div className="carousel">

        <img
          src={images[currentIndex]}
          alt="Food"
        />

        <button
          className="previous"
          onClick={previousImage}
        >
          ❮
        </button>

        <button
          className="next"
          onClick={nextImage}
        >
          ❯
        </button>

      </div>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={
              index === currentIndex
                ? "dot active"
                : "dot"
            }
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

      <p>
        Image {currentIndex + 1} of {images.length}
      </p>

    </div>
  );
}

export default App;
