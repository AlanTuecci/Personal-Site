import { useRef } from "react";
import Header from "../components/Header/Header.jsx";
import { motion, useInView } from "framer-motion";
import BackendDev from "../components/BackendDev.jsx";
import FrontendDev from "../components/FrontendDev.jsx";
import InfraArchitecture from "../components/InfraArchitecture.jsx";
import CyberSecurity from "../components/CyberSecurity.jsx";
import Intro from "../components/Intro.jsx";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Header />
      <Intro />
      <motion.div
        className="flex justify-center xl:mb-16 mb-12"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="lg:text-5xl xl:text-6xl text-4xl font-[googleSansBold]">What I do</h1>
      </motion.div>
      <BackendDev />
      <FrontendDev />
      <InfraArchitecture />
      <CyberSecurity />
    </>
  );
};

export default Home;
