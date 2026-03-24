const Map = ({ location_plus_code }) => {
  let mapSrc = null;

  if (location_plus_code) {
    mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
      location_plus_code,
    )}&t=&z=15&ie=UTF8&iwloc=B&output=embed`;
  }

  if (!mapSrc) {
    return (
      <div className="w-full h-full min-h-[300px] rounded-xl bg-gray-100 flex items-center justify-center">
        <p className="text-gray-400 font-medium animate-pulse">Loading map data...</p>
      </div>
    );
  }

  return (
    <iframe
      key={mapSrc}
      className="w-full h-full min-h-[300px] rounded-xl"
      frameBorder="0"
      scrolling="no"
      src={mapSrc}
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      sandbox="allow-scripts allow-same-origin allow-popups"
    ></iframe>
  );
};

export default Map;
