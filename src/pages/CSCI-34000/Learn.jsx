import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import Header from "../../components/Header/Header.jsx";

const Intro = lazy(() => import("../../components/Learn/Intro.jsx"));

const lessonData = [
  {
    path: "/learn/lessonOne",
    mobileText: "Lesson 1",
    desktopText: "Lesson 1 - Operating System Functions",
  },
  {
    path: "/learn/lessonTwo",
    mobileText: "Lesson 2",
    desktopText: "Lesson 2 - Processes",
  },
  {
    path: "/learn/lessonThree",
    mobileText: "Lesson 3",
    desktopText: "Lesson 3 - The fork() Operation",
  },
  {
    path: "/learn/lessonFour",
    mobileText: "Lesson 4",
    desktopText: "Lesson 4 - CSCI 26000 Memory Review",
  },
  {
    path: "/learn/lessonFive",
    mobileText: "Lesson 5",
    desktopText: "Lesson 5 - The exec() Operation",
  },
];

const Learn = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Intro...</div>}>
        <Intro />
      </Suspense>

      <motion.div
        className="lg:w-[90%] w-[80%] mx-auto mb-10 mt-10 lg:mt-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl xl:text-5xl text-3xl text-center font-[googleSansBold] pb-6">Available Lessons:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {lessonData.map((lesson) => (
            <NavLink
              key={lesson.path}
              to={lesson.path}
              className={`block w-full text-center md:text-2xl text-xl px-4 py-3 border-2 
                          border-gray-300 rounded-xl font-medium 
                          transition-all duration-300 ease-in-out 
                          hover:bg-gray-100 hover:border-gray-400`}
            >
              <span className="md:hidden">{lesson.mobileText}</span>
              <span className="hidden md:inline">{lesson.desktopText}</span>
            </NavLink>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Learn;
