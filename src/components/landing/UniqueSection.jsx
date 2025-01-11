/* eslint-disable react/prop-types */
import { androidWebsite } from "@/assets";

const FeatureCard = ({ title, description, className }) => {
  return (
    <div className={`max-w-xs mx-auto ${className}`}>
      <h3 className="text-2xl font-bold text-brandGold mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

const UniqueSection = ({ sectionId }) => {
  const features = [
    {
      title: "Simple and Easy to Use",
      description:
        "Say goodbye to complicated software! Reckon IO has an intuitive design that makes it easy for everyone to navigate, from first-time users to seasoned professionals. With Reckon IO, you get results without the learning curve.",
      className: "md:col-start-1 md:row-start-1",
    },
    {
      title: "Fast and Accurate Calculations",
      description:
        "With the Material Schedule feature, you can quickly estimate the materials needed for each stage of construction, including blocks, concrete, reinforcement, tiles, and more. Get precise calculations to keep your project on track.",
      className: "md:col-start-1 md:row-start-2",
    },
    {
      title: "Accessible Anytime, Anywhere",
      description:
        "Whether you're using the mobile app on site or the web app from your desktop, Reckon IO ensures that your work goes with you. Access all your calculations and projects seamlessly from any device, anytime.",
      className: "md:col-start-3 md:row-start-1",
    },
    {
      title: "Collaborative & Synchronized",
      description:
        "Stay connected and in control, whether you're in the field or in the office. Reckon IO synchronizes data between multiple web and mobile, allowing for real-time collaboration and effortless project management across your team.",
      className: "md:col-start-3 md:row-start-2",
    },
  ];

  return (
    <div id={sectionId} className="bg-[#11253E] text-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center gap-6 mb-16 text-center">
          <div className="px-6 py-2 bg-[#EFFBFF] rounded-full">
            <p className="text-sm text-black font-medium">
              Smart, simple, and tailored for construction professionals
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-light">
            What Makes Reckon IO Unique
          </h2>

          <p className="text-xl text-gray-300 max-w-xl">
            Discover why Reckon IO is the preferred choice for managing costs,
            materials, and project estimates with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-8 md:gap-y-12 relative">
          <div className="hidden text-left md:flex flex-col gap-16">
            <FeatureCard {...features[0]} />
            <FeatureCard {...features[1]} />
          </div>

          <div className="hidden md:flex justify-center items-center relative">
            <div className="w-[280px] h-[560px] sm:w-[300px] sm:h-[600px] relative">
              <img
                src={androidWebsite}
                alt="Reckon IO Mobile App"
                className="w-full h-full object-contain relative z-10"
              />
              <div className="absolute w-[320px] h-[600px] bg-[#11253E] rounded-full -z-10 left-1/2 transform -translate-x-1/2 top-8 md:hidden"></div>
            </div>
          </div>

          <div className="hidden text-left md:flex flex-col gap-16">
            <FeatureCard {...features[2]} />
            <FeatureCard {...features[3]} />
          </div>

          <div className="flex flex-col-reverse gap-16 text-center md:hidden">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
          {/* Mobile Phone Image */}
          <div className="relative md:hidden flex justify-center z-20">
            <img
              src={androidWebsite}
              alt="Reckon IO Mobile App"
              className="w-[400px] h-auto -mb-[70%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueSection;
