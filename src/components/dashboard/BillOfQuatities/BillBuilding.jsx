import ImageUpload from "@/assets/Image/upload-02.png";

const BillBuilding = () => {
  return (
    <div className="w-full border-r justify-between">
      <div className="border-b ">
        <div className="flex px-6 py-2 items-center justify-between">
          <p className="font-semibold  ">Building Plan</p>
          <button className="flex gap-3 w-[180px] h-10 border items-center  justify-center rounded-xl font-medium text-[#777777]">
            <span>Upload Building Plan</span>
            <button>
              <img src={ImageUpload} alt="uploadimage" />
            </button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillBuilding;
