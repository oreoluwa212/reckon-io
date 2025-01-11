import React from 'react'

const Overview = () => {
  return (
    <div className='p-6 h-'>
      <h3 className='font-bold'>Overview </h3>
      <div className='grid grid-cols-3 mt-2 gap-4 w-[650px]'>
        <div className='border border-bg-[#E1E8EF] p-4 rounded-lg'> 
            <h3 className='font-bold'>Material Schedule</h3>
            <p className='mt-4 text-4xl font-bold text-[#003566]'> 200 </p>
            <p className='mt-3 text-[#7A7979] text-sm font-extralight'> Created in the past month</p>
        </div>

        <div className='border border-bg-[#E1E8EF] p-4 rounded-lg'>
            <h3 className='font-bold'>Bill of Quantities</h3>
            <p className='mt-4 text-4xl font-bold text-[#FC7750]'>150</p>
            <p className='mt-3 text-[#7A7979] text-sm font-extralight'>Created in the past month</p>
        </div>

        <div className='border border-bg-[#E1E8EF] p-4 rounded-lg'>
            <h3 className='font-bold'>Files</h3>
            <p className='mt-4 text-4xl font-bold text-[#289693]'>79</p>
            <p className='mt-3 text-[#7A7979] text-sm font-extralight'>Exported in the past month</p>
        </div>
      </div>
    </div>
  )
}

export default Overview
