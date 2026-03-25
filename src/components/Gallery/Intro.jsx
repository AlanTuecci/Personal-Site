import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router";

const continents = [
  {
    id: "na",
    name: "North America",
    locationsList: "United States (New York)",
    path: "/projects/gallery/na",
    coverImage: "https://alantuecci.dev/gallery/dtx9bywff6wccgs4t1jr.jpg",
    backupImage:
      "https://res.cloudinary.com/dgfazyq2e/image/upload/v1700274801/WebDev-Assignment-1/photo-new-york/pier-17-brooklyn-bridge/dtx9bywff6wccgs4t1jr.jpg",
  },
  {
    id: "eu",
    name: "Europe",
    locationsList: "United Kingdom | Norway | Netherlands",
    path: "/projects/gallery/eu",
    coverImage: "https://alantuecci.dev/gallery/mkz8gifvcq4uvjezre9m.jpg",
    backupImage:
      "https://res.cloudinary.com/dgfazyq2e/image/upload/v1700274475/WebDev-Assignment-1/photo-norway/geiranger/mkz8gifvcq4uvjezre9m.jpg",
  },
  {
    id: "as",
    name: "Asia",
    locationsList: "Japan",
    path: "/projects/gallery/as",
    coverImage: "https://alantuecci.dev/gallery/_DSC8293.jpg",
    backupImage: "https://res.cloudinary.com/dgfazyq2e/image/upload/v1774381734/_DSC8293_icwzni.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Intro = () => {
  return (
    <div className="bg-gray-50 my-4">
      <div className="w-[90%] max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">Photo Gallery</h1>
          <p className="text-lg lg:text-xl text-gray-600 font-medium leading-relaxed">
            This is a collection of photos I took around the world over the years. For each photo, I show both the
            precise location where the shot was taken and the relevant weather data from the day that the photo was
            taken. The goal is to provide newer photographers the resources they need to reproduce certain shots.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {continents.map((continent) => (
            <ContinentCard
              key={continent.id}
              name={continent.name}
              locationsList={continent.locationsList}
              path={continent.path}
              coverImage={continent.coverImage}
              backupImage={continent.backupImage}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ContinentCard = ({ name, locationsList, path, coverImage, backupImage }) => {
  const [imgSrc, setImgSrc] = useState(coverImage);

  const handleError = () => {
    if (imgSrc !== backupImage) {
      setImgSrc(backupImage);
    }
  };

  return (
    <motion.div variants={itemVariants} className="h-full">
      <NavLink to={path} className="group block h-full">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg transition-shadow duration-500 group-hover:shadow-2xl bg-gray-200">
          <img
            src={imgSrc}
            alt={name}
            onError={handleError}
            decoding="async"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h2 className="text-white font-bold text-3xl mb-2 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
              {name}
            </h2>

            <p className="text-gray-300 text-sm font-medium opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              {locationsList}
            </p>

            <div className="h-1 w-12 bg-blue-500 mt-4 rounded-full transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
      </NavLink>
    </motion.div>
  );
};

export default Intro;
