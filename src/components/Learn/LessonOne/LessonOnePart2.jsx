import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SvgUserKernelMode from "../../../assets/SvgUserKernelMode";

const LessonOnePart2 = () => {
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
            <h1 className="lg:text-4xl xl:text-5xl text-3xl font-[googleSansMedium] text-center">
              Operating System Functions
            </h1>
          </motion.div>
          <motion.div
            className="flex justify-evenly my-6"
            ref={ref3}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <h2 className="xl:text-3xl text-2xl font-[googleSansMedium] text-center">
              1 - Executing Programs [User/Kernel Mode]
            </h2>
          </motion.div>
          <motion.div
            className="justify-around mt-6"
            ref={ref4}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView3 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <div className="lg:text-2xl text-xl font-[googleSans] py-2">
              <p className="py-2">
                The Kernel is a central component of the OS that performs the most important functions. Some OSes have a
                monolithic kernel design, meaning that the kernel does <i>a lot</i>. Others have a microkernel design,
                meaning the kernel performs a limited number of operations.
              </p>
              <p className="py-2">
                A system call (syscall) is a request from the application to the operating system to provide special
                services (The user asks the OS to execute kernel instructions).
              </p>
              <p className="py-2">A running program is also known as a process.</p>
              <p className="py-2">
                Safe (user) instructions can only cause issues within the program. Unsafe (kernel) instructions can
                cause issues across the entire computer. The CPU knows which instructions are safe or unsafe. If the CPU
                is in safe/user mode, it will refuse kernel instructions.
              </p>
              <p className="py-2">
                A syscall is not a request for higher permissions, it is a request for the operating system to do
                something for the program. When a syscall happens, the CPU stops executing the program, switches to
                kernel mode, then runs the OS code, and after that's done, it goes back to user mode and continues
                executing the program code. This process takes some time (system calls are expensive). If something can
                be done without syscalls, don't use syscalls.
              </p>
              <p className="py-2">
                There are multiple Operating System APIs, the most popular being POSIX and Windows. Windows is not POSIX
                compliant, and therefore C++ code that uses the Windows API [#include &lt;Windows.h&gt;] will only run
                on Windows.
              </p>
            </div>
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
            <SvgUserKernelMode className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonOnePart2;
