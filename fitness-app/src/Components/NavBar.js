import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-400 via-yellow-200 to-yellow-300 rounded-t-3xl shadow-lg mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4 md:px-8 py-3">
      {/* Hamburger icon - visible only on mobile */}
      <div className="flex items-center justify-between md:hidden">
        <span className="font-bold text-lg text-blue-900 px-2">Menu</span>
        <button
          className="focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {/* Hamburger icon (SVG) */}
          <svg className="h-8 w-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* Links: always visible on md+, dropdown on mobile (open) */}
      <div className={`flex-col md:flex md:flex-row md:justify-center md:items-center w-full ${open ? "flex" : "hidden"} md:gap-y-0 gap-y-2 gap-x-1 sm:gap-x-2 md:gap-x-3 mt-3 md:mt-0`}>
        {["/", "/profile", "/progress", "/chat"].map((path, i) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => (
              (isActive
                ? "mx-1 sm:mx-2 md:mx-3 px-3 sm:px-4 md:px-5 py-2 bg-blue-300 text-blue-900 rounded-full font-semibold"
                : "mx-1 sm:mx-2 md:mx-3 px-3 sm:px-4 md:px-5 py-2 text-blue-900 font-semibold hover:text-blue-700 transition"
              ) + " text-base sm:text-lg"
            )}
            onClick={() => setOpen(false)} // closes menu on link click
          >
            {["Home", "Profile", "Progress", "Chat"][i]}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
