import React from 'react'

const Header = () => {
  return (
    <div>
       <div className="flex flex-1 gap-4 border-b">
          <div className="w-[70%] py-3 flex justify-between ">
            <h1 className="px-6 font-bold">Bill of Quantities</h1>
            <h1 className='font-medium'>Enter Project Title here</h1>
          </div>
    
          {/*Right side*/}
          <div className="w-1/3 border-l">
            <div className="py-3 px-4 ">
              <div>
                <h1 className="font-bold">Element 1</h1>
              </div>
    
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header
