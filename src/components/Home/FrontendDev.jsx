import { useRef } from "react";
import { NavLink } from "react-router";
import { motion, useInView } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiCreatereactapp,
  SiRedux,
  SiVite,
  SiTailwindcss,
} from "react-icons/si";
import SvgProgressiveApp from "../../assets/SvgProgressiveApp";
import textStyles from "../../style-strings/text-sizes";

const FrontendDev = () => {
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
      <div className="lg:w-[90%] 2xl:my-20 my-16 w-[80%] mx-auto lg:flex lg:space-y-0 space-y-10 lg:flex-wrap items-start justify-center">
        <div className="lg:w-[50%] lg:pr-4 2xl:pr-8">
          <motion.div
            className="mb-8"
            ref={ref2}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className={textStyles.subHeader + "text-center"}>Frontend Development</h1>
          </motion.div>
          <motion.div
            className="flex justify-evenly my-8 xl:my-4 2xl:my-8"
            ref={ref3}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <NavLink to="https://developer.mozilla.org/en-US/docs/Web/HTML">
              <SiHtml5 className={textStyles.header} />
            </NavLink>
            <NavLink to="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <SiCss3 className={textStyles.header} />
            </NavLink>
            <NavLink to="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <SiJavascript className={textStyles.header} />
            </NavLink>
            <NavLink to="https://nodejs.org/">
              <SiNodedotjs className={textStyles.header} />
            </NavLink>
            <NavLink to="https://create-react-app.dev/">
              <SiCreatereactapp className={textStyles.header} />
            </NavLink>
            <NavLink to="https://react-redux.js.org/">
              <SiRedux className={textStyles.header} />
            </NavLink>
            <NavLink to="https://vite.dev/">
              <SiVite className={textStyles.header} />
            </NavLink>
            <NavLink to="https://tailwindcss.com/">
              <SiTailwindcss className={textStyles.header} />
            </NavLink>
          </motion.div>
          <motion.div
            className="flex justify-around my-4"
            ref={ref4}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : -25 }}
            transition={{ duration: 1, delay: isInView3 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <ul className={textStyles.standardText + "pl-5 list-disc"}>
              <li className="mt-4">
                <span>I develop user interfaces using React.JS and build them with Create-React-App or Vite.</span>
              </li>
              <li className="mt-4">
                <span>Frontend state is managed with React-Redux or React Contexts.</span>
              </li>
              <li className="mt-4">
                <span>Clean, responsive frontend styles are created using TailwindCSS.</span>
              </li>
              <li className="mt-4">
                <span>
                  Techniques such as lazy-loading of large assets are used to reduce bundle sizes and improve load
                  times.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="lg:w-[50%] lg:pl-4 2xl:pl-8">
          <motion.div
            className="flex justify-center"
            ref={ref1}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : 25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <SvgProgressiveApp className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FrontendDev;
