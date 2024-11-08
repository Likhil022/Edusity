// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  // Add event listener on mount and remove it on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav
        className={`${
          sticky ? "bg-blue-900 shadow-md" : "bg-transparent"
        } w-screen fixed flex justify-around items-center h-auto p-4 z-10`}
      >
        <img className="w-29 h-9 " src={logo} alt="Edusity Logo" />
        <ul className="text-white flex justify-between items-baseline gap-6 text-lg font-medium tracking-wider">
          <li>Home</li>
          <li>Program</li>
          <li>About Us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li>
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
