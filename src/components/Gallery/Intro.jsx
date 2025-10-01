import { motion } from "framer-motion";
import SvgNature from "../../assets/SvgNature";
import SvgNightNature from "../../assets/SvgNightNature";
import ContinentCard from "./ContinentCard";

const Intro = () => {
  return (
    <div className="">
      <div className="lg:w-[90%] mt-10 w-[80%] mx-auto lg:flex flex-wrap items-center justify-between">
        <motion.div
          className="my-6 lg:w-[50%] lg:pr-14"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="lg:text-4xl xl:text-5xl text-3xl font-[googleSansBold]">Photo Gallery</h1>
          <br />
          <h2 className="lg:text-xl xl:text-2xl text-lg font-[googleSansMedium]">
            This is a collection of photos I took around the world over the years. For each photo, I show both the
            precise location where the shot was taken and the relevant weather data from the day that the photo was
            taken. The goal is to provide newer photographers the resources they need to reproduce certain shots.
          </h2>
        </motion.div>
        <motion.div
          className="my-6 lg:w-[50%] flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <SvgNightNature className="lg:w-[100%] w-[75%]" />
        </motion.div>
      </div>
      <div className="lg:w-[90%] w-[80%] mx-auto items-center justify-between my-4 flex flex-col md:flex-row">
        <motion.div
          className="lg:w-[75%]"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ContinentCard
            urlSegment="/projects/gallery/eu"
            continentName="Europe"
            locationList="Locations: United Kingdom | Norway | Netherlands"
            iconImage={<SvgNature className="w-16 lg:w-24" />}
          />
        </motion.div>
        <motion.div
          className="lg:w-[75%]"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <ContinentCard
            urlSegment="/projects/gallery/na"
            continentName="North America"
            locationList="Location: United States"
            iconImage={<SvgNature className="w-16 lg:w-24" />}
          />
        </motion.div>
        <motion.div
          className="lg:w-[75%]"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <ContinentCard
            urlSegment="/projects/gallery/"
            continentName="Asia"
            locationList="Location: Japan [Coming Soon!]"
            iconImage={<SvgNature className="w-16 lg:w-24" />}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
