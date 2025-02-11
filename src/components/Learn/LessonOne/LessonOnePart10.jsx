import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SvgComputerNetworking from "../../../assets/SvgComputerNetworking";

const LessonOnePart10 = () => {
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
            <h2 className="xl:text-3xl text-2xl font-[googleSansMedium] text-center">6 - Networking [Protocols]</h2>
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
              The operating system is responsible for implementing computer networking.
            </p>
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              It defines/implements networking protocols for computer-to-computer network communication.
            </p>
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              It also defines/controls all hardware/software interactions with anything network-related.
            </p>
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              Network protocols are used to standardize how computers communicate over networks. There are different
              types of protocols that function on different levels.
            </p>
          </motion.div>
          <motion.div
            className="justify-around my-2"
            ref={ref4}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView3 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <h3 className="lg:text-2xl text-xl text-center font-[googleSans]">Here are some examples:</h3>
            <ol className="ml-7 lg:text-2xl text-xl list-decimal">
              <li className="mt-2">
                <span>Application: HTTP - Used to load/display webpages.</span>
              </li>
              <li className="mt-2">
                <span>
                  Physical Network Link: 802.11 Wi-Fi - Used to specify the physical details of the connection such as
                  how the wires/signals are configured and used.
                </span>
              </li>
              <li className="mt-2">
                <span>
                  Data Transmission: TCP/IP - Used to specify how packets/bits of information are sent between computers
                  over the internet.
                </span>
              </li>
            </ol>
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
            <SvgComputerNetworking className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonOnePart10;
