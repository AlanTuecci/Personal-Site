import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SvgDriverDeviceComms from "../../../assets/SvgDriverDeviceComms";

const LessonOnePart9 = () => {
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
      <div className="lg:w-[90%] mt-4 w-[80%] mx-auto lg:flex lg:flex-wrap items-start justify-center">
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
              There are thousands of devices with hundreds of devices being released every day. The OS has to know how
              to communicate with all of them. This is done through the use of device drivers. Drivers are small
              programs that act as an "interpreter" between an OS and a device that helps the OS control the device.
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
              Drivers are device-specific and OS-specific. Drivers for Windows will not work on MacOS or Linux. Drivers
              for an HP ink printer will not work with a Brother laser printer.
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
              Sometimes, an OS will have PnP/UPnP (Plug and Play/ Universal Plug and Play) drivers that allow for the
              system to use some hardware [this is not always functional]. Even if you can use these drivers, it is
              still recommended to have the correct, up-to-date, and specific drivers for your hardware to make sure
              everything runs optimally and as expected.
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
            <SvgDriverDeviceComms className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonOnePart9;
