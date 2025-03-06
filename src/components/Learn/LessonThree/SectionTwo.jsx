import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { NavLink } from "react-router";

const SectionTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="flex flex-wrap justify-center w-full my-16"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <NavLink to="/learn/lessonTwo" className="mx-auto my-2 md:text-4xl text-2xl px-4 py-2 border-4 rounded-xl">
        Lesson 2
      </NavLink>
      <NavLink to="/learn" className="mx-auto my-2 md:text-4xl text-2xl px-4 py-2 border-4 rounded-xl">
        Coming Soon
      </NavLink>
    </motion.div>
  );
};

export default SectionTwo;
