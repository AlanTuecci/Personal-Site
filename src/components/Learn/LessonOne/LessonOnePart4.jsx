import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SvgRamToHdd from "../../../assets/SvgRamToHdd";

const LessonOnePart4 = () => {
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
            className="mb-8"
            ref={ref2}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="xl:text-3xl text-2xl font-[googleSansMedium] text-center">
              3 - Managing RAM [Virtual Memory]
            </h2>
          </motion.div>
          <motion.div
            className="justify-evenly mt-6"
            ref={ref3}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              The OS also isolates the memory used by each program to make sure a program won't accidentally access
              another program's memory.
            </p>
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              OSes use Virtual Memory - a technique used to fake the extension of RAM memory by using the hard disk.
            </p>
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              If a program tries using more memory than is physically present, without Virtual Memory, the program will
              not work.
            </p>
          </motion.div>
          <motion.div
            className="justify-around"
            ref={ref4}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView3 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              Program memory can be moved from RAM to HDD to free up space for other programs or to make it possible for
              the program to use more memory than what is present in RAM.
            </p>
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              Note: The hard disk is much slower than the RAM, so this will lead to memory stalls where the CPU is
              waiting for data, which slows down the computer.
            </p>
          </motion.div>
        </div>
        <div className="lg:w-[50%] lg:pr-4 xl:pr-8">
          <motion.div
            className="flex justify-center"
            ref={ref1}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : -25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <SvgRamToHdd className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonOnePart4;
