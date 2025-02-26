import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SvgProcessStates from "../../../assets/SvgProcessStates";

const LessonTwoPart4 = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  return (
    <>
      <div className="lg:w-[90%] lg:my-12 mt-12 w-[80%] mx-auto lg:flex lg:flex-row-reverse lg:flex-wrap items-start justify-center">
        <div className="lg:w-[50%] lg:pl-4 xl:pl-8">
          <motion.div
            className="mb-4"
            ref={ref2}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="xl:text-3xl text-2xl font-[googleSansMedium] text-center">Process States</h2>
          </motion.div>
          <motion.div
            className="my-4"
            ref={ref3}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans]">These are the 5 process states:</p>
            <ul className="my-2 pl-5 lg:text-2xl text-xl list-disc">
              <li className="mt-2">
                <span>NEW - Process was just created and is not ready to use the CPU yet.</span>
              </li>
              <li className="mt-2">
                <span>READY - Process is ready and willing to use the CPU.</span>
              </li>
              <li className="mt-2">
                <span>RUNNING - Process is currently being executed by the CPU.</span>
              </li>
              <li className="mt-2">
                <span>
                  WAITING - Process is waiting for something, possibly using an IO device, but is not ready to continue
                  executing.
                </span>
              </li>
              <li className="mt-2">
                <span>TERMINATED - Process has finished executing and will not ever use the CPU again.</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="lg:w-[50%] lg:pr-4 xl:pr-8 lg:my-0 my-4">
          <motion.div
            className="flex justify-center border-black border-2"
            ref={ref1}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : -25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <SvgProcessStates className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonTwoPart4;
