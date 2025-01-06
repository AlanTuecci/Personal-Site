import { useState } from "react";
import { NavLink } from "react-router";
import { LuMenu, LuX } from "react-icons/lu";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className="md:text-2xl text-xl py-4 px-2 xl-px-4 mx-auto hover:bg-indigo-100 hover:rounded-lg transition-all">
        Home
      </NavLink>
      <NavLink to="/" className="md:text-2xl text-xl py-4 px-2 xl-px-4 mx-auto hover:bg-indigo-100 hover:rounded-lg transition-all">
        Projects
      </NavLink>
      <NavLink to="/" className="md:text-2xl text-xl py-4 px-2 xl-px-4 mx-auto hover:bg-indigo-100 hover:rounded-lg transition-all">
        Learn
      </NavLink>
      <NavLink to="/" className="md:text-2xl text-xl py-4 px-2 xl-px-4 mx-auto hover:bg-indigo-100 hover:rounded-lg transition-all">
        Experience
      </NavLink>
      <NavLink to="/" className="md:text-2xl text-xl py-4 px-2 xl-px-4 mx-auto hover:bg-indigo-100 hover:rounded-lg transition-all">
        Contact Me
      </NavLink>
    </>
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
      <nav className="xl:w-[50%] lg:w-[60%] flex justify-end">
        <div className="hidden w-full justify-evenly lg:flex">
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
