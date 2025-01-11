import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { MarketPlaceData } from "./MarketplaceData";

const Marketplace = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5 py-6">
      <div className="flex items-center flex-row  justify-between">
        <h3 className="font-bold">Explore MarketPlace</h3>
        <button className="underline text-secondary font-semibold">
          {" "}
          See All
        </button>
      </div>
      <div className="h-auto border mt-2 w-[420px] rounded-lg ">
        <div className="flex flex-col p-4 ">
          {MarketPlaceData.map((data,index) => (
            <div key ={index} className={`flex flex-row p-3 ${index !==MarketPlaceData.length-1 ? 'border-b': ""}`}>
              <div className="h-15 flex flex-col">
                <img src={data.image} alt="image" />
              </div>
              <div className="ml-4">
                <h3 className="font-bold">{data.Name}</h3>
                <p className="text-[#777777] font-thin text-sm">{data.Location}</p>

                <p className="mt-2 text-[#003566] text-sm font-bold">
                  {data.Price} <span className="text-[#777777] text-sm font-semibold">{data.quantity}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
