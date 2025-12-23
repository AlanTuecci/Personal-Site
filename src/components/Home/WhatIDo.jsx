import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import textStyles from "../../style-strings/text-sizes";

const WhatIDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="flex justify-center 2xl:mt-16 my-12"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className={textStyles.header}>My Skillset</h1>
    </motion.div>
  );
};

export default WhatIDo;
