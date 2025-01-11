/* eslint-disable react/prop-types */

const CustomFeature = ({
  title,
  description,
  image,
  bgColor,
  borderColor,
  textColor,
}) => {
  return (
    <div
      className="rounded-2xl h-fit overflow-hidden"
      style={{
        backgroundColor: bgColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 pt-10 px-8">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-semibold" style={{ color: textColor }}>
            {title}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        </div>

        <div className="flex-1 flex justify-center pt-[10%]">
          <div className="w-full h-[500px]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomFeature;
