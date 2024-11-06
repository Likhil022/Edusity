// eslint-disable-next-line no-unused-vars
import React from "react";
import hero from "../../assets/hero.png";
const Hero = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="bg-cover h-screen "
      ></div>
      <div className="absolute inset-0 bg-black opacity-70">
        <div className="text-white align-middle text-center justify-center items-center mt-80 mx-44 ">
          <h1 className="px-52 text-3xl font-bold tracking-wide mb-4">
            We ensure better education for a better world
          </h1>
          <p className="px-52 justify-center text-xl max-lg mb-4">
            Our cutting edge ciricullum is designed to empower students with the
            knowledge , skills, experience needed to excell in the dynamic field
            of education.
          </p>
          <button className="bg-white text-xl text-slate-900 w-auto text-extrabold rounded-3xl mt-3 px-10 py-3">
            Expolore More
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
