import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const measurements = [
  { value: "71.36m", icon: "L" },
  { value: "42.36m²", icon: "A" },
  { value: "42.36", icon: "C" },
  { value: "42.36", icon: "C" },
  { value: "42.36", icon: "C" },
  { value: "42.36", icon: "C" },
  { value: "42.36", icon: "C" },
];

const Measurement = () => {
  const [visibility, setVisibility] = useState(measurements.map(() => false));

  const toggleVisibility = (index) => {
    setVisibility((prevVisibility) => {
      const newVisibility = [...prevVisibility];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };

  return (
    <div className="flex flex-col border-r h-full">
      <button className="border-b border">
        <h2 className="px-6 py-4 flex flex-col font-semibold">Measurements</h2>
      </button>
      <ul className="space-y-2 ">
        {measurements.map((measurement, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 rounded-lg border-b hover:bg-gray-200 transition"
          >
            <div className="flex gap-3 border-r items-center">
              {visibility[index] ? (
                <FaRegEye
                  size={14}
                  className="text-black cursor-pointer ml-2"
                  onClick={() => toggleVisibility(index)}
                />
              ) : (
                <FaRegEyeSlash
                  size={14}
                  className="text-black cursor-pointer ml-2"
                  onClick={() => toggleVisibility(index)}
                />
              )}
              <span className="font-semibold">{measurement.value}</span>
            </div>
            <span
              className={`inline-flex items-center font-medium text-sm justify-center w-6 h-6 rounded-lg border-b text-white ${
                measurement.icon === "L"
                  ? "bg-[#289693]"
                  : measurement.icon === "A"
                  ? "bg-[#FC7750] text-[#000000]"
                  : "bg-[#003566]"
              }`}
            >
              {measurement.icon}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Measurement;
