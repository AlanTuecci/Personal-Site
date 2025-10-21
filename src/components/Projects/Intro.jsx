import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { PiLinkedinLogoLight, PiGithubLogoLight } from "react-icons/pi";
import SvgProjects from "../../assets/SvgProjects";

const Intro = () => {
  return (
    <div className="">
      <div className="lg:w-[90%] mt-10 w-[80%] mx-auto lg:flex lg:space-y-0 space-y-10 flex-wrap items-center justify-between">
        <motion.div
          className="lg:w-[50%] lg:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="lg:text-5xl xl:text-6xl text-4xl font-[googleSansBold]">My Portfolio</h1>
          <br />
          <h2 className="lg:text-3xl xl:text-4xl text-xl font-[googleSansMedium]">
            This is my complete collection of software projects that I built over the years, each designed to solve
            real-world problems and showcase my skills.
          </h2>
          <motion.div
            className="flex xl:space-x-6 lg:space-x-4 space-x-2 my-6"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <NavLink to="https://github.com/AlanTuecci">
              <PiGithubLogoLight className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/alan-tuecci/">
              <PiLinkedinLogoLight className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
          </motion.div>
        </motion.div>
        <motion.div
          className="lg:w-[50%] flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <SvgProjects className="lg:w-[100%] w-[75%]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
