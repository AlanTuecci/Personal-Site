import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SvgLogicalDisks from "../../assets/SvgLogicalDisks";

const LessonOnePart7 = () => {
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
      <div className="lg:w-[90%] w-[80%] mt-4 mx-auto lg:flex lg:flex-wrap items-start justify-center">
        <div className="lg:w-[50%] lg:pr-4 xl:pr-8">
          <motion.div
            className=""
            ref={ref2}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans] pb-2">
              When you get a new hard disk, you have to format it to prepare the disk to use a specific file system.
              Formatting a disk resets the file system, but it does not overwrite the data. This means that the physical
              data is inaccessible, but it is still technically present on the disk. In order to truly erase the data on
              a hard disk, the data needs to be completely overwritten - something which is not done when formatting a
              disk.
            </p>
          </motion.div>
          <motion.div
            className="flex justify-evenly"
            ref={ref3}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              Computers can have 2 OSes installed but only 1 can run at a time. Additionally, these OSes must be
              installed on different physical or logical disks.
            </p>
          </motion.div>
          <motion.div
            className="justify-around"
            ref={ref4}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : -25 }}
            transition={{ duration: 1, delay: isInView3 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              Windows will only see disks C and E - not D. Linux will only see D and E - not C. This is because of the
              file system compatiblilty with different operating systems.
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
            <SvgLogicalDisks className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonOnePart7;
