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
          <div className="flex space-x-4 mb-8">
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
          <ImageGrid image1={project.image1} image2={project.image2} image3={project.image3} />
        )}
      </div>
    </>
  );
};

export default AboutProject;
