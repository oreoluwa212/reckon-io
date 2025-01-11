import { useState, useEffect } from "react";
import digitalIcon from "@/assets/digitalicon.png";
import cancelButton from "@/assets/Image/cancel-circle.png";
import TapeRule from "@/assets/Image/tape-measure.png";

const Blocks = ({ operator }) => {
  const [activebutton, setActivebutton] = useState(null);
  const [activebuttonDetails, setActivebuttonDetails] = useState(null);
  const [isAddMoreVisible, setIsAddMoreVisible] = useState(false);
  const [isDeductVisible, setIsDeductVisible] = useState(false);
  const [baseHeight, setBaseHeight] = useState("");
  const [baseLength, setBaseLength] = useState("");
  const [addMoreHeight, setAddMoreHeight] = useState("");
  const [addMoreLength, setAddMoreLength] = useState("");
  const [deductHeight, setDeductHeight] = useState("");
  const [deductLength, setDeductLength] = useState("");

  useEffect(() => {
    if (operator) {
      setBaseLength((prev) => prev + operator);
    }
  }, [operator]);

  const buttonData = [
    { name: "m", id: "m" },
    { name: <>m²</>, id: "m2" },
    {
      name: (
        <>
          m<sup>3</sup>
        </>
      ),
      id: "m3",
    },
    { name: "Nrs", id: "nrs" },
    { name: "items", id: "items" },
  ];
  1;
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
    <div className="flex items-center w-full px-5 py-2">
      <div className="border w-full rounded  ">
        <div className="p-4 flex justify-between items-center ">
          <div className="font-medium">Base Calculation</div>
          <button>
            <img
              src={digitalIcon}
              alt="digitalIcon"
              className="w-[16px] h-[16px]"
            />
          </button>
        </div>
        <div className="px-4 py-2 flex">
          {buttonData.map((button) => (
            <button
              key={button.id}
              className={`h-[37px] w-[60px] border font-semibold ${
                button.id === "m" ? "rounded-l-lg" : ""
              } ${button.id === "items" ? "rounded-r-lg" : " "}
                   ${
                     activebutton === button.id
                       ? "bg-[#289693] text-white"
                       : " "
                   }`}
              onClick={() => setActivebutton(button.id)}
            >
              {button.name}
            </button>
          ))}
        </div>

        <div className="px-4 py-2">
          <label className="font-medium">Length</label>
          <div className="relative  ">
            <input
              value={baseLength}
              onChange={({ target }) => {
                setBaseLength(target.value);
              }}
              type="text"
              placeholder="1+2+3+4+5+6"
              className="rounded-lg h-12 w-[300px] items-center font-medium outline-none mt-2 y-1 bg-transparent border pl-3"
            />
            <div className="w-5 h-5 absolute right-14 top-5 font-medium items-center">
              meter(s)
            </div>
          </div>
        </div>

        <div className="px-4 py-2">
          <label className="font-medium">Height</label>
          <div className="relative  ">
            <input
              value={baseHeight}
              onChange={({ target }) => {
                setBaseHeight(target.value);
              }}
              type="text"
              placeholder="1+2+3+4"
              className="rounded-lg h-12 w-[300px] items-center font-medium outline-none mt-2 y-1 bg-transparent border pl-3"
            />
            <div className="w-5 h-5 absolute right-14 top-5 font-medium  items-center">
              meter(s)
            </div>
          </div>
        </div>

        {/*Addmore */}
        {isAddMoreVisible && (
          <div>
            <div className="p-4 ml-3 h-[36px] w-[300px] bg-[#EBF4FB] mt-4 flex justify-between text-center rounded-t-xl items-center ">
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

            <div className="px-4 py-2">
              <label className="font-medium">Length</label>
              <div className="relative  ">
                <input
                  value={addMoreHeight}
                  onChange={({ target }) => {
                    setAddMoreHeight(target.value);
                  }}
                  type="text"
                  placeholder="1+2+3+4+5+6"
                  className="rounded-lg h-12 w-[300px] items-center justify-center font-medium mt-2 y-1 bg-transparent border pl-3"
                />
                <div className="w-10 h-10 absolute right-3  rounded-lg bg-[#FC7750] border top-3 font-medium items-center">
                  <img
                    src={TapeRule}
                    size={12}
                    alt="TapeRule"
                    className="flex items-center mx-auto mt-2"
                  />
                </div>
              </div>
            </div>

            <div className="px-4 py-2">
              <label className="font-medium">Height</label>
              <div className="relative  ">
                <input
                  value={addMoreLength}
                  onChange={({ target }) => {
                    setAddMoreLength(target.value);
                  }}
                  type="text"
                  placeholder="1+2+3+4"
                  className="rounded-lg h-12 w-[300px] items-center font-medium mt-2 y-1 bg-transparent border pl-3"
                />
                <div className="w-5 h-5 absolute right-14 top-5 font-medium  items-center">
                  meter(s)
                </div>
              </div>
            </div>
          </div>
        )}

        {/*Deduct */}
        {isDeductVisible && (
          <div>
            <div className="p-4 ml-3 h-[36px] w-[300px] bg-[#EBF4FB] mt-4 flex justify-between text-center items-center rounded-t-xl ">
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

            <div className="px-4 py-2">
              <label className="font-medium">Length</label>
              <div className="relative  ">
                <input
                  value={deductLength}
                  onChange={({ target }) => {
                    setDeductLength(target.value);
                  }}
                  type="text"
                  placeholder="1+2+3+4+5+6"
                  className="rounded-lg h-12 w-[300px] items-center justify-center font-medium mt-2 y-1 bg-transparent border pl-3"
                />
                <div className="w-5 h-5 absolute right-14 top-5 font-medium items-center">
                  meter(s)
                </div>
              </div>
            </div>

            <div className="px-4 py-2">
              <label className="font-medium">Height</label>
              <div className="relative  ">
                <input
                  value={deductHeight}
                  onChange={({ target }) => {
                    setDeductHeight(target.value);
                  }}
                  type="text"
                  placeholder="1+2+3+4"
                  className="rounded-lg h-12 w-[300px] items-center font-medium mt-2 y-1 bg-transparent border pl-3"
                />
                <div className="w-5 h-5 absolute right-14 top-5 font-medium items-center">
                  meter(s)
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="px-4 py-2 gap-4 flex">
          <button
            key={1}
            id={"1"}
            onClick={handleClick}
            className={`h-[35px] w-[92px] border border-black  rounded font-semibold ${
              activebuttonDetails === "1" ? "bg-secondary text-white" : ""
            }`}
          >
            Calculate
          </button>
          <button
            key={2}
            id={"2"}
            onClick={(e) => {
              handleClick(e);
              toggleAddMore();
            }}
            className={`h-[35px] w-[92px] border border-black  rounded font-semibold ${
              activebuttonDetails === "2" ? "bg-secondary text-white" : ""
            }`}
          >
            Add More
          </button>
          <button
            key={3}
            id={"3"}
            onClick={(e) => {
              handleClick(e);
              toggleDeduct();
            }}
            className={`h-[35px] w-[92px] border border-black  rounded font-semibold ${
              activebuttonDetails === "3" ? "bg-secondary text-white" : ""
            }`}
          >
            Deduct
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blocks;
