"use client";
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
  return (
    <div className="slider relative h-full w-full">
      {data.map((image) => (
        <div
          className="slide"
          style={{ backgroundImage: `url(${image.src})` }}
          key={image.id}
        ></div>
      ))}
      <div className="btns absolute z-[1] flex gap-10 text-dark bottom-20 w-screen justify-center">
        <button className="prev-btn text-2xl bg-light/80 w-16 h-10 flex items-center justify-center hover:bg-light duration-300">
          <span>
            <FiArrowLeft />
          </span>
        </button>
        <button className="next-btn text-2xl bg-light/80 w-16 h-10 flex items-center justify-center hover:bg-light duration-300">
          <span>
            <FiArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
