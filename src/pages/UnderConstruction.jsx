import Header from "../components/Header/Header.jsx";
import { motion } from "framer-motion";
import SvgUnderConstruction from "../assets/SvgUnderConstruction.jsx";

const UnderConstruction = () => {
  return (
    <>
      <Header />
      <div className="mt-20 lg:w-[90%] w-[80%] mx-auto lg:flex lg:space-y-0 space-y-10 flex-wrap items-center justify-between">
        <motion.div
          className="lg:w-[50%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="lg:text-5xl xl:text-6xl text-4xl font-[googleSansBold]">This page is under construction!</h1>
        </motion.div>
        <motion.div
          className="lg:w-[50%] flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <SvgUnderConstruction className="lg:w-[100%] w-[75%]" />
        </motion.div>
      </div>
    </>
  );
};

export default UnderConstruction;
