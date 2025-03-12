import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SvgRamSections from "../../../assets/SvgRamSections";

const LessonFourPart2 = () => {
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
              The memory space occupied by a program can be represented as a diagram.
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
            <p className="my-2 lg:text-2xl text-xl font-[googleSans]">
              The stack contains all kinds of temporary data used by functions such as return registers, function
              parameters, local variables, and so on. An important property of the stack is that it "grows down and
              shrinks up."
            </p>
            <p className="my-2 lg:text-2xl text-xl font-[googleSans]">
              The heap is where dynamic memory allocations occur (like when using malloc() in C or "new" in C++). An
              important property of the heap is that it "fragments" and "grows up and shrinks down."
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
            <p className="my-2 lg:text-2xl text-xl font-[googleSans]">
              The data section is where data that exists for as long as the program runs (like static and global
              variables) are stored.
            </p>
            <p className="my-2 lg:text-2xl text-xl font-[googleSans]">
              The text section is where all instructions/program code is stored.
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
            <SvgRamSections className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonFourPart2;
