import { NavLink } from "react-router";
import { motion } from "framer-motion";
import {
  PiMicrosoftOutlookLogoLight,
  PiInstagramLogoLight,
  PiLinkedinLogoLight,
  PiGithubLogoLight,
  PiGoogleLogoLight,
} from "react-icons/pi";
import SvgProgramming from "../../assets/SvgProgramming.jsx";

const Intro = () => {
  return (
    <div className="min-h-[87svh]">
      <div className="lg:w-[90%] mt-10 w-[80%] mx-auto lg:flex lg:space-y-0 space-y-10 flex-wrap items-center justify-between">
        <motion.div
          className="lg:w-[50%] lg:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="lg:text-5xl xl:text-6xl text-4xl font-[googleSansBold]">Alan Tuecci</h1>
          <br />
          <h2 className="lg:text-3xl xl:text-4xl text-xl font-[googleSansMedium]">
            Hi, I'm Alan, a passionate tech enthusiast dedicated to creating sustainable, scalable, and impactful
            solutions with a keen interest in software engineering, networking, and cybersecurity.
          </h2>
          <motion.div
            className="flex xl:space-x-6 lg:space-x-4 space-x-2 my-6"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <NavLink to="https://github.com">
              <PiGithubLogoLight className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="https://www.linkedin.com/">
              <PiLinkedinLogoLight className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="mailto:alan.tuecci@outlook.com">
              <PiMicrosoftOutlookLogoLight className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="mailto:tueccialan@gmail.com">
              <PiGoogleLogoLight className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="https://www.instagram.com/alan.tuecci">
              <PiInstagramLogoLight className="lg:text-5xl xl:text-6xl text-4xl" />
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
          <SvgProgramming className="lg:w-[100%] w-[75%]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
