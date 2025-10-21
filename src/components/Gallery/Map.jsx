const Map = ({ location_plus_code }) => {
  let mapSrc = null;

  if (location_plus_code) {
    mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
      location_plus_code
    )}&t=&z=16&ie=UTF8&iwloc=B&output=embed`;
  }

  if (!mapSrc) {
    return (
      <div className="flex justify-center my-4 mx-4 lg:mx-10 mb-10">
        <div className="w-full lg:w-[80%] min-h-72 rounded-lg shadow-xl bg-gray-100 flex items-center justify-center">
          <p>Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center my-4 mx-4 lg:mx-10 mb-10">
      <div className="w-full lg:w-[80%]">
        <iframe
          key={mapSrc}
          className="w-full min-h-72 rounded-lg shadow-xl"
          frameBorder="0"
          scrolling="no"
          src={mapSrc}
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-popups"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
