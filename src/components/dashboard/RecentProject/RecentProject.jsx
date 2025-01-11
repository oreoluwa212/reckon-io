import React, { useState, useEffect } from 'react';
import { Projectdata } from './ProjectData';

const RecentProject = () => {
  const firstTwelveProjects = Projectdata.slice(0, 12);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const openModal = (event) => {
    const rect = event.target.getBoundingClientRect();
    setModalPosition({ top: rect.top + window.scrollY, left: rect.left + window.scrollX - 130 });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.modal-container') && !e.target.closest('button')) {
        closeModal();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='px-6'>
      <div className='flex justify-between mb-3'>
        <p className='font-bold'>Recent Projects</p>
        <button className="underline text-secondary font-semibold">See All</button>
      </div>
      <div className='rounded-lg border flex-1 p-4 items-center w-[650px]'>
        <div className='mt-3 mb-6'>
          <table className='w-full table-auto'>
            <thead>
              <tr className='border-b text-sm text-[#93A2AF] font-semibold'>
                <td className='px-3'>S/N</td>
                <td className='py-2 px-4'>Project Title</td>
                <td>Elements</td>
                <td>Options</td>
              </tr>
            </thead>
            <tbody className='items-center'>
              {firstTwelveProjects.map((data) => (
                <tr key={data.SN} className={`space-y-3 items-center border-b`}>
                  <td className='py-3 px-4 font-semibold text-sm'>{data.SN}</td>
                  <td className='py-3 px-4 font-semibold text-sm'>{data.title}</td>
                  <td className='py-3 px-4 font-semibold text-sm'>{data.Elements}</td>
                  <td className='py-2 px-4'>
                    <button onClick={openModal} className="items-center text-center">
                      <img src={data.image} className='items-center h-5 w-5 mt-2' alt="Project icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalIsOpen && (
        <div
          className="absolute bg-white border rounded-lg shadow-lg p-4 w-40 mt-2 modal-container"
          style={{ top: modalPosition.top, left: modalPosition.left }}
        >
          <div className="font-medium text-[#1F1F1F] text-sm flex flex-col items-start gap-2">
            <button onClick={closeModal} className="hover:text-blue-500">Edit</button>
            <button onClick={closeModal} className="hover:text-blue-500">Export</button>
            <button onClick={closeModal} className="text-[#FF2626] hover:text-[#FF2626]">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentProject;
