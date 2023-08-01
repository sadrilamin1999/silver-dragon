"use client";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/7988769/pexels-photo-7988769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/7045597/pexels-photo-7045597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/7991209/pexels-photo-7991209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 4,
    src: "https://images.pexels.com/photos/7777533/pexels-photo-7777533.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };
  return (
    <div className="frame relative">
      <div
        className="slider h-full w-full"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <div
            className="slide"
            style={{ backgroundImage: `url(${image.src})` }}
            key={image.id}
          ></div>
        ))}
      </div>
      <div className="btns absolute left-0 right-0 bottom-20 m-auto w-fit z-[1] text-dark text-2xl flex gap-10">
        <button
          onClick={prevSlide}
          className="prev-btn bg-light/80 w-16 h-10 flex items-center justify-center hover:bg-light duration-300"
        >
          <span>
            <FiArrowLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn bg-light/80 w-16 h-10 flex items-center justify-center hover:bg-light duration-300"
        >
          <span>
            <FiArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
