import { motion } from "framer-motion";
import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";

const Header = () => {
  return (
    <motion.div
      className="sticky top-0 z-[20%] w-full py-6 bg-[#fbfbfe] border-b-2"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <header className="lg:w-[90%] w-[80%] my-1 mx-auto flex flex-wrap items-center justify-between">
        <Logo />
        <Nav />
      </header>
    </motion.div>
  );
};

export default Header;
