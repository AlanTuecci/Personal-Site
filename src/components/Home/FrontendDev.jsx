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
      <div className="lg:w-[90%] xl:my-20 my-16 w-[80%] mx-auto lg:flex lg:space-y-0 space-y-10 lg:flex-wrap items-start justify-center">
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
              Frontend Development
            </h1>
          </motion.div>
          <motion.div
            className="flex justify-evenly my-8"
            ref={ref3}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <NavLink to="https://developer.mozilla.org/en-US/docs/Web/HTML">
              <SiHtml5 className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <SiCss3 className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <SiJavascript className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="https://nodejs.org/">
              <SiNodedotjs className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="https://create-react-app.dev/">
              <SiCreatereactapp className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="https://react-redux.js.org/">
              <SiRedux className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="https://vite.dev/">
              <SiVite className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="https://tailwindcss.com/">
              <SiTailwindcss className="lg:text-5xl xl:text-6xl text-4xl" />
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
            <ul className="pl-5 lg:text-2xl text-xl list-disc">
              <li className="mt-4">
                <span>I develop website frontends using React.JS and build them with Create-React-App or Vite.</span>
              </li>
              <li className="mt-4">
                <span>Frontend state management is done with React-Redux.</span>
              </li>
              <li className="mt-4">
                <span>Responsive frontend styles are applied using either Tailwind CSS or Vanilla CSS.</span>
              </li>
              <li className="mt-4">
                <span>This website uses React.JS, Vite, and Tailwind CSS.</span>
              </li>
            </ul>
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
            <SvgProgressiveApp className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FrontendDev;
