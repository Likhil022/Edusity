// eslint-disable-next-line no-unused-vars
import React from "react";
import about from "../../assets/about.png";
import about_play from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className=" flex items-center justify-between gap-9 px-[4%] my-44">
      <div className="relative about-left basis-2/5  ">
        <img className="rounded-2xl " src={about} alt="" />
        <div className="w-full h-full bg-gradient-to-b from-black/50 to-black/70">
          <img
            className="absolute top-52 left-56 w-28 "
            src={about_play}
            alt=""
          />
        </div>
      </div>
      <div className="about-right basis-7/12 flex flex-col gap-4">
        <h3 className="uppercase text-2xl font-bold text-blue-700 -my-5">
          ABOUT UNIVERSITY
        </h3>
        <h2 className="text-5xl font-bold leading-normal">
          Nurturing Tomorrow's Leaders Today
        </h2>
        <p className="text-xl  font-medium text-gray-500">
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p className="text-xl  font-medium text-gray-500">
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p className="text-xl  font-medium text-gray-500">
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
