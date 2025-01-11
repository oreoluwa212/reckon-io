/* eslint-disable react/prop-types */
import { ReckonPC } from "../../assets";

const HeroSection = ({ sectionId }) => {
  return (
    <div id={sectionId} className="py-16">
      <div className="container mx-auto pt-[7%] flex flex-col items-center text-center">
        <div className="w-full md:w-2/5">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            Manage Costs, Calculate Materials, and Build Better with Reckon IO
          </h1>
          <p className="my-4 font-medium text-gray-600">
            The solution designed for construction professionals who need
            simplicity, speed, and accuracy without breaking the bank. Reckon IO
            brings together the tools you need to manage your projects
            seamlessly, whether you&apos;re on-site, in the office, or on the
            go.
          </p>
        </div>
        <div className="mt-6 flex md:flex-row flex-col gap-8">
          <button className="bg-brandColor text-white py-3 font-medium px-14 rounded hover:bg-opacity-85">
            Create Account
          </button>
          <button className="border font-medium border-black text-black py-3 px-14 rounded hover:bg-blue-100">
            Open Web App
          </button>
        </div>
        <div>
          <img src={ReckonPC} alt="Reckon IO Demo" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
