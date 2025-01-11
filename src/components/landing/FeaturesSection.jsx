/* eslint-disable react/prop-types */
import { BOQ, Marketplace, MaterialSchedule } from "@/assets";
import CustomFeature from "../reusables/CustomFeature";

const FeaturesSection = ({ sectionId }) => {
  const features = [
    {
      title: "Material Estimation",
      description:
        "Effortlessly calculate the exact quantities of blocks, concrete, reinforcement, paint, tiles, and more for each stage of your construction project. With Reckon IO's Material Schedule, you get accurate estimates to keep your project on track and within budget.",
      image: MaterialSchedule,
      bgColor: "#F7FDFF",
      borderColor: "#5ED2FB",
      textColor: "#0EA5E9",
    },
    {
      title: "Bill of Quantity Calculation",
      description:
        "Generate a comprehensive BOQ for your entire project with just a few clicks. Reckon IO provides you with a detailed breakdown of costs and materials required, giving you a clear, organized view of your project's financials.",
      image: BOQ,
      bgColor: "#FEF2F2",
      borderColor: "#FECACA",
      textColor: "#EF4444",
    },
    {
      title: "Updated Material Prices",
      description:
        "Stay informed with real-time pricing from local suppliers. Reckon IO ensures you have the latest price data for materials and rentals, helping you make smart, cost-effective purchasing decisions and avoid budget surprises.",
      image: Marketplace,
      bgColor: "#FFFBEB",
      borderColor: "#FEF3C7",
      textColor: "#F59E0B",
    },
  ];

  return (
    <div id={sectionId} className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center gap-6">
          <div className="px-6 py-2 bg-[#FDF5E2] border-2 border-[#E9C268] rounded-full">
            <p className="text-sm font-medium">
              Essential tools to streamline your projects
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-gray-800">
            Key Features at Your Fingertips
          </h2>

          <p className="text-xl text-center max-w-2xl">
            Reckon IO offers powerful features designed to simplify your
            workflow and keep your projects on track.
          </p>

          <div className="w-full mt-12 space-y-12">
            {features.map((feature, index) => (
              <CustomFeature key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
