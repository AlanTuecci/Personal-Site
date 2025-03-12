import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LessonFourPart3 = () => {
  const ref1 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });

  return (
    <>
      <div className="lg:w-[90%] my-12 w-[80%] mx-auto lg:flex lg:flex-wrap lg:items-start lg:justify-center">
        <motion.div
          className="mb-4"
          ref={ref1}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 25 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="xl:text-3xl text-2xl font-[googleSans] text-center">A few things to keep in mind:</p>
          <ul className="pl-7 lg:text-2xl text-xl list-disc">
            <li className="mt-2">
              <span>
                Variables declared outside any functions are known as global variables. Global variables live for as
                long as the program runs. (By the way, if you can, try to avoid using global variables).
              </span>
            </li>
            <li className="mt-2">
              <span>
                Static variables are variables that do not belong to any specific class/object. For example, any and all
                instances of a class will share only one instance of the static variable.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default LessonFourPart3;
