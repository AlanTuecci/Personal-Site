import { motion } from "framer-motion";

const ImageGrid = ({ image1, image2, image3 }) => {
  return (
    <motion.div
      className="max-w-full px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.img
        className="w-full h-auto object-cover rounded 2xl:rounded-lg border-2"
        src={image1}
        alt=""
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />
      <motion.img
        className="w-full h-auto object-cover rounded 2xl:rounded-lg border-2"
        src={image2}
        alt=""
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      />
      <motion.img
        className="w-full h-auto object-cover rounded 2xl:rounded-lg border-2"
        src={image3}
        alt=""
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default ImageGrid;
