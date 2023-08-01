"use client";
import Image from "next/image";
import ExploreBtn from "./ExploreBtn";

const About = () => {
  return (
    <div className="about wrapper">
      <div className="about-content section-padding flex items-start">
        <div className="left w-1/2">
          <Image
            className=" shadow-xl cursor-pointer"
            src="https://images.pexels.com/photos/3527074/pexels-photo-3527074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={400}
            height={500}
          />
        </div>
        <div className="right  w-1/2 flex flex-col gap-10  ">
          <h4 className=" uppercase text-accent2 text-center font-medium text-sm tracking-widest">
            About us
          </h4>
          <h2 className="text-4xl">We Are Martial Arts School</h2>
          <p className=" text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Molestie cum ut aliquam
            convallis. Lacus sed velit adipiscing diam. Donec elementum mi
            lobortis vulputate fringilla duis vitae tempor at.
          </p>
          <p className=" text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Molestie cum ut aliquam
            convallis. Lacus sed velit adipiscing diam. Donec elementum mi
            lobortis vulputate fringilla duis vitae tempor at.
          </p>
          <p className=" text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Molestie cum ut aliquam
            convallis. Lacus sed velit adipiscing diam. Donec elementum mi
            lobortis vulputate fringilla duis vitae tempor at.
          </p>
          <span className="mt-3">
            <ExploreBtn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
