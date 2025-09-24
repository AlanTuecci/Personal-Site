import { useParams } from "react-router";
import { motion } from "framer-motion";
import SvgSquareImage from "../../assets/SvgSquareImage";
import LocationCard from "./LocationCard";

const galleries = {
  na: [
    ["Brooklyn Army Terminal, New York", "/projects/gallery/na/brooklyn-army-terminal"],
    ["Central Park, New York", "/projects/gallery/na/central-park"],
    ["Dumbo Carousel, New York", "/projects/gallery/na/dumbo-carousel"],
    ["Hunter College, New York", "/projects/gallery/na/hunter-college"],
    ["Industry City, New York", "/projects/gallery/na/industry-city"],
    ["Pier 17, New York", "/projects/gallery/na/pier-17"],
    ["Prospect Park, New York", "/projects/gallery/na/prospect-park"],
  ],
  eu: [
    ["London, United Kingdom", "/projects/gallery/eu/london"],
    ["Amsterdam, Netherlands", "/projects/gallery/eu/amsterdam"],
    ["Bergen, Norway", "/projects/gallery/eu/fjellstrekninger"],
    ["Geiranger, Norway", "/projects/gallery/eu/geiranger"],
    ["Alesund, Norway", "/projects/gallery/eu/alesund"],
  ],
  as: [["Tokyo, Japan", "/projects/gallery/as/tokyo"]],
};

const CollectionSelection = () => {
  const { continent } = useParams();

  const locations = galleries[continent] || [];

  return (
    <div className="">
      <div className="lg:w-[90%] w-[80%] mx-auto lg:flex flex-wrap items-center justify-between">
        <motion.div
          className="my-6 lg:w-[45%] lg:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="lg:text-4xl xl:text-5xl text-3xl font-[googleSansBold]">Collection Selection</h1>
          <br />
          <h2 className="lg:text-xl xl:text-2xl text-lg font-[googleSansMedium]">
            Choose a collection of photos to view:
          </h2>
        </motion.div>
        <motion.div
          className="my-6 lg:w-[55%] lg:min-h-96 grid lg:grid-cols-2 items-center justify-items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {locations.map(([displayName, urlSegment]) => (
            <LocationCard
              key={urlSegment}
              displayName={displayName}
              urlSegment={urlSegment}
              iconImage={<SvgSquareImage className="w-16 lg:w-24" />}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CollectionSelection;
