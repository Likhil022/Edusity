// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Title = ({ title, subTitle }) => {
  return (
    <div className="mt-16 mb-16 text-center">
      {title && (
        <p className="text-xl text-blue-500 uppercase font-semibold tracking-wider">
          {title}
        </p>
      )}
      {subTitle && (
        <h2 className="text-4xl text-blue-950 font-extrabold tracking-widest capitalize mt-2">
          {subTitle}
        </h2>
      )}
    </div>
  );
};

export default Title;
