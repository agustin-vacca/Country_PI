import React, { useEffect, useState } from "react";

const ImgSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    let timer1 = setTimeout(() => {
      goToNext();
    }, 5000);
    return () => {
      clearTimeout(timer1);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full">
    <div className=" relative h-56 overflow-hidden rounded-lg md:h-96 ">

      {/* Imagen  */}

      <div
        className=" "
      >
        <img src={`${slides[currentIndex].url}`} alt="Funciona por favor"  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
      </div>
      
      <div className=" absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className=" w-3 h-3 rounded-full cursor-pointer"
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>

          
      {/* Flecha izq */}
      <div
        className=" absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
        onClick={goToPrevious}
      >
        {" "}
        ❰{" "}
      </div>

      {/* Flecha derecha */}
      <div
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNext}
      >       ❱    </div>

    </div>
    </div>
  );
};
export default ImgSlider;
