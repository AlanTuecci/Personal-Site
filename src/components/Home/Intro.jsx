import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import {
  PiMicrosoftOutlookLogoLight,
  PiInstagramLogoLight,
  PiLinkedinLogoLight,
  PiGithubLogoLight,
  PiGoogleLogoLight,
  PiMapPinAreaLight,
} from "react-icons/pi";
import SvgProgramming from "../../assets/SvgProgramming.jsx";
import textStyles from "../../style-strings/text-sizes.js";

const Intro = () => {
  const [timeEST, setTimeEST] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTimeEST(time);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="lg:w-[90%] my-10 w-[80%] mx-auto lg:flex lg:space-y-0 space-y-10 flex-wrap items-center justify-between">
      <motion.div
        className="lg:w-[50%] lg:pr-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className={textStyles.header}>Alan Tuecci</h1>
        <br />
        <h2 className={textStyles.mediumBoldText}>
          Hi, I'm Alan, a full-stack software engineer dedicated to creating sustainable, scalable, and impactful
          solutions with experience in web development, computer networking, and cybersecurity.
        </h2>
        <div className="flex 2xl:space-x-6 lg:space-x-4 space-x-2 my-6 items-center">
          <NavLink to="/projects/gallery/na/pier-17">
            <PiMapPinAreaLight className={textStyles.header} />
          </NavLink>
          <p className="lg:text-3xl 2xl:text-4xl text-lg font-extralight">
            Brooklyn, New York - {timeEST || "--:--"} EST
          </p>
        </div>
        <div className="flex 2xl:space-x-6 lg:space-x-4 space-x-2 my-6">
          <NavLink to="https://github.com/AlanTuecci">
            <PiGithubLogoLight className={textStyles.header} />
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/alan-tuecci/">
            <PiLinkedinLogoLight className={textStyles.header} />
          </NavLink>
          <NavLink to="mailto:alan.tuecci@outlook.com">
            <PiMicrosoftOutlookLogoLight className={textStyles.header} />
          </NavLink>
          <NavLink to="mailto:tueccialan@gmail.com">
            <PiGoogleLogoLight className={textStyles.header} />
          </NavLink>
          <NavLink to="https://www.instagram.com/alan.tuecci">
            <PiInstagramLogoLight className={textStyles.header} />
          </NavLink>
        </div>
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
  );
};

export default Intro;
