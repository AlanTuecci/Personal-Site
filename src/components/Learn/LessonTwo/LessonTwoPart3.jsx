import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SvgContextSwitch from "../../../assets/SvgContextSwitch";

const LessonTwoPart3 = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });

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
            <h2 className="xl:text-3xl text-2xl font-[googleSansMedium] text-center">Context Switch</h2>
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
              A context switch is a sequence of steps that the system/computer takes to switch the CPU from executing
              one program to another.
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
            <ul className="pl-5 lg:text-2xl text-xl list-decimal">
              <li className="mt-2">
                <span>Pause execution of process 0</span>
              </li>
              <li className="mt-2">
                <span>
                  Record Program Counter and General Purpose Register values in RAM (specifically in the PCB of process
                  0)
                </span>
              </li>
              <li className="mt-2">
                <span>
                  Load Program Counter and General Purpose Register values from the PCB of process 1 from RAM.
                </span>
              </li>
              <li className="mt-2">
                <span>Execute process 1 from its restored state.</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="justify-around mt-4"
            ref={ref5}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView5 ? 1 : 0, x: isInView5 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView4 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans]">
              Because context switching involves RAM, this process takes some time. The speed depends on many factors.
              Note that syscalls are "slow" (not free execution-wise) because each syscall requires 2 context
              switches (unless its a termination syscall where the program signals that it does not need to keep any of
              its information in its PCB).
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
            <SvgContextSwitch className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonTwoPart3;
