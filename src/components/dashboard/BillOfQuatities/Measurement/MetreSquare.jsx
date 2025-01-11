import { useState } from "react";
import digitalIcon from "@/assets/digitalicon.png";
import cancelButton from "@/assets/Image/cancel-circle.png";

const MetreSquare = () => {
  const [activebuttonDetails, setActivebuttonDetails] = useState(null);
  const [baseLength, setBaseLength] = useState("");
  const [baseHeight, setBaseHeight] = useState("");
  const [addMoreLength, setAddMoreLength] = useState("");
  const [addMoreHeight, setAddMoreHeight] = useState("");
  const [deductLength, setDeductLength] = useState("");
  const [deductHeight, setDeductHeight] = useState("");
  const [isAddMoreVisible, setIsAddMoreVisible] = useState(false);
  const [isDeductVisible, setIsDeductVisible] = useState(false);

  const toggleAddMore = () => {
    setIsAddMoreVisible(!isAddMoreVisible);
  };

  const toggleDeduct = () => {
    setIsDeductVisible(!isDeductVisible);
  };

  const handleClick = (e) => {
    setActivebuttonDetails(e.target.id);
  };

  return (
    <div>
      <div>
        <div className="py-2">
          <label className="font-medium">Length</label>
          <div className="relative">
            <input
              value={baseLength}
              onChange={({ target }) => {
                setBaseLength(target.value);
              }}
              type="text"
              placeholder="1+2+3+4+5+6"
              className="rounded-lg h-12 w-[310px] outline-none items-center font-normal mt-2 y-1 bg-transparent border pl-3"
            />
            <div className="w-5 h-5 absolute right-14 top-5 font-medium items-center">
              meter(s)
            </div>
          </div>
        </div>

        <div className="py-2">
          <label className="font-medium">Height/Breadth</label>
          <div className="relative">
            <input
              value={baseHeight}
              onChange={({ target }) => {
                setBaseHeight(target.value);
              }}
              type="text"
              placeholder="1+2+3+4+5+6"
              className="rounded-lg h-12 w-[310px] outline-none items-center justify-center font-normal mt-2 y-1 bg-transparent border pl-3"
            />
            <div className="w-5 h-5 absolute right-14 top-5 font-medium items-center">
              meter(s)
            </div>
          </div>
        </div>
      </div>

      {/*Addmore */}
      {isAddMoreVisible && (
        <div>
          <div className="pl-4 py-4 pr-3 h-[36px] w-[310px] bg-[#EBF4FB] mt-4 flex justify-between rounded-t-xl items-center">
            <div className="font-medium text-center">Add More</div>
            <div className="items-center space-x-6">
              <button className="items-center">
                <img
                  src={digitalIcon}
                  alt="digitalIcon"
                  className="w-[16px] h-[16px] items-center"
                />
              </button>
              <button className="items-center" onClick={toggleAddMore}>
                <img
                  src={cancelButton}
                  alt="cancelbutton"
                  className="w-[16px] h-[16px]items-center"
                />
              </button>
            </div>
          </div>

          <div className="py-2">
            <label className="font-medium">Length</label>
            <div className="relative">
              <input
                value={addMoreLength}
                onChange={({ target }) => {
                  setAddMoreLength(target.value);
                }}
                type="text"
                placeholder="1+2+3+4+5+6"
                className="rounded-lg h-12 w-[310px] outline-none items-center justify-center font-normal mt-2 y-1 bg-transparent border pl-3"
              />
              <div className="w-5 h-5 absolute right-14 top-5 font-medium items-center">
                meter(s)
              </div>
            </div>
          </div>

          <div className="py-2">
            <label className="font-medium">Height/Breadth</label>
            <div className="relative">
              <input
                value={addMoreHeight}
                onChange={({ target }) => {
                  setAddMoreHeight(target.value);
                }}
                type="text"
                placeholder="1+2+3+4+5+6"
                className="rounded-lg h-12 w-[310px] outline-none items-center justify-center font-normal mt-2 y-1 bg-transparent border pl-3"
              />
              <div className="w-5 h-5 absolute right-14 top-5 font-medium items-center">
                meter(s)
              </div>
            </div>
          </div>
        </div>
      )}

      {/*Deduct */}
      {isDeductVisible && (
        <div>
          <div className="pl-4 py-4 pr-3 h-[36px] w-[310px] bg-[#EBF4FB] mt-4 flex justify-between rounded-t-xl items-center">
            <div className="font-medium text-center">Deduct</div>
            <div className="items-center space-x-6">
              <button className="items-center">
                <img
                  src={digitalIcon}
                  alt="digitalIcon"
                  className="w-[16px] h-[16px] items-center"
                />
              </button>
              <button className="items-center" onClick={toggleDeduct}>
                <img
                  src={cancelButton}
                  alt="cancelbutton"
                  className="w-[16px] h-[16px]items-center"
                />
              </button>
            </div>
          </div>

          <div className="py-2">
            <label className="font-medium">Length</label>
            <div className="relative">
              <input
                value={deductLength}
                onChange={({ target }) => {
                  setDeductLength(target.value);
                }}
                type="text"
                placeholder="1+2+3+4+5+6"
                className="rounded-lg h-12 w-[310px] outline-none items-center justify-center font-normal mt-2 y-1 bg-transparent border pl-3"
              />
              <div className="w-5 h-5 absolute right-14 top-5 font-medium items-center">
                meter(s)
              </div>
            </div>
          </div>

          <div className="py-2">
            <label className="font-medium">Height/Breadth</label>
            <div className="relative">
              <input
                value={deductHeight}
                onChange={({ target }) => {
                  setDeductHeight(target.value);
                }}
                type="text"
                placeholder="1+2+3+4+5+6"
                className="rounded-lg h-12 w-[310px] outline-none items-center justify-center font-normal mt-2 y-1 bg-transparent border pl-3"
              />
              <div className="w-5 h-5 absolute right-14 top-5 font-medium items-center">
                meter(s)
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="space-x-2 py-3 px-1  flex flex-row">
        <button className="h-7 w-7 bg-[#636363] rounded text-white font-semibold flex text-center items-center justify-center">
          <span>+</span>
        </button>
        <button className="h-7 w-7 bg-[#636363] rounded text-white font-semibold flex text-center items-center justify-center">
          <span>*</span>
        </button>
        <button className="h-7 w-7 bg-[#636363] rounded text-white font-semibold flex text-center items-center justify-center">
          <span>−</span>
        </button>
        <button className="h-7 w-7 bg-[#636363] rounded text-white font-semibold flex text-center items-center justify-center">
          <span>/</span>
        </button>
        <button className="h-7 w-7 bg-[#636363] rounded text-white font-semibold flex text-center items-center justify-center">
          <span>√</span>
        </button>
      </div>

      <div className="px-1 py-2 gap-4 flex">
        <button
          id="1"
          onClick={handleClick}
          className={`h-[35px] w-[92px] border border-black  rounded font-semibold ${
            activebuttonDetails === "1" ? "bg-secondary text-white" : ""
          }`}
        >
          Calculate
        </button>
        <button
          id="2"
          onClick={() => {
            handleClick({ target: { id: "2" } });
            toggleAddMore();
          }}
          className={`h-[35px] w-[92px] border border-black rounded font-semibold ${
            activebuttonDetails === "2" ? "bg-secondary text-white" : ""
          }`}
        >
          Add More
        </button>
        <button
          id="3"
          onClick={() => {
            handleClick({ target: { id: "3" } });
            toggleDeduct();
          }}
          className={`h-[35px] w-[92px] border border-black rounded font-semibold ${
            activebuttonDetails === "3" ? "bg-secondary text-white" : ""
          }`}
        >
          Deduct
        </button>
      </div>
    </div>
  );
};

export default MetreSquare;
