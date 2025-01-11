import Header from "@/components/dashboard/BillOfQuatities/Header";
import MeasurementBill from "@/components/dashboard/BillOfQuatities/MeasurementBill";
import BillBuilding from "@/components/dashboard/BillOfQuatities/BillBuilding";
import Element from "@/components/dashboard/BillOfQuatities/Element";

const BillOfQuantities = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="w-[68.2%] h-[900px] flex">
          <MeasurementBill />
          <BillBuilding />
        </div>
        <div className="w-[30.6%]">
          <Element />
        </div>
      </div>
    </div>
  );
};

export default BillOfQuantities;
