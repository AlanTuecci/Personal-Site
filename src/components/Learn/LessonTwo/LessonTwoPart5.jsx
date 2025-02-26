import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LessonTwoPart5 = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <>
      <div className="lg:w-[90%] lg:my-12 w-[80%] mx-auto lg:flex lg:flex-wrap lg:items-start lg:justify-center">
        <motion.div
          className="mb-4"
          ref={ref2}
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -25 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="lg:text-2xl text-xl font-[googleSans] text-center">This is a sample process life cycle:</p>
          <ul className="pl-5 my-2 lg:text-2xl text-xl list-decimal">
            <li className="mt-2">
              <span>User requests to run program A.</span>
            </li>
            <li className="mt-2">
              <span>
                OS creates a process by creating a PCB for program A.{" "}
                <span className="text-red-600">Process A State: NEW</span>
              </span>
            </li>
            <li className="mt-2">
              <span>
                OS then fetches program data from the hard disk and loads it into RAM.{" "}
                <span className="text-red-600">Process A State: NEW</span>
              </span>
            </li>
            <li className="mt-2">
              <span>
                Program data loaded into RAM and now it's ready for execution. However, they may be other processes
                running or waiting to use the CPU. The OS will therefore place the process into the Ready Queue.
                <span className="text-red-600"> Process A State: READY</span>
              </span>
            </li>
            <li className="mt-2">
              <span>
                Once the other processes are cleared out the ready queue, it can be executed, so the CPU begins
                executing process A. <span className="text-red-600"> Process A State: RUNNING</span>
              </span>
            </li>
            <li className="mt-2">
              <span>
                During execution, process A might want to use an IO device like a hard disk. When the OS sees this, it
                will pause process A's execution, move it into the corresponding IO queue, and begin executing the next
                process in the ready queue.<span className="text-red-600"> Process A State: WAITING</span>
              </span>
            </li>
            <li className="mt-2">
              <span>
                When the hard disk data is fetched, process A will be put back in the ready queue.{" "}
                <span className="text-red-600">Process A State: READY</span>
              </span>
            </li>
            <li className="mt-2">
              <span>
                Some time down the road, process A is done executing, so it is put into a terminated state and all its
                resources are released. <span className="text-red-600">Process A State: TERMINATED</span>
              </span>
            </li>
          </ul>
          <p className="lg:text-2xl text-xl font-[googleSans]">
            Note that processes are not fully gone until its exit status is evaluated by a parent process. Resources
            used by terminated processes must be freed up before the process is fully removed from the system.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default LessonTwoPart5;
