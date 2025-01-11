/* eslint-disable react/prop-types */
const CTASection = ({ sectionId }) => {
  return (
    <div id={sectionId} className="relative w-full my-10 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* <div className="absolute left-6 right-6 -bottom-8 h-[110%] rounded-2xl bg-blue-900/20 sm:left-8 sm:right-8" />
      <div className="absolute left-8 right-8 -bottom-12 h-[120%] rounded-2xl bg-blue-900/10 sm:left-10 sm:right-10" /> */}

      <div className="relative w-full rounded-2xl bg-brandColor">
        <div className="absolute inset-0 rounded-2xl" />
        <div className="absolute inset-0 bg-blue-900/20 rounded-2xl" />

        <div className="relative py-16 mx-auto px-8">
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-2xl font-bold text-brandGold sm:text-5xl">
              Start Using Reckon IO Today
            </h2>
            <p className="mb-8 text-[16px] text-white md:text-[20px]">
              Join the growing community of construction professionals in
              Nigeria and Africa who trust Reckon IO to streamline their
              workflows, save on costs, and bring projects to life with greater
              accuracy. Don&apos;t let outdated methods slow you down—experience
              construction management that&apos;s built for your success with
              Reckon IO.
            </p>
            <button className="px-12 py-4 text-lg font-semibold transition-colors duration-200 bg-white rounded-md hover:bg-opacity-80">
              Try Reckon IO Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
