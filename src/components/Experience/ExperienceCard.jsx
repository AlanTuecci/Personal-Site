import { useEffect, useState } from "react";

const ExperienceCard = ({ experience }) => {
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const calculateDuration = (startDate, endDate) => {
      const start = new Date(startDate);
      const end = endDate ? new Date(endDate) : new Date();

      let totalMonths = (end.getFullYear() - start.getFullYear()) * 12;
      totalMonths -= start.getMonth();
      totalMonths += end.getMonth();
      totalMonths += 1;

      if (totalMonths <= 0) {
        setDuration("");
        return;
      }

      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      let durationString = "";
      if (years > 0) {
        durationString += `${years} yr${years > 1 ? "s" : ""}`;
      }
      if (months > 0) {
        if (durationString.length > 0) {
          durationString += " ";
        }
        durationString += `${months} mo${months > 1 ? "s" : ""}`;
      }

      if (!durationString && totalMonths > 0) {
        durationString = "1 mo";
      }

      setDuration(durationString);
    };

    calculateDuration(experience.startDate, experience.endDate);
  }, [experience.startDate, experience.endDate]);

  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0">
        <img
          src={experience.logoUrl}
          alt={`${experience.company} logo`}
          className="w-12 h-12 rounded-md object-scale-down"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/50x50/cccccc/ffffff?text=Err";
          }}
        />
      </div>

      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">{experience.title}</h3>
        <p className="text-sm font-medium text-gray-800">
          {experience.company} · {experience.employmentType}
        </p>
        <p className="text-xs text-gray-500">
          {experience.dateRange} · {duration}
        </p>
        <p className="text-xs text-gray-500 mb-3">{experience.location}</p>

        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          {experience.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
