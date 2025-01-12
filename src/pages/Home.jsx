import { useRef, Suspense, lazy } from "react";
import Header from "../components/Header/Header.jsx";
import { motion, useInView } from "framer-motion";
import Intro from "../components/Intro.jsx";

const BackendDev = lazy(() => import("../components/BackendDev.jsx"));
const FrontendDev = lazy(() => import("../components/FrontendDev.jsx"));
const InfraArchitecture = lazy(() => import("../components/InfraArchitecture.jsx"));
const CyberSecurity = lazy(() => import("../components/CyberSecurity.jsx"));

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
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading...</div>}>
        <BackendDev />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading...</div>}>
        <FrontendDev />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading...</div>}>
        <InfraArchitecture />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading...</div>}>
        <CyberSecurity />
      </Suspense>
    </>
  );
};

export default Home;
