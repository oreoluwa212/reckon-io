const Header = ({ onOperatorClick }) => {
  return (
    <div className="flex flex-1 gap-4 border-b">
      <div className="w-[68%] py-3 ">
        <h1 className="px-6 font-bold">Material Schedule</h1>
      </div>

      {/*Right side*/}
      <div className="w-[33%] border-l">
        <div className="py-3 px-4 flex justify-between items-center">
          <div>
            <h1 className="font-bold">Calculations</h1>
          </div>
          <div className="space-x-2 flex flex-row">
            <button
              className="h-7 w-7 bg-[#636363] rounded text-white font-semibold flex text-center items-center justify-center"
              onClick={() => onOperatorClick("+")}
            >
              <span>+</span>
            </button>
            <button
              className="h-7 w-7 bg-[#636363] rounded text-white font-semibold flex text-center items-center justify-center"
              onClick={() => onOperatorClick("*")}
            >
              <span>*</span>
            </button>
            <button
              className="h-7 w-7 bg-[#636363] rounded text-white font-semibold flex text-center items-center justify-center"
              onClick={() => onOperatorClick("-")}
            >
              <span>−</span>
            </button>
            <button
              className="h-7 w-7 bg-[#636363] rounded text-white font-semibold flex text-center items-center justify-center"
              onClick={() => onOperatorClick("/")}
            >
              <span>/</span>
            </button>
            <button
              className="h-7 w-7 bg-[#636363] rounded text-white font-semibold flex text-center items-center justify-center"
              onClick={() => onOperatorClick("√")}
            >
              <span>√</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
