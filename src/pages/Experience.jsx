import Header from "../components/Header/Header.jsx";
import { motion } from "framer-motion";
import ExperienceCard from "../components/Experience/ExperienceCard.jsx";

import GSOE_logo from "../assets/logos/GSOE_logo.jpg";
import Hunter_logo from "../assets/logos/Hunter_logo.webp";
import McDonaldsLogo from "../assets/logos/McDonalds_logo.webp";
import SvgStudy from "../assets/SvgStudy.jsx";
import textStyles from "../style-strings/text-sizes.js";

const experienceData = [
  {
    logoUrl: McDonaldsLogo,
    company: "McDonald's",
    title: "Shift Manager & Operations Technology Person",
    employmentType: "Part-time",
    dateRange: "Dec 2022 - Present",
    startDate: "2022-12-01",
    location: "Brooklyn, New York, United States",
    description: [
      "Ensure proper and reliable operation of the back-office and restaurant host servers, network switches, and point-of-sale systems such as cash registers, order kiosks, Mobile Order and Pay services, and McDelivery systems.",
      "Achieved a 30% reduction in pre-shift planning times across multiple franchise restaurants by creating customized shift planning tools to suit each restaurant's needs and floor layouts.",
      "Run shifts and make sure that customers have fast, accurate, and friendly experiences with each visit.",
      "Conduct travel paths and engage in effective communication with the crew and management team to rapidly identify and resolve any issues that may have arisen before and during the shift.",
    ],
  },
  {
    logoUrl: GSOE_logo,
    company: "CCNY Grove School of Engineering",
    title: "Software Engineer Intern",
    employmentType: "Internship",
    dateRange: "Jun 2025 - Aug 2025",
    startDate: "2025-06-01",
    endDate: "2025-08-31",
    location: "New York, New York, United States",
    description: [
      "Developed 17 REST API endpoints for a student collaboration platform using ExpressJS and PostgreSQL. ",
      "Engineered the backend to handle production-level loads, benchmarking all endpoints to achieve an average response time of 150ms under a load of 300 requests/second.",
      "Achieved a Largest Contentful Paint time of 1.1s by refactoring the frontend, focusing on implementing lazy loading of large assets and image compression.",
    ],
  },
  {
    logoUrl: Hunter_logo,
    company: "Hunter College",
    title: "Undergraduate Teaching Assistant",
    employmentType: "Part-time",
    dateRange: "Jan 2025 - May 2025",
    startDate: "2025-01-25",
    endDate: "2025-05-25",
    location: "New York, New York, United States",
    description: [
      "Launched a web platform to help students visualize and understand concepts related to contemporary multiprocessing systems.",
      "Tutored and held discussions with students on course topics, tailoring to individual needs from a class of ~220 students. ",
      "Aggregated data as well as graded assignments and exams using the Turnitin Gradescope platform.",
    ],
  },
];

const Experience = () => {
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
          <h1 className={textStyles.header}>Work Experience</h1>
          <br />
          <h2 className={textStyles.mediumBoldText}>
            This is a detailed look at my professional experience, highlighting a blend of software engineering, IT
            management, and mentorship. From developing scalable backend APIs and optimizing frontend performance to
            ensuring the reliability of business-critical systems, this timeline showcases my key contributions and
            technical growth.
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
      <div className="w-[80%] mt-12 mb-8 mx-auto flex justify-center">
        <div className="flex flex-col">
          {experienceData.map((exp, index) => (
            <div key={index} className="w-full">
              <ExperienceCard experience={exp} isLast={index === experienceData.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
