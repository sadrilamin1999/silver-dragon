"use client";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import ExploreBtn from "./ExploreBtn";
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
            className="slide "
            style={{ backgroundImage: `url(${image.src})` }}
            key={image.id}
          >
            <div
              className="slide-content wrapper flex flex-col items-start justify-center h-full w-full
            "
            >
              <div className=" flex flex-col gap-5 w-full md:w-1/2">
                <h2 className="text-6xl font-semibold text-accent2">
                  Lorem ipsum dolor sit amet.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis fugit eligendi necessitatibus ipsam, earum cumque,
                  voluptatem ducimus perspiciatis fuga sed officia maxime
                  delectus ut quos.
                </p>
                <span className="mt-4">
                  <ExploreBtn />
                </span>
              </div>
            </div>
          </div>
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
