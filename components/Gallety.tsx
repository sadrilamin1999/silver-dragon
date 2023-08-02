import React from "react";

const images = [
  "https://images.pexels.com/photos/6455248/pexels-photo-6455248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6253310/pexels-photo-6253310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7045476/pexels-photo-7045476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8005487/pexels-photo-8005487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7045430/pexels-photo-7045430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6253179/pexels-photo-6253179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/10823769/pexels-photo-10823769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7045482/pexels-photo-7045482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Gallery = () => {
  return (
    <div className="wrapper section-padding">
      <h2 className="text-4xl text-center">Our Gallery</h2>
      <div className="flex flex-wrap justify-between section-padding">
        {images.map((image, index) => (
          <div key={index} className="w-1/4 p-2 overflow-hidden">
            <img
              src={image}
              alt={`Image ${index}`}
              className=" w-80 h-80  rounded-lg object-cover cursor-pointer hover:scale-125 overflow-hidden duration-700"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
