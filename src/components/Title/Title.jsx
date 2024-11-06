// eslint-disable-next-line no-unused-vars
import React from "react";
const Title = ({ title, subTitle }) => {
  return (
    <div className="align-middle mt-16 mb-16">
      <p className="text-xl text-blue-500 pl-[45%] uppercase font-semibold tracking-wider">
        {title}
      </p>
      <h2 className="text-4xl text-blue-950 font-extrabold tracking-widest pl-[40.5%] capitalize mt-2">
        {subTitle}
      </h2>
    </div>
  );
};

export default Title;
