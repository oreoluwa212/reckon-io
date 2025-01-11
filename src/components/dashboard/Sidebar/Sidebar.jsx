import React, { useState } from "react";
import ReckonLogo from "@/assets/ReckonLogo.svg";
import { sidebarData1 } from "./SidebarData";
import { sidebarData2 } from "./SidebarData";
import { Link } from "react-router-dom";
import Wallpaper from "@/assets/Image/Reckon Wallpaper 1.png";

const Sidebar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (section, index) => {
    const linkIdentifier = `${section}-${index}`;
    setActiveLink(activeLink === linkIdentifier ? null : linkIdentifier);
  };

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  return (
    <div className="w-60 h-full p-3 flex flex-col border-r ">
      <div className="flex justify-start gap-3 py-3 items-center">
        <div className="h-10 w-10 flex bg-secondary items-center  justify-start rounded-full ">
          <img
            src={ReckonLogo}
            alt="ReckonLogo"
            className="h-[17px] w-[15px] mx-auto"
          />
        </div>
        <h3 className="text-xl font-semibold">Reckon IO</h3>
      </div>
      <hr className="mt-4" />

      <div className="flex-1">
        <p className="font-bold text-[#7A7979] mt-4">MAIN MENU</p>

        <ul className="mt-2 space-y-2">
          {sidebarData1.map((data, index) => (
            <li key={index} className="font-medium rounded-md">
              <Link to={data.path}>
                <div
                  className={`py-2 px-3 flex justify-start items-center text-sm font-semibold effect ${
                    activeLink === `1-${index}` ? "bg-secondary rounded-lg" : ""
                  }`}
                  onClick={() => {
                    handleLinkClick(1, index);
                    toggleDropdown(data.id);
                  }}
                >
                  <img
                    src={data.image}
                    alt={data.title}
                    className={`transition-all duration-100 ${
                      activeLink === `1-${index}` ? "fill-[#FFFFFF]" : ""
                    }`}
                  />
                  <span
                    className={`ml-3 transition-all duration-300 ${
                      activeLink === `1-${index}`
                        ? "text-white"
                        : "text-[#7A7979]"
                    }`}
                  >
                    {data.title}
                  </span>
                </div>
              </Link>

              {dropdownOpen === data.id && data.subNav && (
                <ul className="ml-8 mt-2">
                  {data.subNav.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="mt-2 block text-sm  text-[#7A7979] hover:text-[#000000] hover:font-semibold"
                    >
                      <Link to={subItem.path}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <hr className="mt-4" />
          <div>
            <ul className="mt-3 space-y-2">
              {sidebarData2.map((data, index) => (
                <Link to={data.path}>
                  <li key={index}>
                    <div
                      className={`py-2 px-3 flex justify-start text-sm items-center font-semibold cursor-pointer effect ${
                        activeLink === `2-${index}`
                          ? "bg-secondary rounded-lg"
                          : ""
                      }`}
                      onClick={() => {
                        handleLinkClick(2, index);
                        toggleDropdown(data.id);
                      }}
                    >
                      <img
                        src={data.image}
                        alt={data.title}
                        className={`transition-all duration-300 ${
                          activeLink === `2-${index}` ? "fill-[#FFFFFF]" : ""
                        }`}
                      />
                      <span
                        className={`ml-3 transition-all duration-300 ${
                          activeLink === `2-${index}`
                            ? "text-white"
                            : "text-gray-500"
                        }`}
                      >
                        {data.title}
                      </span>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </ul>
      </div>
      <div>
        <img src={Wallpaper} className="mt-12 rounded-lg mx-auto" />
      </div>
      <div className="mt-4 mx-auto items-center">
        <div className="h-30 w-19 bg-[#289693] judtify-center rounded-lg p-3">
          <p className="text-white font-bold text-xl  ">
            Do you sell building <br />
            materials?
          </p>
          <p className="text-sm text-white leading-tight mt-2">
            Be part of our growing <br />
            community of vendors and <br />
            market to our audience
          </p>
          <button className="bg-white mt-6 h-9 w-32 font-bold text-center text-sm rounded-lg">
            Register Here
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
