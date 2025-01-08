import { useState } from "react";
import { NavLink } from "react-router";
import { LuMenu, LuX } from "react-icons/lu";

const NavLinks = () => {
  return (
    <ul className="lg:flex 2xl:space-x-6 lg:space-y-0 space-y-4 text-center lg:text-xl text-xl py-4">
      <li>
        <NavLink to="/" className="hover:bg-indigo-100 hover:rounded-lg transition-all lg:mx-2">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="hover:bg-indigo-100 hover:rounded-lg transition-all lg:mx-2">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="hover:bg-indigo-100 hover:rounded-lg transition-all lg:mx-2">
          Learn
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="hover:bg-indigo-100 hover:rounded-lg transition-all lg:mx-2">
          Education
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="hover:bg-indigo-100 hover:rounded-lg transition-all lg:mx-2">
          Experience
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="hover:bg-indigo-100 hover:rounded-lg transition-all lg:mx-2">
          Contact Me
        </NavLink>
      </li>
    </ul>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Tablets/Computers */}
      <nav className="flex justify-end">
        <div className="hidden lg:flex lg:justify-end w-full">
          <NavLinks />
        </div>
        <div className="lg:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <LuX className="md:text-4xl text-2xl" /> : <LuMenu className="md:text-4xl text-2xl" />}
          </button>
        </div>
      </nav>
      {/* Mobile Devices */}
      {isOpen && (
        <div className="lg:hidden flex basis-full flex-col items-center">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
