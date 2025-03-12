import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LessonFourPart4 = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <>
      <div className="lg:w-[90%] my-12 w-[80%] mx-auto lg:flex lg:flex-wrap lg:items-start lg:justify-center">
        <div className="lg:w-[30%] lg:pr-4 xl:pr-8">
          <motion.div
            className="mb-4"
            ref={ref2}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans]">short int count = 0;</p>
            <br />
            <p className="lg:text-2xl text-xl font-[googleSans]">int main() {"{"}</p>
            <p className="pl-4 lg:text-2xl text-xl font-[googleSans]">int num{"{ 5 };"}</p>
            <p className="pl-4 lg:text-2xl text-xl font-[googleSans]">char *ptr = new char[ 100 ];</p>
            <p className="pl-4 lg:text-2xl text-xl font-[googleSans]">
              std::string s{"{"}&quot;Hello&quot;{"};"}
            </p>
            <br />
            <p className="pl-4 lg:text-2xl text-xl font-[googleSans]">return 0;</p>
            <p className="lg:text-2xl text-xl font-[googleSans]">{"}"}</p>
          </motion.div>
        </div>
        <div className="lg:w-[70%] lg:pl-4 xl:pl-8">
          <motion.div
            className=""
            ref={ref1}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : 25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <ul className="pl-7 lg:text-2xl text-xl list-disc">
              <li className="mt-2">
                <span>Variable "count" is a global variable, so it is stored in the data section.</span>
              </li>
              <li className="mt-2">
                <span>
                  Function "main()" is a list of instructions to be executed, so it's stored in the text section.
                </span>
              </li>
              <li className="mt-2">
                <span>Variable "num" is a local variable, so it's stored in the stack.</span>
              </li>
              <li className="mt-2">
                <span>
                  Pointer "ptr" is a local variable whose content is a memory address, so it's stored in the stack.
                </span>
              </li>
              <li className="mt-2">
                <span>std::string is a class. The variable of the object name ("s"), is stored in the stack.</span>
              </li>
              <li className="mt-2">
                <span>The content of the string "s" is dynamically allocated so "Hello" is stored in the heap.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonFourPart4;
