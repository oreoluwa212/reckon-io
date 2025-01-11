import React from 'react'
import { MessageData } from './MessageData'

const Message = () => {
  return (
    <div className="px-5 ">
      <div className="flex items-center flex-row gap-40 justify-between">
        <h3 className="font-bold">Messages</h3>
        <button className="underline text-secondary font-semibold">
          {" "}
          See All
        </button>
      </div>
      <div className="h-auto border mt-2 w-[420px] rounded-lg p-3">
        {MessageData.map ((data, index)=> (
           <div key ={index} className='flex mb-6 mt-2'>
           <div className=''>
             <img src ={data.image} alt='profile' className='w-12 h-12 rounded-full obeject-fit'/>
           </div>
           <div className=' flex flex-row'>
           <div className='ml-4'>
             <p className='text-sm text-[#000000] font-bold'>{data.Name}</p>
             <span className='text-[10px] text-[#000000] font-medium'>{data.Message}</span>
           </div>
           <div className='ml-24 items-center space-y-1'>
             <p className='text-[12px] text-[#919090] font-medium'> {data.Time} </p>
             <div className='h-5 w-5 bg-secondary rounded-full ml-1 text-center'>
               <p className='text-[10px] text-white font-bold'>{data.MessageNo}</p>
             </div>
           </div>
           </div>
         </div>
        ))}
       
      </div>'
    </div>
  )
}

export default Message
