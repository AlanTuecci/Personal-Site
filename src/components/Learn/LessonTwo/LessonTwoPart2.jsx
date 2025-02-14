import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SvgPcbClass from "../../../assets/SvgPcbClass";

const LessonTwoPart2 = () => {
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
            <h2 className="xl:text-3xl text-2xl font-[googleSansMedium] text-center">
              Process Control Block (PCB): A record that describes a process
            </h2>
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
              A Process Control Block contains many pieces of information associated with a specific process, including
              these:
            </p>
            <ul className="pl-5 lg:text-2xl text-xl list-disc">
              <li className="mt-2">
                <span>Process State - The state may be new, ready, running, waiting, or terminated.</span>
              </li>
              <li className="mt-2">
                <span>Program Counter - The address of the next instruction to be executed for this process.</span>
              </li>
              <li className="mt-2">
                <span>
                  Register File - A collection of the values within the general-purpose CPU registers. Note that while
                  the values in the CPU registers are constantly being updated, the values in the PCB are updated only
                  by the OS when it wants to.
                </span>
              </li>
              <li className="mt-2">
                <span>
                  I/O Status Information - This includes a list of I/O devices allocated to a process, a list of open
                  files, and so on.
                </span>
              </li>
              <li className="mt-2">
                <span>
                  RAM Management Information - The PCB does not store the actual chunk of memory used by the process.
                  Instead, it stores some information about where the process is located in RAM.
                </span>
              </li>
              <li className="mt-2">
                <span>
                  CPU Scheduling Information - This stores information like process priority and other scheduling
                  parameters. This is used to help the OS manage the CPU and choose which process is executed next.
                </span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="mt-4"
            ref={ref4}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView3 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans] my-2">
              A process cannot access its own PCB. The PCB is owned and managed by only the OS.
            </p>
            <p className="lg:text-2xl text-xl font-[googleSans] my-2">
              The PCBs of all running programs are stored in a Process Table.
            </p>
          </motion.div>
        </div>
        <div className="lg:w-[50%] lg:pr-4 xl:pr-8 lg:my-0 mt-4">
          <motion.div
            className="flex justify-center border-black border-2"
            ref={ref1}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : -25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <SvgPcbClass className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonTwoPart2;
