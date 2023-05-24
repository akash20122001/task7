import React from 'react'

function LeftComponent() {
  return (
    <div className='w-1/4 sticky top-0 bg-[#0F0F11] flex flex-col p-8'>
        <div className='flex text-4xl justify-center font-bold'>
            <h1 className='text-white'>The Movie</h1>
            <h1 className='text-red-700'>Hub</h1>
        </div>
        <h1 className='text-gray-400 font-bold mt-10'>News feed</h1>
        <div className='flex flex-col text-white text-xl font-bold mt-6'>
            <div className=' bg-red-700 p-4 rounded-3xl'>Browse</div>
        </div>
        <div className='flex flex-col text-white text-xl font-bold mt-6'>
            <div className='bg-transparent hover:bg-red-700 p-4 rounded-3xl'>Trending</div>
        </div>
        <div className='flex flex-col text-white text-xl font-bold mt-6'>
            <div className='bg-transparent hover:bg-red-700 p-4 rounded-3xl'>Popular</div>
        </div>
        <div className='flex flex-col text-white text-xl font-bold mt-6'>
            <div className='bg-transparent hover:bg-red-700 p-4 rounded-3xl'>Upcoming</div>
        </div>
    </div>
  )
}

export default LeftComponent