import { Suspense, lazy } from "react";
import Header from "../components/Header/Header.jsx";
import { SiReact, SiExpress, SiPostgresql, SiNginx, SiCloudflare, SiCloudinary, SiCplusplus } from "react-icons/si";
import { NavLink } from "react-router";

const Intro = lazy(() => import("../components/Projects/Intro.jsx"));
const ProjectCard = lazy(() => import("../components/Projects/ProjectCard.jsx"));

const Projects = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Intro...</div>}>
        <Intro />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Project Cards...</div>}>
        <div className="lg:w-[90%] xl:my-10 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 place-items-center">
          <ProjectCard
            name="Business Management Software Suite"
            description="The Business Management Software Suite is a web-based service that allows managers and employees to monitor inventory, back office safe and register cash levels, and time punches. Integrated email services allow for simple employee account creation, and administrative features allow for selective access control of actions on assets."
            image="https://media.licdn.com/dms/image/v2/D4E2DAQFM8rlzOGTaKQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1736645039147?e=1757970000&v=beta&t=VH1scTHQcMMH9FnHHApHfQGzJApLYYUsOPvGflkTReI"
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
              <NavLink
                to="https://alantuecci.dev/bms-suite/"
                className="w-full hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 rounded-full border-slate-900 border-2 transition duration-300 ease-in-out"
              >
                Learn More
              </NavLink>
            }
          />
          <ProjectCard
            name="Operating Systems Web Course"
            description="The Operating Systems Web Course is a website that allows students enrolled in CUNY Hunter College's Operating Systems course to study and visualize concepts related to contemporary multiprocessing systems."
            image="https://media.licdn.com/dms/image/v2/D4E2DAQFOwoOlZiaQKg/profile-treasury-image-shrink_800_800/B4EZfv9_1oH0Ac-/0/1752077697066?e=1757970000&v=beta&t=ZfydlQb_gymLPvdqc-d1oTXgXK8Hkop7Y5-Fosvk65A"
            icons={
              <>
                <SiReact className="lg:text-4xl xl:text-5xl text-3xl mr-2" />
                <SiNginx className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
                <SiCloudflare className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
              </>
            }
            pageLink={
              <NavLink
                to="/learn"
                className="w-full hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 rounded-full border-slate-900 border-2 transition duration-300 ease-in-out"
              >
                Learn More
              </NavLink>
            }
          />
          <ProjectCard
            name="Gallery Application"
            description="The Gallery Application is a full-stack NodeJS application that allows beginner photographers to see images that I have taken in various locations along with the multiple pieces of data to help them recreate and understand how certain image effects are produced."
            image="https://opengraph.githubassets.com/811a1d90882a97b87f23ac399994548ce4666ae7e786e65e225b477df24d3313/AlanTuecci/Gallery-Application"
            icons={
              <>
                <SiReact className="lg:text-4xl xl:text-5xl text-3xl mr-2" />
                <SiExpress className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
                <SiCloudinary className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
              </>
            }
            pageLink={
              <NavLink
                to="/projects/gallery/prospect-park"
                className="w-full hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 rounded-full border-slate-900 border-2 transition duration-300 ease-in-out"
              >
                Learn More
              </NavLink>
            }
          />
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
              <NavLink
                to="https://github.com/AlanTuecci/Operating-System-Simulator"
                className="w-full hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 rounded-full border-slate-900 border-2 transition duration-300 ease-in-out"
              >
                Learn More
              </NavLink>
            }
          />
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
              <NavLink
                to="https://github.com/AlanTuecci/Sorting-Algorithm-Performance-Profiler"
                className="w-full hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 rounded-full border-slate-900 border-2 transition duration-300 ease-in-out"
              >
                Learn More
              </NavLink>
            }
          />
        </div>
      </Suspense>
    </>
  );
};

export default Projects;
