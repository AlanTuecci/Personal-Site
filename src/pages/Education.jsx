import Header from "../components/Header/Header.jsx";
import { motion } from "framer-motion";
import ExperienceCard from "../components/Experience/ExperienceCard.jsx";

import Hunter_logo from "../assets/logos/Hunter_logo.webp";
import LMGHS_logo from "../assets/logos/LMGHS_logo.webp";
import SvgStudy from "../assets/SvgStudy.jsx";

const educationData = [
  {
    logoUrl: Hunter_logo,
    company: "Bachelor's of Arts",
    title: "CUNY Hunter College",
    employmentType: "Computer Science",
    dateRange: "Aug 2021 - May 2025",
    startDate: "2021-08-25",
    endDate: "2025-05-25",
    location: "New York, New York, United States",
    description: [
      "GPA: 3.55",
      "Graduated Cum Laude with Departamental Honors in Computer Science.",
      "Hunter College Dean's List member for all semesters between Fall 2023 - Spring 2025.",
    ],
  },
  {
    logoUrl: LMGHS_logo,
    company: "Advanced Regents Diploma",
    title: "Leon M. Goldstein High School for the Sciences",
    employmentType: "High School Diploma",
    dateRange: "September 2017 - June 2021",
    startDate: "2017-09-06",
    endDate: "2021-06-26",
    location: "Brooklyn, New York, United States",
    description: ["GPA: 4.0"],
  },
];

const Education = () => {
  return (
    <>
      <Header />
      <div className="lg:w-[90%] mt-10 lg:mt-0 w-[80%] mx-auto lg:flex flex-wrap items-center justify-between">
        <motion.div
          className="my-6 lg:w-[50%] lg:pr-14"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="lg:text-4xl xl:text-5xl text-3xl font-[googleSansBold]">Education Record</h1>
          <br />
          <h2 className="lg:text-xl xl:text-2xl text-lg font-[googleSansMedium]">
            This is a detailed look at my academic journey, from a science high school to earning a Computer Science
            degree with honors. Here are the institutions and achievements that have shaped my technical foundation.
          </h2>
        </motion.div>
        <motion.div
          className="my-6 lg:w-[50%] flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <SvgStudy className="lg:w-[100%] w-[75%]" />
        </motion.div>
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg shadow-md p-6">
            <div className="relative border-l-2 border-gray-200  ml-4">
              <div className="space-y-12">
                {educationData.map((exp, index) => (
                  <div key={index} className="relative pl-10">
                    <span className="absolute -left-[13px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-200 ring-8 ring-white " />
                    <ExperienceCard experience={exp} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
