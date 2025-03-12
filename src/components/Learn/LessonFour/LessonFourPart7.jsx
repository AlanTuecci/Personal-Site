import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LessonFourPart7 = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <>
      <div className="lg:w-[90%] my-12 w-[80%] mx-auto lg:flex lg:flex-wrap lg:items-start lg:justify-center">
        <div className="lg:w-[45%] lg:pr-4 xl:pr-8">
          <motion.div
            className="mb-4"
            ref={ref2}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans]">/**</p>
            <p className="pl-2 lg:text-2xl text-xl font-[googleSans]">Static array</p>
            <p className="pl-2 lg:text-2xl text-xl font-[googleSans]">Here, allocation occurs on stack</p>
            <p className="pl-2 lg:text-2xl text-xl font-[googleSans]">
              This is done since allocation will only be done once
            </p>
            <p className="lg:text-2xl text-xl font-[googleSans]">**/</p>
            <p className="lg:text-2xl text-xl font-[googleSans]">std::array{"<int, 1000>"} nums;</p>
            <br />
            <p className="lg:text-2xl text-xl font-[googleSans]">/**</p>
            <p className="pl-2 lg:text-2xl text-xl font-[googleSans]">Dynamic array</p>
            <p className="pl-2 lg:text-2xl text-xl font-[googleSans]">Here, allocation occurs on heap</p>
            <p className="pl-2 lg:text-2xl text-xl font-[googleSans]">
              This is done since reallocations may be necessary
            </p>
            <p className="lg:text-2xl text-xl font-[googleSans]">**/</p>
            <p className="lg:text-2xl text-xl font-[googleSans]">
              std::vector{"<int>"} nums2{"(1000);"}
            </p>
          </motion.div>
        </div>
        <div className="lg:w-[55%] lg:pl-4 xl:pl-8">
          <motion.div
            className=""
            ref={ref1}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : 25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="xl:text-3xl text-2xl font-[googleSansMedium] text-center">
              The stack is fast. The heap is slow.
            </h2>
            <p className="my-2 lg:text-2xl text-xl font-[googleSans]">
              This is misleading to an extent. Memory access from the stack takes the same amount of time as it would
              from the heap.
            </p>
            <p className="my-2 lg:text-2xl text-xl font-[googleSans]">It is memory allocations that takes time.</p>
            <p className="my-2 lg:text-2xl text-xl font-[googleSans]">
              Since stacks have a stack pointer, memory allocation is merely a matter of incrementing the stack pointer.
            </p>
            <p className="my-2 lg:text-2xl text-xl font-[googleSans]">
              Heaps, on the other hand, don't have such a luxury. Heaps are fragmented spaces, and systems must scan
              through the heap and find free space. This process takes more time than it would with incrementing a
              pointer.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonFourPart7;
