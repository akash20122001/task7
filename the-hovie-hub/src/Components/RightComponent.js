import React from 'react'
import Navbar from './Navbar'
import Contents from './Contents'

function RightComponent() {
  return (
    <div className='w-3/4 bg-[#0F0F11] h-screen flex divide-gray-700 flex-col divide-y divide-solid'>
      <Navbar/>
      <Contents/>
      {/* <Navbar/> */}
    </div>
  )
}

export default RightComponent