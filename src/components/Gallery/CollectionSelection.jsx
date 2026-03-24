import { useParams, NavLink, Link } from "react-router";
import { motion } from "framer-motion";

const galleries = {
  na: [
    {
      name: "Brooklyn Army Terminal, New York",
      path: "/projects/gallery/na/brooklyn-army-terminal",
      coverImage: "https://alantuecci.dev/gallery/bmgkyvlkff5bpdcj7ova.jpg",
    },
    {
      name: "Central Park, New York",
      path: "/projects/gallery/na/central-park",
      coverImage: "https://alantuecci.dev/gallery/lookwcndf8emnksw4vgc.jpg",
    },
    {
      name: "Dumbo Carousel, New York",
      path: "/projects/gallery/na/dumbo-carousel",
      coverImage: "https://alantuecci.dev/gallery/sdmjdhmdtquuwwjziwrx.jpg",
    },
    {
      name: "Hunter College, New York",
      path: "/projects/gallery/na/hunter-college",
      coverImage: "https://alantuecci.dev/gallery/rfi4nfy5fcxniiyicqlt.jpg",
    },
    {
      name: "Industry City, New York",
      path: "/projects/gallery/na/industry-city",
      coverImage: "https://alantuecci.dev/gallery/qiiyz2dmnqoxlsxf9epa.jpg",
    },
    {
      name: "Pier 17, New York",
      path: "/projects/gallery/na/pier-17",
      coverImage: "https://alantuecci.dev/gallery/dtx9bywff6wccgs4t1jr.jpg",
    },
    {
      name: "Prospect Park, New York",
      path: "/projects/gallery/na/prospect-park",
      coverImage: "https://alantuecci.dev/gallery/iylxlktn8yknnqdrugim.jpg",
    },
  ],
  eu: [
    {
      name: "London, United Kingdom",
      path: "/projects/gallery/eu/london",
      coverImage: "https://alantuecci.dev/gallery/n6ftd1deni124wrcocaz.jpg",
    },
    {
      name: "Amsterdam, Netherlands",
      path: "/projects/gallery/eu/amsterdam",
      coverImage: "https://alantuecci.dev/gallery/rzjslcw1gznpebyhgxgv.jpg",
    },
    {
      name: "Bergen, Norway",
      path: "/projects/gallery/eu/fjellstrekninger",
      coverImage: "https://alantuecci.dev/gallery/x7pqkuy9ug08brxwe7mj.jpg",
    },
    {
      name: "Geiranger, Norway",
      path: "/projects/gallery/eu/geiranger",
      coverImage: "https://alantuecci.dev/gallery/mkz8gifvcq4uvjezre9m.jpg",
    },
    {
      name: "Alesund, Norway",
      path: "/projects/gallery/eu/alesund",
      coverImage: "https://alantuecci.dev/gallery/zlzyagj6jp7tjg3od6rd.jpg",
    },
  ],
  as: [
    {
      name: "Tokyo, Japan",
      path: "/projects/gallery/as/tokyo",
      coverImage: "https://alantuecci.dev/gallery/_DSC8196.jpg",
    },
    {
      name: "Yamanashi, Japan",
      path: "/projects/gallery/as/yamanashi",
      coverImage: "https://alantuecci.dev/gallery/_DSC8293.jpg",
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CollectionSelection = () => {
  const { continent } = useParams();
  const locations = galleries[continent] || [];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <motion.div
          className="lg:w-[35%] lg:sticky lg:top-24 h-fit"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/projects/gallery"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors mb-6"
          >
            <svg
              className="w-4 h-4 transform transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Back to Continents
          </Link>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            Collection
            <br className="hidden lg:block" /> Selection
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 font-medium leading-relaxed">
            Choose a location below to view the full photo gallery for this region.
          </p>
        </motion.div>

        <div className="lg:w-[65%]">
          {locations.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {locations.map((loc) => (
                <LocationCard key={loc.path} name={loc.name} path={loc.path} coverImage={loc.coverImage} />
              ))}
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No collections found</h3>
              <p className="text-gray-500">We couldn't find any photo sets for this continent yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const LocationCard = ({ name, path, coverImage }) => {
  return (
    <motion.div variants={itemVariants} className="h-full">
      <NavLink to={path} className="group block h-full">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md transition-shadow duration-500 group-hover:shadow-2xl bg-gray-200">
          <img
            src={coverImage}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="text-white font-bold text-xl leading-tight transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
              {name}
            </h3>
            <div className="h-1 w-8 bg-blue-500 mt-3 rounded-full transition-all duration-500 group-hover:w-16" />
          </div>
        </div>
      </NavLink>
    </motion.div>
  );
};

export default CollectionSelection;
