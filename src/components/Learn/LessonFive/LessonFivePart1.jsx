import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SvgExecSteps from "../../../assets/SvgExecSteps";

const LessonFivePart1 = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  return (
    <>
      <div className="lg:w-[90%] my-12 w-[80%] mx-auto lg:flex lg:flex-wrap lg:items-start lg:justify-center">
        <div className="lg:w-[50%] lg:pr-4 xl:pr-8">
          <motion.div
            className="mb-4"
            ref={ref2}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="my-2 lg:text-2xl text-xl font-[googleSans]">
              Typically, fork() instructions are used in combination with the exec() instruction.
            </p>
            <p className="my-2 lg:text-2xl text-xl font-[googleSans]">
              As a parameter, exec() takes a filename as a parameter.
            </p>
          </motion.div>
          <motion.div
            className="my-4"
            ref={ref3}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <p className="my-2 lg:text-2xl text-xl font-[googleSans]">
              When exec() is called, the Operating System wipes <b>all</b> the program code and data related to a
              process.
            </p>
            <p className="my-2 lg:text-2xl text-xl font-[googleSans]">
              exec() is commonly used with fork() instructions to spawn a child process that has different code from the
              parent process. Recall that fork() produces a process duplicate that will follow the same execution path
              as the parent unless conditional logic is used. While this is fine for smaller applications, it can become
              inconvenient and messy in larger ones. exec() helps alleviate these concerns since an entirely new file
              will be executed, which make keep code cleaner.
            </p>
          </motion.div>
        </div>
        <div className="lg:w-[50%] lg:pl-4 xl:pl-8">
          <motion.div
            className="flex justify-center"
            ref={ref1}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : 25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <SvgExecSteps className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonFivePart1;
