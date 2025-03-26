import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SvgAppOsHardware from "../../../assets/SvgAppOsHardware";

const LessonOnePart1 = () => {
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
            className="mb-8"
            ref={ref2}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="lg:text-4xl xl:text-5xl text-3xl font-[googleSansMedium] text-center">
              What is an Operating System?
            </h1>
          </motion.div>
          <motion.div
            className="flex justify-evenly my-6"
            ref={ref3}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <h2 className="lg:text-2xl xl:text-3xl text-xl font-[googleSans] text-center">
              An operating system is a program that manages hardware and provides other programs with an operating
              environment (an environment to run in).
            </h2>
          </motion.div>
          <motion.div
            className="justify-around my-6"
            ref={ref4}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : -25 }}
            transition={{ duration: 1, delay: isInView3 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <h3 className="lg:text-2xl text-xl font-[googleSans]">These are some examples of operating systems:</h3>
            <ul className="pl-5 lg:text-2xl text-xl list-disc">
              <li className="mt-2">
                <span>Laptop/Desktop: Windows, MacOS, Linux, ChromeOS</span>
              </li>
              <li className="mt-2">
                <span>Servers/Mainframes: Windows Server, Unix</span>
              </li>
              <li className="mt-2">
                <span>Embedded Systems: TyniOS, VxWorld</span>
              </li>
              <li className="mt-2">
                <span>Mobile Devices: Android, iOS/iPadOS</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="justify-around mt-6"
            ref={ref5}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView5 ? 1 : 0, x: isInView5 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView4 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              App developers only need to develop for certain OSes, which means they don't need to worry about
              communication with unique hardware.
            </p>
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              Hardware interactions are handled by the Operating System.
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
            <SvgAppOsHardware className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonOnePart1;
