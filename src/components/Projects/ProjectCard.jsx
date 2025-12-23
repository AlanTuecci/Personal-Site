import textStyles from "../../style-strings/text-sizes";

const ProjectCard = ({ name, description, image, icons, pageLink }) => {
  return (
    <>
      <div className="xl:max-w-lg max-w-md rounded-lg overflow-hidden shadow-lg bg-white m-4 transform transition duration-500 hover:scale-105">
        <img className="w-full xl:h-64 h-48 object-scale-down" src={image} />

        <div className="mt-2 px-6">
          <div className={textStyles.smallBoldText + "mb-2 text-gray-800 line-clamp-1"}>{name}</div>
          <p className={textStyles.subText + "text-gray-700 line-clamp-4 my-2"}>{description}</p>
          <div className={textStyles.subHeader + "flex"}>{icons}</div>
        </div>

        <div className={textStyles.subText + "px-6 py-4 flex justify-center text-center"}>{pageLink}</div>
      </div>
    </>
  );
};

export default ProjectCard;
