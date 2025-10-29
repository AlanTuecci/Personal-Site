import { motion } from "framer-motion";
import { useParams, Navigate } from "react-router";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Header from "../../components/Header/Header";
import ImageGrid from "../../components/ImageGrid/ImageGrid";

const AboutProject = ({ projectData }) => {
  const { slug } = useParams();

  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <Header />
      <div className="lg:w-[90%] my-10 md:my-14 w-[80%] mx-auto lg:flex lg:space-y-0 space-y-10 flex-wrap items-center justify-between">
        <motion.div
          className="lg:w-[50%] lg:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="lg:text-4xl xl:text-5xl text-3xl font-[googleSansBold]">{project.name}</h1>
          <br />
          <h2 className="lg:text-2xl xl:text-3xl text-xl font-[googleSansMedium]">{project.summary}</h2>
          <div className="flex xl:space-x-6 lg:space-x-4 space-x-2 my-6">
            <div className="flex items-center">{project.icons}</div>
          </div>
          <div className="flex space-x-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FaGithub className="mr-2" />
              View Code
            </a>
            {project.pageLink && (
              <a
                href={project.pageLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
        <motion.div
          className="lg:w-[50%] flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={project.image0} alt={`${project.name} Screenshot`} className="w-full h-auto rounded-lg shadow-lg" />
        </motion.div>

        {(project.image1 || project.image2 || project.image3) && (
          <div>
            <motion.h1
              className="my-8 text-center lg:text-4xl xl:text-5xl text-3xl font-[googleSansBold]"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Project Screenshots
            </motion.h1>
            <ImageGrid image1={project.image1} image2={project.image2} image3={project.image3} />
          </div>
        )}

        {project.description && (
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="my-8 text-center lg:text-4xl xl:text-5xl text-3xl font-[googleSansBold]">
              Project Description
            </h1>
            <h2 className="px-4 lg:px-8 lg:text-xl xl:text-2xl text-lg">{project.description}</h2>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default AboutProject;
