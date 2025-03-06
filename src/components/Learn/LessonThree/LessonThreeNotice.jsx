import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LessonThreeNotice = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <>
      <div className="lg:w-[90%] lg:my-12 w-[80%] mx-auto lg:flex lg:flex-wrap lg:items-start lg:justify-center">
        <motion.div
          className="mb-4"
          ref={ref2}
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -25 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="lg:text-2xl text-xl text-center font-[googleSans]">
            Note: In this course, operations on processes are discussed in terms of POSIX style OSes like Linux. The
            instructions discussed in class will not work on Windows since Windows does the same thing with different
            instructions.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default LessonThreeNotice;
