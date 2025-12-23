import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import textStyles from "../../style-strings/text-sizes";

const ExperienceCard = ({ experience }) => {
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const calculateDuration = (startDate, endDate) => {
      const start = new Date(startDate);
      const end = endDate ? new Date(endDate) : new Date();

      let totalMonths = (end.getFullYear() - start.getFullYear()) * 12;
      totalMonths -= start.getMonth();
      totalMonths += end.getMonth();
      totalMonths += 1;

      if (totalMonths <= 0) {
        setDuration("");
        return;
      }

      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      let durationString = "";
      if (years > 0) {
        durationString += `${years} yr${years > 1 ? "s" : ""}`;
      }
      if (months > 0) {
        if (durationString.length > 0) {
          durationString += " ";
        }
        durationString += `${months} mo${months > 1 ? "s" : ""}`;
      }

      if (!durationString && totalMonths > 0) {
        durationString = "1 mo";
      }

      setDuration(durationString);
    };

    calculateDuration(experience.startDate, experience.endDate);
  }, [experience.startDate, experience.endDate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="flex w-full items-stretch"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="relative flex flex-col items-center mr-3 lg:mr-0 lg:mx-4 shrink-0">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-300 z-0"></div>

        <motion.div className="relative z-10" variants={childVariants}>
          <img
            src={experience.logoUrl}
            alt={`${experience.company} logo`}
            className="h-12 w-12 lg:h-24 lg:w-24 p-1 rounded-full object-contain bg-white border border-gray-200 shadow-sm"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/50x50/cccccc/ffffff?text=Err";
            }}
          />
        </motion.div>
      </div>

      <div className="flex flex-col grow lg:mx-4 pb-12">
        <motion.h3 variants={childVariants} className={`${textStyles.mediumBoldText} text-gray-900`}>
          {experience.title}
        </motion.h3>

        <motion.p variants={childVariants} className={`${textStyles.smallBoldText} text-gray-800`}>
          {experience.company} · {experience.employmentType}
        </motion.p>

        <motion.p variants={childVariants} className={`${textStyles.smallText} text-gray-500 mt-2`}>
          {experience.dateRange} · {duration}
        </motion.p>

        <motion.p variants={childVariants} className={`${textStyles.smallText} text-gray-500 mb-3`}>
          {experience.location}
        </motion.p>

        <motion.ul
          variants={childVariants}
          className={`${textStyles.smallText} ml-4 lg:ml-6 list-disc space-y-2 text-gray-700 mt-1`}
        >
          {experience.description.map((point, index) => (
            <motion.li key={index} variants={childVariants}>
              {point}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
