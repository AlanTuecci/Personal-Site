import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LessonOnePart8 = () => {
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
      <div className="lg:w-[90%] mt-8 w-[80%] mx-auto lg:flex lg:flex-row-reverse lg:space-y-0 space-y-10 lg:flex-wrap items-start justify-center">
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
              5 - Managing I/O [Drivers & Interrupts]
            </h2>
          </motion.div>
          <motion.div
            className="justify-evenly"
            ref={ref3}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              Whenever a program wants to use an I/O device, it must do it through the operating system. When a user
              presses a key, the operating system alerts the program. These alerts are called interrupts.
            </p>
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              Interrupts are signals about important events that require immediate attention. Such events can be:
              keyboard inputs, mouse movements, etc.
            </p>
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              There are also event handlers. They are similar to interrupt handlers, but they run on a higher level.
            </p>
          </motion.div>
          <motion.div
            className="justify-around my-2"
            ref={ref4}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView3 ? 0.2 : 0 }}
            viewport={{ once: true }}
          ></motion.div>
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
            <div className="border-black border-2 p-4">
              <h3 className="lg:text-2xl text-xl text-center font-[googleSans]">
                These are the steps for an interrupt:
              </h3>
              <ol className="ml-7 lg:text-2xl text-xl list-decimal">
                <li className="mt-4">
                  <span>Interrupt appears/ Interrupt is raised</span>
                </li>
                <li className="mt-4">
                  <span>Interrupt travels to CPU</span>
                </li>
                <li className="mt-4">
                  <span>CPU pauses all current activities/running programs</span>
                </li>
                <li className="mt-4">
                  <span>
                    CPU runs interrupt handler/ Interrupt Service Routine (ISR) [The code used to process the interrupt]
                  </span>
                </li>
                <li className="mt-4">
                  <span>CPU returns to regular activities.</span>
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonOnePart8;
