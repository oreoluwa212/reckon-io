import { useState } from "react";
import Header from "@/components/dashboard/Blocks/Header";
import Measurement from "@/components/dashboard/Blocks/Measurement";
import BuildingPlan from "@/components/dashboard/Blocks/BuildingPlan";
import BaseCalculation from "@/components/dashboard/Blocks/BaseCalculation";

const Blocks = () => {
  const [clickedOperator, setClickedOperator] = useState("");

  // Handler to update the clicked operator
  const handleOperatorClick = (operator) => {
    setClickedOperator(operator);
  };

  return (
    <div>
      <Header onOperatorClick={handleOperatorClick} />
      <div className="flex">
        <div className="w-[69.4%] h-[900px] flex">
          <Measurement />
          <BuildingPlan />
        </div>
        <div className="w-[32.2%]">
          <BaseCalculation operator={clickedOperator} />
        </div>
      </div>
    </div>
  );
};

export default Blocks;
