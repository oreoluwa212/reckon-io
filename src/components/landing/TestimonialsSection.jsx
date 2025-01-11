import { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adebowale M.",
      role: "Quantity Surveyor",
      feedback:
        "Reckon IO has made estimating materials so much easier! I can calculate costs accurately on-site without needing extra equipment!",
    },
    {
      name: "Chinedu O.",
      role: "Project Manager",
      feedback:
        "Finally, a construction app that's affordable and easy to use. I can access everything I need on my phone and never have to worry about price fluctuations.",
    },
    {
      name: "Mamuma M.",
      role: "Manager",
      feedback:
        "What impressed me most is how Reckon IO handles multiple projects simultaneously. The dashboard gives me a clear overview of all ongoing works, and the cost tracking is incredibly accurate.",
    },
    {
      name: "Fatime T.",
      role: "Contractor",
      feedback:
        "Reckon IO's real-time pricing is a game-changer. It's linked to supplier budgets, allowing us to compare supplier prices instantly.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push({
        ...testimonials[index],
        index,
      });
    }
    return result;
  };

  return (
    <div className="bg-brandGold h-fit z-10 pt-[65%] md:py-[6%] py-16 relative">
      <div className="text-center mb-10 px-[10%] md:px-4 space-y-7 flex flex-col items-center justify-center">
        <div className="inline-block px-14 py-2 w-full md:w-1/3 mb-4 bg-[#FCEEEF] rounded-full text-[16px] font-semibold">
          Trusted by construction professionals
        </div>
        <h2 className="mt-4 text-5xl font-normal text-gray-800">
          What Our Users Are Saying
        </h2>
        <p className="mt-2 max-w-3xl text-black md:text-[24px] text-[16px] font-normal">
          See how Reckon IO has transformed project management for our growing
          community of users.
        </p>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:block overflow-hidden relative py-6">
        <div className="absolute right-0 top-0 bottom-0 w-[15%] bg-brandGold z-10" />
        <div className="flex justify-start items-stretch gap-16 pl-[10%] relative">
          {getVisibleTestimonials().map((testimony, displayIndex) => (
            <div
              key={testimony.index}
              onClick={() => handleClick(testimony.index)}
              className={`p-6 bg-white rounded-[10px] shadow cursor-pointer transition-all duration-300
                ${displayIndex === 2 ? "opacity-90" : "opacity-100"}
                hover:scale-95`}
              style={{
                width: "30%",
                flex: "none",
              }}
            >
              <p className="font-HellixBold text-8xl">&quot;</p>
              <p className="text-gray-600 italic text-left">
                {testimony.feedback}
              </p>
              <div className="flex gap-2 py-10 items-center font-semibold">
                <h4 className="text-lg text-gray-800 text-left">
                  {testimony.name},
                </h4>
                <span className="text-left block">{testimony.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Stacked View */}
      <div className="md:hidden flex flex-col gap-6 px-10">
        {testimonials.map((testimony, index) => (
          <div key={index} className="p-6 bg-white rounded shadow text-center">
            <p className="font-HellixBold text-8xl">&quot;</p>
            <p>{testimony.feedback}</p>
            <div className="flex gap-2 py-10 items-center justify-center w-full font-semibold">
              <h4 className="text-lg text-gray-800 text-left">
                {testimony.name},
              </h4>
              <span className="text-left block">{testimony.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
