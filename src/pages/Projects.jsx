import { Suspense, useRef } from "react";
import Header from "../components/Header/Header.jsx";
import { SiReact, SiExpress, SiPostgresql, SiNginx, SiCloudflare, SiCloudinary, SiCplusplus } from "react-icons/si";
import { motion } from "framer-motion";

import Intro from "../components/Projects/Intro.jsx";
import ProjectCard from "../components/Projects/ProjectCard.jsx";

const Projects = () => {
  const ref1 = useRef(null);

  return (
    <>
      <Header />
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Intro...</div>}>
        <Intro />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Project Cards...</div>}>
        <div className="lg:w-[90%] xl:my-10 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 place-items-center">
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              name="Business Management Software Suite"
              description="The Business Management Software Suite is a web-based service that allows managers and employees to monitor inventory, back office safe and register cash levels, and time punches. Integrated email services allow for simple employee account creation, and administrative features allow for selective access control of actions on assets."
              image="https://alantuecci.dev/gallery/screenshots/bms-suite.jpg"
              icons={
                <>
                  <SiReact className="lg:text-4xl xl:text-5xl text-3xl mr-2" />
                  <SiExpress className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
                  <SiPostgresql className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
                  <SiNginx className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
                  <SiCloudflare className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
                </>
              }
              pageLink={
                <a
                  href="https://alantuecci.dev/bms-suite/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 rounded-full border-slate-900 border-2 transition duration-300 ease-in-out"
                >
                  Learn More
                </a>
              }
            />
          </motion.div>

          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              name="Operating Systems Web Course"
              description="The Operating Systems Web Course is a website that allows students enrolled in CUNY Hunter College's Operating Systems course to study and visualize concepts related to contemporary multiprocessing systems."
              image="https://alantuecci.dev/gallery/screenshots/os-course.jpg"
              icons={
                <>
                  <SiReact className="lg:text-4xl xl:text-5xl text-3xl mr-2" />
                  <SiNginx className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
                  <SiCloudflare className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
                </>
              }
              pageLink={
                <a
                  href="https://alantuecci.dev/learn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 rounded-full border-slate-900 border-2 transition duration-300 ease-in-out"
                >
                  Learn More
                </a>
              }
            />
          </motion.div>

          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              name="Gallery Application"
              description="The Gallery Application is a full-stack NodeJS application that allows beginner photographers to see images that I have taken in various locations along with the multiple pieces of data to help them recreate and understand how certain image effects are produced."
              image="https://alantuecci.dev/gallery/screenshots/gallery.jpg"
              icons={
                <>
                  <SiReact className="lg:text-4xl xl:text-5xl text-3xl mr-2" />
                  <SiExpress className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
                  <SiNginx className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
                  <SiCloudflare className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
                  <SiCloudinary className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
                </>
              }
              pageLink={
                <a
                  href="https://alantuecci.dev/projects/gallery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 rounded-full border-slate-900 border-2 transition duration-300 ease-in-out"
                >
                  Learn More
                </a>
              }
            />
          </motion.div>

          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              name="Operating System Simulator"
              description="The Operating System Simulator simulates the internal workings of an operating system covering Process Management & Scheduling, Memory Management, and Disk I/O Management."
              image="https://opengraph.githubassets.com/cb2f3e6585120515c4f20adfd4669865e19ffec76e1832f3febfda641dcc617f/AlanTuecci/Operating-System-Simulator"
              icons={
                <>
                  <SiCplusplus className="lg:text-4xl xl:text-5xl text-3xl mr-2" />
                </>
              }
              pageLink={
                <a
                  href="https://github.com/AlanTuecci/Operating-System-Simulator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 rounded-full border-slate-900 border-2 transition duration-300 ease-in-out"
                >
                  Learn More
                </a>
              }
            />
          </motion.div>

          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              name="Sorting Algorithm Performance Profiler"
              description="The Sorting Algorithm Performance Profiler is a C++ application with a user-friendly command-line interface that allows users to run five different sorting algorithms across 9 different inputs ranging from 30,000 to 1,000,000 integers. By timing the execution of each algorithm for the selected inputs and displaying them to the user along with the algorithm’s Big-O complexity, users can better understand how an algorithm's Big-O complexity affects its execution time across different input sizes."
              image="https://opengraph.githubassets.com/8e883eb0c3b32b82d453eea2f087457210db3e50b0c25fed5e83c62d3fd8a698/AlanTuecci/Sorting-Algorithm-Performance-Profiler"
              icons={
                <>
                  <SiCplusplus className="lg:text-4xl xl:text-5xl text-3xl mr-2" />
                </>
              }
              pageLink={
                <a
                  href="https://github.com/AlanTuecci/Sorting-Algorithm-Performance-Profiler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 rounded-full border-slate-900 border-2 transition duration-300 ease-in-out"
                >
                  Learn More
                </a>
              }
            />
          </motion.div>
        </div>
      </Suspense>
    </>
  );
};

export default Projects;
