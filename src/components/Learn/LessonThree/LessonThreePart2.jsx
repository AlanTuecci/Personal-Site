import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SvgSimpleParentChildRam from "../../../assets/SvgSimpleParentChildRam";

const LessonThreePart2 = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });

  return (
    <>
      <div className="lg:w-[90%] my-12 w-[80%] mx-auto lg:flex lg:flex-row-reverse lg:flex-wrap items-start justify-center">
        <div className="lg:w-[50%] lg:pl-4 xl:pl-8">
          <motion.div
            className="mb-4"
            ref={ref2}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans]">
              Once fork() is called, the new child process will be given an independent memory space from the parent
              process but this space will be an exact copy of the parent's memory contents at that moment.
            </p>
          </motion.div>
          <motion.div
            className="my-4"
            ref={ref3}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans]">
              The only difference that can occur is when the code stores the returned value of the fork() instruction.
              Everything else at that point in time is the same, but these memory spaces are independent of each other
              and may eventually contain different values as the processes continue execution.
            </p>
          </motion.div>
          <motion.div
            className="mt-4"
            ref={ref4}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView3 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans]">
              Additionally, child processes can spawn their own children. Therefore, a process can be both a parent and
              a child at the same time. Keep this in mind when complicated fork problems are encountered.
            </p>
          </motion.div>
        </div>
        <div className="lg:w-[50%] lg:pr-4 xl:pr-8 lg:my-0 mt-4">
          <motion.div
            className="flex justify-center"
            ref={ref1}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : -25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <SvgSimpleParentChildRam className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonThreePart2;
