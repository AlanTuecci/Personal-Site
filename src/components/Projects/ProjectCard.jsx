const ProjectCard = ({ name, description, image, icons, pageLink }) => {
  return (
    <>
      <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white m-4 transform transition duration-500 hover:scale-105">
        <img className="w-full h-48 object-scale-down" src={image} />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-800 line-clamp-1">{name}</div>
          <p className="text-gray-700 text-base line-clamp-3 my-2">{description}</p>
          <div className="flex">{icons}</div>
        </div>

        <div className="px-6 pt-4 pb-5 flex justify-center text-center">{pageLink}</div>
      </div>
    </>
  );
};

export default ProjectCard;
