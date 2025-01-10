import { NavLink } from "react-router";

const Logo = () => {
  return (
    <>
      <NavLink to="/">
        <span className="md:text-4xl lg:text-3xl text-2xl font-['Segoe-UI']">&lt; </span>
        <span className="md:text-4xl lg:text-4xl text-2xl font-agustina ">Alan Tuecci</span>
        <span className="md:text-4xl lg:text-3xl text-2xl font-['Segoe-Ui']"> /&gt;</span>
      </NavLink>
      <div></div>
    </>
  );
};

export default Logo;
