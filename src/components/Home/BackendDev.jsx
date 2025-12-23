import { useRef } from "react";
import { NavLink } from "react-router";
import { motion, useInView } from "framer-motion";
import { SiJavascript, SiNodedotjs, SiNpm, SiExpress } from "react-icons/si";
import SvgRealTimeAnalytics from "../../assets/SvgRealTimeAnalytics";
import textStyles from "../../style-strings/text-sizes";

const BackendDev = () => {
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
      <div className="lg:w-[90%]  w-[80%] mx-auto lg:flex lg:flex-row-reverse lg:space-y-0 space-y-10 lg:flex-wrap items-start justify-center">
        <div className="lg:w-[50%] lg:pl-4 2xl:pl-8">
          <motion.div
            className="mb-8"
            ref={ref2}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className={textStyles.subHeader + `text-center`}>Backend Development</h1>
          </motion.div>
          <motion.div
            className="flex justify-evenly my-8 xl:my-4 2xl:my-8"
            ref={ref3}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <NavLink to="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <SiJavascript className={textStyles.header} />
            </NavLink>
            <NavLink to="https://nodejs.org/">
              <SiNodedotjs className={textStyles.header} />
            </NavLink>
            <NavLink to="https://www.npmjs.com/">
              <SiNpm className={textStyles.header} />
            </NavLink>
            <NavLink to="https://expressjs.com/">
              <SiExpress className={textStyles.header} />
            </NavLink>
          </motion.div>
          <motion.div
            className="flex justify-around my-4"
            ref={ref4}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView3 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <ul className={textStyles.standardText + `list-disc pl-5`}>
              <li className="mt-4">
                <span>I create stable and performant APIs and application backends using Express.JS.</span>
              </li>
              <li className="mt-4">
                <span>
                  Running on home servers, my APIs can handle upwards of 300 requests/second with 150ms response times.
                </span>
              </li>
              <li className="mt-4">
                <span>
                  Backend servers are secured with authentication via JWTs, server fingerprint reduction, rate limiting,
                  input sanitation, and secure HTTP cookie transfer.
                </span>
              </li>
              <li className="mt-4">
                <span>I run webDAV file servers using Microsoft IIS, protected with basic authentication.</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="lg:w-[50%] lg:pr-4 2xl:pr-8">
          <motion.div
            className="flex justify-center"
            ref={ref1}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : -25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <SvgRealTimeAnalytics className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BackendDev;
