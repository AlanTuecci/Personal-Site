import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";

const Header = () => {
  return (
    <div className="sticky top-0 z-[20%] w-full py-6">
      <header className="lg:w-[90%] w-[80%] my-1 mx-auto flex flex-wrap items-center justify-between animation-fadeInDown">
        <Logo />
        <Nav />
      </header>
    </div>
  );
};

export default Header;
