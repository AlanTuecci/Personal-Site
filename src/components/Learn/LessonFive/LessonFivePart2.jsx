import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SvgExecProcessTree from "../../../assets/SvgExecProcessTree";

const LessonFivePart2 = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <>
      <div className="lg:w-[90%] my-12 w-[80%] mx-auto lg:flex lg:flex-row-reverse lg:flex-wrap items-start justify-center">
        <div className="lg:w-[50%] lg:pl-4 xl:pl-8">
          <motion.div
            className="mb-4"
            ref={ref2}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans]">// Example 1</p>
            <p className="lg:text-2xl text-xl font-[googleSans]">int main() {"{"}</p>
            <p className="lg:text-2xl text-xl font-[googleSans]">&nbsp;int num = fork();</p>
            <p className="lg:text-2xl text-xl font-[googleSans]">&nbsp;if(num == 0) {"{"}</p>
            <p className="lg:text-2xl text-xl font-[googleSans]">&nbsp;&nbsp;exec("./next_prog");</p>
            <p className="lg:text-2xl text-xl font-[googleSans]">&nbsp;{"}"}</p>
            <p className="lg:text-2xl text-xl font-[googleSans]">{"}"}</p>
            <br />
            <p className="lg:text-2xl text-xl font-[googleSans]">// Example 2 (exact same outcome as example 1)</p>
            <p className="lg:text-2xl text-xl font-[googleSans]">int main() {"{"}</p>
            <p className="lg:text-2xl text-xl font-[googleSans]">&nbsp;if(!fork()) {"{"}</p>
            <p className="lg:text-2xl text-xl font-[googleSans]">&nbsp;&nbsp;exec("./next_prog");</p>
            <p className="lg:text-2xl text-xl font-[googleSans]">&nbsp;{"}"}</p>
            <p className="lg:text-2xl text-xl font-[googleSans]">{"}"}</p>
          </motion.div>
        </div>
        <div className="lg:w-[50%] lg:pr-4 xl:pr-8 lg:my-0 mt-4">
          <motion.div
            className="flex justify-center"
            ref={ref1}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : -25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <SvgExecProcessTree className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonFivePart2;
