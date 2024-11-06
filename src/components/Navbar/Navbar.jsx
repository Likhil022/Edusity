// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav
        className="
     
      w-screen fixed flex justify-around items-center h-auto p-4 z-10"
      >
        <img className="w-29 h-9 " src={logo} alt="Edusity Logo" />
        <ul className="text-white flex justify-between items-baseline gap-6">
          <li className="text-lg font-medium tracking-wider">Home</li>
          <li className="text-lg font-medium tracking-wider">Program</li>
          <li className="text-lg font-medium tracking-wider">About Us</li>
          <li className="text-lg font-medium tracking-wider">Campus</li>
          <li className="text-lg font-medium tracking-wider">Testimonials</li>
          <li className="text-lg font-medium tracking-wider">
            <button className="bg-white text-slate-800 rounded-3xl px-6 py-2">
              Contact Us
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
