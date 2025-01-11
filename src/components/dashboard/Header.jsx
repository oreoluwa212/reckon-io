import React from "react";
import ProfileImage from "@/assets/Image/person_one.jpg";
import SearchIcon from "@/assets/search-01.svg";
import Bell from "@/assets/bell1.svg";

const Header = () => {
  return (
    <div className="flex border-b justify-between items-center p-3 px-4">
      <div className="flex items-center gap-2">
        <img
          src={ProfileImage}
          alt="profile_image"
          className="h-12 object-fit rounded-full"
        />
        <p className="font-bold"> Hello Emmanuel,</p>
      </div>
      <div className="flex">
        <div className="relative p-2 bg-[#FIF7FC]">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full h-10 w-[364px] py-1 pl-10 pr-4 bg-[#F1F7FC]"
          />
          <div className="w-5 h-5 absolute left-6 top-5 items-center">
            <img src={SearchIcon} alt="SearchIcon" />
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <button className="relative text-xl text-gray-600">
            <img src={Bell} alt="BellIcon" />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-[#FC7750] text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 ">
              1
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
