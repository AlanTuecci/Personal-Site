import { NavLink } from "react-router";

const LocationCard = ({ displayName, urlSegment, iconImage }) => {
  return (
    <NavLink to={urlSegment}>
      <div className="h-32 flex justify-evenly lg:w-[90%] rounded-lg shadow-lg bg-white m-4 transform transition duration-500 hover:scale-105">
        <div className="flex flex-col items-center justify-center m-4">{iconImage}</div>

        <div className="w-full flex flex-col justify-center my-4 mr-4">
          <div className="my-2 min-w-40 font-bold text-xl text-gray-800 ">Location: {displayName}</div>
        </div>
      </div>
    </NavLink>
  );
};

export default LocationCard;
