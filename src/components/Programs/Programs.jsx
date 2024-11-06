// eslint-disable-next-line no-unused-vars
import React from "react";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <>
      <div className=" mx-auto w-11/12 flex items-center justify-between gap-12  mb-16">
        <div className="relative">
          <img className="w-[100%] rounded-xl basis-3" src={program_1} alt="" />
          <div className="absolute top-0 left-0 w-full rounded-sm bottom-0 right-0 z-10 bg-[rgba(0,15,152,0.3)] flex flex-col w-[120px] items-center justify-center cursor-pointer opacity-0 pt-40 transition-all duration-500 hover:opacity-100 hover:pt-0">
            <img src={program_icon_1} alt="" />
            <p className="text-white">Graduation Degree</p>
          </div>
        </div>
        <div className="relative">
          <img className="w-[100%] rounded-xl basis-3" src={program_2} alt="" />
          <div className="absolute top-0 left-0 w-full rounded-sm bottom-0 right-0 z-10 bg-[rgba(0,15,152,0.3)] flex flex-col w-[120px] items-center justify-center cursor-pointer opacity-0 pt-40 transition-all duration-500 hover:opacity-100 hover:pt-0">
            <img src={program_icon_2} alt="" />
            <p className="text-white">Masters Degree</p>
          </div>
        </div>
        <div className="relative">
          <img className="w-[100%] rounded-xl basis-3" src={program_3} alt="" />
          <div className="absolute top-0 left-0 w-full rounded-sm bottom-0 right-0 z-10 bg-[rgba(0,15,152,0.3)] flex flex-col w-[120px] items-center justify-center cursor-pointer opacity-0 pt-40 transition-all duration-500 hover:opacity-100 hover:pt-0">
            <img src={program_icon_3} alt="" />
            <p className="text-white">Post-Graduation Degree</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
