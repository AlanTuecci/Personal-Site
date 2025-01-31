import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SvgFileSystemTable from "../../assets/SvgFileSystemTable";

const LessonOnePart5 = () => {
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
            <h2 className="xl:text-3xl text-2xl font-[googleSansMedium] text-center">
              4 - Managing Storage [File System and Disk Partitions]
            </h2>
          </motion.div>
          <motion.div
            className="flex justify-evenly my-8"
            ref={ref3}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <h2 className="lg:text-2xl xl:text-3xl text-xl font-[googleSans] text-center">
              The hard disk can only read and write. It does not know what is where or where is what. The OS is what
              maps and decodes the contents of the disk. When programs want to read a file from the hard drive, it must
              do it through the OS.
            </h2>
          </motion.div>
          <motion.div
            className="justify-around my-8"
            ref={ref4}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : -25 }}
            transition={{ duration: 1, delay: isInView3 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">Operating Systems have File Systems.</p>
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              Ex: NTFS (Windows), APFS (Mac), FAT32 (Windows, Mac, Linux), EXT4 (Linux)
            </p>
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              Files are mapped to locations on the hard drive. Files that are stored in the HDD are stored in a system
              that is a collection of data/information about all the files on the hard disk.
            </p>
            <p className="lg:text-2xl text-xl font-[googleSans] py-2">
              The file system pretty much contains the name/contents of the file and its location with its coordinates
              on the disk.
            </p>
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
            <SvgFileSystemTable className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LessonOnePart5;
