import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="md:hidden text-white relative z-10">
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="material-symbols-rounded text-white">menu</span>
        </button>
      </div>

      <div
        className={`${
          isMenuOpen
            ? "block bg-gray-700 absolute top-[80%] right-4 p-3 pr-10 rounded-lg"
            : "hidden"
        } md:block`}
      >
        <nav>
          <ul className="flex lg:justify-around lg:items-center flex-col md:flex-row gap-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-400 font-bold "
                    : "text-white font-bold hover:text-gray-400 transition-colors duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-400 font-bold"
                    : "text-white font-bold hover:text-gray-400 transition-colors duration-300"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-400 font-bold"
                    : "text-white font-bold hover:text-gray-400 transition-colors duration-300"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
