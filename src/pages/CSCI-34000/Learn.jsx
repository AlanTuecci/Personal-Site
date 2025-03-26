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
          className="lg:w-[90%] w-[80%] mx-auto lg:my-0 my-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="lg:text-5xl xl:text-6xl text-4xl text-center font-[googleSansBold] pb-6">
            Available Lessons:
          </h2>
          <div className="flex flex-col flex-wrap items-center md:hidden">
            <NavLink to="/learn/lessonOne" className="my-2 md:text-4xl text-2xl px-4 py-2 border-4 rounded-xl">
              Lesson 1
            </NavLink>
            <NavLink to="/learn/lessonTwo" className="my-2 md:text-4xl text-2xl px-4 py-2 border-4 rounded-xl">
              Lesson 2
            </NavLink>
            <NavLink to="/learn/lessonThree" className="my-2 md:text-4xl text-2xl px-4 py-2 border-4 rounded-xl">
              Lesson 3
            </NavLink>
            <NavLink to="/learn/lessonFour" className="my-2 md:text-4xl text-2xl px-4 py-2 border-4 rounded-xl">
              Lesson 4
            </NavLink>
            <NavLink to="/learn/lessonFive" className="my-2 md:text-4xl text-2xl px-4 py-2 border-4 rounded-xl">
              Lesson 5
            </NavLink>
          </div>
          <div className="hidden md:flex flex-col flex-wrap items-center">
            <NavLink to="/learn/lessonOne" className="my-2 md:text-4xl text-2xl px-4 py-2 border-4 rounded-xl">
              Lesson 1 - Operating System Functions
            </NavLink>
            <NavLink to="/learn/lessonTwo" className="my-2 md:text-4xl text-2xl px-4 py-2 border-4 rounded-xl">
              Lesson 2 - Processes
            </NavLink>
            <NavLink to="/learn/lessonThree" className="my-2 md:text-4xl text-2xl px-4 py-2 border-4 rounded-xl">
              Lesson 3 - The fork() Operation
            </NavLink>
            <NavLink to="/learn/lessonFour" className="my-2 md:text-4xl text-2xl px-4 py-2 border-4 rounded-xl">
              Lesson 4 - CSCI 26000 Memory Review
            </NavLink>
            <NavLink to="/learn/lessonFive" className="my-2 md:text-4xl text-2xl px-4 py-2 border-4 rounded-xl">
              Lesson 5 - The exec() Operation
            </NavLink>
          </div>
        </motion.div>
      </Suspense>
    </>
  );
};

export default Learn;
