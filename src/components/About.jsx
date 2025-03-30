import React from "react";
import { FaUtensils, FaDumbbell, FaUsers, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full flex flex-col mt-10 items-center justify-center bg-[#1D1B38] ">
      {/* Heading Section */}
      <button className="bg-white text-[#1D1B38] px-4 py-2 rounded-full font-semibold mb-4">
        About
      </button>
      <h1 className="text-4xl font-bold text-center">
        <span className="text-green-300">About</span> Us
      </h1>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/Banner_img/img1.jpg"
            alt="Physiotherapy Session"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right: Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2">
            We Are The Best For{" "}
            <span className="text-green-600">Physiotherapy</span>
          </h1>
          <p className="text-gray-200 mt-4 leading-relaxed">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptate expedita aspernatur possimus a placeat quo odit laboriosam, molestias soluta excepturi corporis neque fugiat obcaecati beatae sapiente doloremque labore autem officiis et tenetur tempore blanditiis eum. In eveniet perspiciatis maiores dicta, quam ducimus molestias possimus, provident culpa rem maxime dolor?
          </p>
          <p className="text-gray-200 mt-2 leading-relaxed">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam illo, illum, repudiandae recusandae quas veritatis sed voluptates reiciendis fuga expedita quasi ea aspernatur vel eos rem quidem repellat nulla.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center space-x-3">
              <FaUtensils className="text-green-600 text-2xl" />
              <span className="font-medium text-white">
                Nutrition Strategies
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <FaLightbulb className="text-green-600 text-2xl" />
              <span className="font-medium text-white">Be Pro Active</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaDumbbell className="text-green-600 text-2xl" />
              <span className="font-medium text-white">Workout Routines</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaUsers className="text-green-600 text-2xl" />
              <span className="font-medium text-white">
                Support & Motivation
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
