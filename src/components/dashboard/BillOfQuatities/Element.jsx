import React, { useState } from "react";
import Modal from "react-modal";
import Settings from "@/assets/setting-07.svg";
import Copy from "@/assets/copy-01.svg";
import Delete from "@/assets/delete-02.svg";
import Calculate from "@/assets/Image/calculate.png";
import MetreSquare from "./Measurement/MetreSquare";
import MetreCube from "./Measurement/MetreCube";
import Numbers from "./Measurement/Numbers";
import Metre from "./Measurement/Metre";

const buttonData = [
  { name: "m", id: "m" },
  { name: <>m²</>, id: "m2" },
  { name: <> m³</>, id: "m3" },
  { name: "Nrs", id: "nrs" },
  { name: "items", id: "items" },
];

const Element = () => {
  const [activebutton, setActivebutton] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [sections, setSections] = useState([
    { id: 1, description: "", volume: "", rate: "" },
  ]);
  const [volume, setVolume] = useState("");
  const [rate, setRate] = useState("");
  const [sectionToDelete, setSectionToDelete] = useState(null);
  const [metre, setMetre] = useState(false);
  const [metreSquare, setMetreSquare] = useState(false);
  const [metreCube, setMetreCube] = useState(false);
  const [numbers, setNumbers] = useState(false);

  const openModal = (id) => {
    setSectionToDelete(id);
    setIsOpen(true);
  };

  const cancelModal = () => {
    setSectionToDelete(null);
    setIsOpen(false);
  };

  const confirmDelete = () => {
    setSections((prevSections) =>
      prevSections.filter((section) => section.id !== sectionToDelete)
    );
    cancelModal();
  };

  const addSection = () => {
    const newSection = {
      id: sections.length + 1,
      description: "",
      volume: "",
      rate: "",
    };
    setSections([...sections, newSection]);
  };

  const toggleMetre = () => {
    setMetre(!metre);
    setMetreSquare(false);
    setMetreCube(false);
    setNumbers(false);
  };

  const toggleMetreSquare = () => {
    setMetreSquare(!metreSquare);
    setMetreCube(false);
    setMetre(false);
    setNumbers(false);
  };

  const toggleMetreCube = () => {
    setMetreCube(!metreCube);
    setMetreSquare(false);
    setMetre(false);
    setNumbers(false);
  };

  const toggleNumbers = () => {
    setNumbers(!numbers);
    setMetre(false);
    setMetreSquare(false);
    setMetreCube(false);
  };

  return (
    <div>
      {/* Section Input */}
      <div className="flex w-full pl-4 mt-2">
        <p className="font-semibold">Section Title</p>
      </div>

      {/* Sections */}
      <div>
        {sections.map((section) => (
          <div
            key={section.id}
            className="border rounded-lg mt-2 ml-3 w-[96.5%]"
          >
            <div className="flex items-center justify-between p-3">
              <input
                type="text"
                placeholder="Description"
                className="font-medium p-2 bg-transparent outline-none"
              />
              <div className="space-x-4 flex">
                <button>
                  <img src={Settings} alt="SettingsButton" />
                </button>
                <button>
                  <img src={Copy} alt="CopyButton" />
                </button>
                <div>
                  <button onClick={() => openModal(section.id)}>
                    <img src={Delete} alt="DeleteButton" />
                  </button>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="px-3 py-2 font-semibold">
              <p>Enter Description Here</p>
            </div>

            {/* Buttons */}
            <div className="px-3 py-2">
              <div className="flex">
                <button
                  id={1}
                  onClick={() => {
                    setActivebutton(1);
                    toggleMetre();
                  }}
                  className={`h-[37px] w-[72px] border font-semibold rounded-l-lg ${
                    activebutton === 1 ? "bg-[#289693] text-white" : ""
                  }`}
                >
                  m
                </button>
                <button
                  id={2}
                  onClick={() => {
                    setActivebutton(2);
                    toggleMetreSquare();
                  }}
                  className={`h-[37px] w-[72px] border font-semibold ${
                    activebutton === 2 ? "bg-[#289693] text-white" : ""
                  }`}
                >
                  m²
                </button>
                <button
                  id={3}
                  onClick={() => {
                    setActivebutton(3);
                    toggleMetreCube();
                  }}
                  className={`h-[37px] w-[72px] border font-semibold ${
                    activebutton === 3 ? "bg-[#289693] text-white" : ""
                  }`}
                >
                  m³
                </button>
                <button
                  id={4}
                  onClick={() => {
                    setActivebutton(4);
                    toggleNumbers();
                  }}
                  className={`h-[37px] w-[72px] border font-semibold ${
                    activebutton === 4 ? "bg-[#289693] text-white" : ""
                  }`}
                >
                  Nrs
                </button>
                <button
                  id={5}
                  onClick={() => setActivebutton(5)}
                  className={`h-[37px] w-[72px] border font-semibold rounded-r-lg ${
                    activebutton === 5 ? "bg-[#289693] text-white" : ""
                  }`}
                >
                  items
                </button>
              </div>

              {metre && <Metre />}

              {metreSquare && <MetreSquare />}

              {metreCube && <MetreCube />}

              {numbers && <Numbers />}
            </div>

            {/* Inputs */}
            <div className="flex flex-row pl-3 pr-2 gap-2 py-2">
              {/* Volume Input */}
              <div>
                <label className="font-medium">Volume</label>
                <div>
                  <div className="relative">
                    <input
                      value={volume}
                      onChange={({ target }) => {
                        setVolume(target.value);
                      }}
                      type="text"
                      className="rounded-lg h-10 w-[98%] text-secondary font-bold items-center mt-2 y-1 outline-none bg-transparent border pl-3"
                    />
                    <div className="w-5 h-5 absolute right-5 top-5 font-medium items-center">
                      <img src={Calculate} alt="Calculate" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Rate Input */}
              <div>
                <label className="font-medium">Rate</label>
                <div>
                  <div className="relative">
                    <input
                      value={rate}
                      onChange={({ target }) => {
                        setRate(target.value);
                      }}
                      type="text"
                      className="rounded-lg h-10 w-[98%] text-secondary font-bold items-center mt-2 y-1 bg-transparent outline-none border pl-10"
                    />
                    <div className="w-5 h-5 absolute left-4 top-4 font-bold text-secondary items-center">
                      ₦
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add Section and Add Item Buttons */}
        <div className="py-3 pl-3 flex">
          <button
            className="w-[200px] bg-secondary text-white font-semibold items-center h-[39px] rounded-lg"
            onClick={addSection}
          >
            Add Section
          </button>
          <button className="w-[200px] border ml-5 border-secondary font-semibold h-[39px] border-dashed rounded-lg">
            Add Item
          </button>
        </div>
      </div>

      {/* Delete Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={cancelModal}
        className="fixed inset-0 top-20 left-60 h-40 mx-auto bg-white rounded-lg p-6 w-96 shadow-lg justify-center items-center"
        contentLabel="Delete Section Modal"
      >
        <div className="text-center">
          <h2 className="font-medium">
            Are you sure you want to delete this section?
          </h2>
        </div>
        <div className="flex gap-3 mt-5">
          <button
            onClick={cancelModal}
            className="w-full border border-black text-black font-semibold items-center h-[59px] rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={confirmDelete}
            className="w-full bg-[#FF2626] text-white font-semibold items-center h-[59px] rounded-lg"
          >
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Element;
