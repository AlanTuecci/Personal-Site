import { motion } from "framer-motion";
import SvgRealTimeSync from "../../assets/SvgRealTimeSync";

const Intro = () => {
  return (
    <>
      <div className="min-h-[87svh]">
        <div className="lg:w-[90%] mt-10 w-[80%] mx-auto lg:flex lg:space-y-0 space-y-10 flex-wrap items-center justify-between">
          <motion.div
            className="lg:w-[50%] lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="lg:text-5xl xl:text-6xl text-4xl font-[googleSansBold] mb-2">CSCI 34000</h1>
            <h2 className="lg:text-4xl xl:text-5xl text-3xl font-[googleSansBold] mb-8">Operating Systems</h2>
            <h3 className="lg:text-3xl xl:text-4xl text-xl font-[googleSansMedium]">
              This course is a survery of contemporary multiprocessing/multi-programming systems that defines functions
              and components of operating systems. Here systems programs as well as their design, internal structure,
              and implementation are explored.
            </h3>
            <motion.div
              className="xl:space-x-6 lg:space-x-4 space-x-2 my-8"
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="lg:text-xl xl:text-2xl text-lg font-[googleSans]">
                This is my collection of notes and illustrations I made in Professor Shostak's Spring 2024 course. The
                material may have since changed (leading to missing content) and the notes here may have errors.
              </h3>
            </motion.div>
          </motion.div>
          <motion.div
            className="lg:w-[50%] flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <SvgRealTimeSync className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Intro;
