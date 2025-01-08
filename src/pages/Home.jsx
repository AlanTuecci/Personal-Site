import Header from "../components/Header.jsx";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Header />
      <div className="lg:w-[90%] mt-6 w-[80%] mx-auto flex flex-wrap items-center justify-between">
        <motion.div
          className=""
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-6xl font-[googleSansBold]">Alan Tuecci</h1>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
