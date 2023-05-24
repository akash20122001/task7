import React from "react";

function Card({name, rating, image}) {
    const imagePath = "https://image.tmdb.org/t/p/original" + image;
    const imageCall = () => {
      console.log(imagePath);
    }
    const naam = name?.slice(0,7);
  return (
    // <div className='bg-white bg-cover bg-center h-[220px] w-[220px] rounded-2xl mr-6'>
    //     <img className=" h-[220px] w-[220px]" src='https://image.tmdb.org/t/p/original/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg'/>
    // </div>
    <div onClick={imageCall}
      className=" bg-transparent h-[220px] w-[220px] bg-cover bg-center relative rounded-2xl mr-6 "
      style={{
        backgroundImage:
          `url(${imagePath})`,
      }}
    >
      {/* <div className='flex flex-col'> */}
      <div className="bg-[#0F0F11] w-[60px] rounded-full top-3 left-4 absolute">⭐ {rating?.toString().slice(0,4)}</div>
      <div className="w-[100px] text-2xl bottom-[5.6rem] left-4 bg-transparent absolute font-bold text-white">
        {naam}
      </div>
      <div className="w-[100px] text-md bottom-16 left-4 font-bold bg-transparent absolute  text-gray-200">
        2021
      </div>
      {/* </div> */}
      <button className="px-3 py-1 left-3 bottom-6 absolute text-white font-bold bg-red-600 opacity-60 rounded-full">
        Watch now
      </button>
      <button className="px-3 py-1 right-6 bottom-6 absolute text-white font-bold bg-gray-600 opacity-60 rounded-full">
        +
      </button>
    </div>
  );
}

export default Card;
