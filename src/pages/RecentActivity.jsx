import { useState } from "react";
import { Projectdata } from "@/components/dashboard/RecentProject/ProjectData";

const RecentActivity = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  // Function to open the modal and position it relative to the clicked icon
  const openModal = (event) => {
    const rect = event.target.getBoundingClientRect();
    setModalPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX - 130, // Adjust -130 to position to the left of the icon
    });
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="px-6">
      <div className="flex justify-between mb-3 py-3">
        <p className="font-bold">Recent Projects</p>
      </div>
      <div className="rounded-lg border flex-1 p-4 items-center w-full">
        <div className="mt-3 mb-6">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b text-sm text-[#93A2AF] font-semibold">
                <td className="px-3">S/N</td>
                <td className="py-2 px-4">Project Title</td>
                <td>Elements</td>
                <td className="px-6">Date</td>
                <td className="px-6">Time</td>
                <td>Options</td>
              </tr>
            </thead>
            <tbody>
              {Projectdata.map((data) => (
                <tr key={data.SN} className="space-y-6 items-center border-b">
                  <td className="py-3 px-4 font-semibold text-sm">{data.SN}</td>
                  <td className="py-3 px-4 font-semibold text-sm">
                    {data.title}
                  </td>
                  <td className="py-3 px-4 font-semibold text-sm">
                    {data.Elements}
                  </td>
                  <td className="py-3 px-4 font-semibold text-[#8C8787] text-sm">
                    {data.Date}
                  </td>
                  <td className="py-3 px-4 font-semibold text-[#8C8787] text-sm">
                    {data.Time}
                  </td>
                  <td className="py-2 px-4 items-center">
                    <button
                      onClick={openModal}
                      className="items-center text-center"
                    >
                      <img
                        src={data.image}
                        alt="Project icon"
                        className="h-5 w-5"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Custom Modal with Tailwind Styling */}
      {modalIsOpen && (
        <div
          className="absolute bg-white border rounded-lg shadow-lg p-4 w-40 mt-2"
          style={{ top: modalPosition.top, left: modalPosition.left }}
        >
          <div className="font-medium text-[#1F1F1F] text-sm flex flex-col items-start gap-2">
            <button onClick={closeModal} className="hover:text-blue-500">
              Edit
            </button>
            <button onClick={closeModal} className="hover:text-blue-500">
              Export
            </button>
            <button
              onClick={closeModal}
              className="text-[#FF2626] hover:text-[#FF2626]"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentActivity;
