import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SvgProcessTreeExecution from "../../../assets/SvgProcessTreeExecution";

const LessonTwoPart3 = () => {
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
            <h2 className="xl:text-3xl text-2xl font-[googleSansMedium] text-center">Execution Determinism</h2>
          </motion.div>
          <motion.div
            className="flex justify-evenly my-4"
            ref={ref3}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans]">
              For the purpose of simplicity, this course will always assume that there is a single-threaded environment.
              Nowadays, this is almost never the case. The last x86 single-core/single-thread CPU was launched in 2011.
              What this means for us is that there is no execution determinism. We have no idea what process will be
              executed next due to the nature of multi-threaded CPUs and the increased complexity of process scheduling
              for such CPUs.
            </p>
          </motion.div>
          <motion.div
            className="justify-around my-4"
            ref={ref4}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : -25 }}
            transition={{ duration: 1, delay: isInView3 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans]">
              When analyzing code snippets in this course, you will be drawing process trees and writing possible
              outputs. It is recommended that as you draw the process tree, pretend that each process will execute in
              the order that they are created and will execute until completion. Keep in mind that this is NOT how
              things work out in the real world. We do it this way in this course for simplicity's sake.
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
            <SvgProcessTreeExecution className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonTwoPart3;
