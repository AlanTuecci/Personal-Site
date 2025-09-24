import { NavLink } from "react-router";

const ContinentCard = ({ urlSegment, continentName, locationList, iconImage }) => {
  return (
    <NavLink
      to={urlSegment}
      className="h-32 flex justify-evenly lg:w-[75%] rounded-lg shadow-lg bg-white m-4 transform transition duration-500 hover:scale-105"
    >
      <div className="flex flex-col items-center justify-center m-4">{iconImage}</div>
      {/* <img className="w-full h-16 object-scale-down m-6" src={iconImage} /> */}

      <div className="w-full flex flex-col justify-center my-4 mr-4">
        <div className="my-2 min-w-40 font-bold text-xl text-gray-800 ">Continent: {continentName}</div>
        <p className="my-2 min-w-40 min-h-12 text-base text-gray-700 ">{locationList}</p>
      </div>
    </NavLink>
  );
};

export default ContinentCard;
