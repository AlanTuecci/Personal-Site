import { motion } from "framer-motion";
import Header from "../components/Header/Header.jsx";
import ExperienceCard from "../components/Experience/ExperienceCard.jsx";

import Hunter_logo from "../assets/logos/Hunter_logo.webp";
import LMGHS_logo from "../assets/logos/LMGHS_logo.webp";
import SvgReading from "../assets/SvgReading.jsx";
import textStyles from "../style-strings/text-sizes.js";

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
    dateRange: "Sep 2017 - Jun 2021",
    startDate: "2017-09-06",
    endDate: "2021-06-26",
    location: "Brooklyn, New York, United States",
    description: ["GPA: 4.0", "Regents Advanced Designation with Honor, with Math, and with Science"],
  },
];

const Education = () => {
  return (
    <>
      <Header />
      <div className="lg:w-[90%] w-[90%]  mt-10 mx-auto lg:flex lg:space-y-0 space-y-10 flex-wrap items-center justify-between">
        <motion.div
          className="my-6 lg:w-[50%] lg:pr-14"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className={textStyles.header}>Education Record</h1>
          <br />
          <h2 className={textStyles.mediumBoldText}>
            This is a detailed look at my academic journey, from a science high school to earning a Computer Science
            degree with honors. These are the institutions and achievements that have shaped my technical foundation.
          </h2>
        </motion.div>
        <motion.div
          className="my-6 lg:w-[50%] flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <SvgReading className="lg:w-[100%] w-[75%]" />
        </motion.div>
      </div>

      <div className="lg:w-[90%] w-[90%] max-w-7xl mt-12 mb-8 mx-auto">
        <div className="flex flex-col w-full">
          {educationData.map((exp, index) => (
            <div key={index} className="w-full">
              <ExperienceCard experience={exp} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
