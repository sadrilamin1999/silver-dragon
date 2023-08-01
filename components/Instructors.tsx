"use client";
import Image from "next/image";
const Instructors = () => {
  return (
    <div className=" wrapper section-padding">
      <div className="heading flex  flex-col items-center gap-5">
        <h4 className=" uppercase text-accent2 text-center font-medium text-sm tracking-widest">
          team
        </h4>
        <h2 className="text-4xl">Our Instructors</h2>
      </div>
      <div className=" flex w-full items-center section-padding">
        <div className=" w-1/4">
          <span className=" overflow-x-hidden shadow-md cursor-pointer">
            <Image
              src="https://images.pexels.com/photos/9302152/pexels-photo-9302152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={300}
              height={400}
            />
          </span>
          <h4 className="text-2xl mt-5 text-accent2">Esther Howard</h4>
          <h6 className="text-xl mt-2 text-gray-400">Senpai</h6>
        </div>
        <div className=" w-1/4">
          <span className=" overflow-x-hidden shadow-md cursor-pointer">
            <Image
              src="https://images.pexels.com/photos/10965962/pexels-photo-10965962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={300}
              height={400}
            />
          </span>
          <h4 className="text-2xl mt-5 text-accent2">Jane Cooper</h4>
          <h6 className="text-xl mt-2 text-gray-400">
            Kyokushinkai World Champion
          </h6>
        </div>
        <div className=" w-1/4">
          <span className=" overflow-x-hidden shadow-md cursor-pointer">
            <Image
              src="https://images.pexels.com/photos/10761393/pexels-photo-10761393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={300}
              height={400}
            />
          </span>
          <h4 className="text-2xl mt-5 text-accent2">Jenny Wilson</h4>
          <h6 className="text-xl mt-2 text-gray-400">Karate Europe Champion</h6>
        </div>
        <div className=" w-1/4">
          <span className=" overflow-x-hidden shadow-md cursor-pointer">
            <Image
              src="https://images.pexels.com/photos/7562139/pexels-photo-7562139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={300}
              height={400}
            />
          </span>
          <h4 className="text-2xl mt-5 text-accent2">Albert Flores</h4>
          <h6 className="text-xl mt-2 text-gray-400">Karate Europe Coach</h6>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
