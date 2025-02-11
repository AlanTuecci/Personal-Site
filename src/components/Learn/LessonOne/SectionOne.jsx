import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SectionOne = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="flex justify-center my-16"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="lg:text-5xl xl:text-6xl text-4xl text-center font-[googleSansBold]">
        Lesson One - Operating System Introduction
      </h1>
    </motion.div>
  );
};

export default SectionOne;
