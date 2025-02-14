import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import Header from "../../components/Header/Header.jsx";

const Intro = lazy(() => import("../../components/Learn/Intro.jsx"));

const Learn = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Intro...</div>}>
        <Intro />
        <motion.div
          className="lg:w-[90%] mt-10 w-[80%] mx-auto flex flex-col flex-wrap items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <NavLink to="/learn/lessonOne" className="my-2 md:text-4xl text-2xl px-4 py-2 border-4 rounded-xl">
            Lesson 1
          </NavLink>
          <NavLink to="/learn/lessonTwo" className="my-2 md:text-4xl text-2xl px-4 py-2 border-4 rounded-xl">
            Lesson 2
          </NavLink>
        </motion.div>
      </Suspense>
    </>
  );
};

export default Learn;
