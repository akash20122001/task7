import React from 'react'

function Carousel() {
  return (
    <div>
      <div className="carousel w-[80%] mx-auto my-8">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/018/332/749/large/george-britton-infinitywarlongpostercc.jpg?1558989465"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/018/332/749/large/george-britton-infinitywarlongpostercc.jpg?1558989465"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/018/332/749/large/george-britton-infinitywarlongpostercc.jpg?1558989465"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/018/332/749/large/george-britton-infinitywarlongpostercc.jpg?1558989465"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center  w-full py-2 gap-2">
        <a href="#item1" className="btn font-bold btn-xs bg-red-600">
          1
        </a>
        <a href="#item2" className="btn btn-xs bg-red-600">
          2
        </a>
        <a href="#item3" className="btn btn-xs bg-red-600">
          3
        </a>
        <a href="#item4" className="btn btn-xs bg-red-600">
          4
        </a>
      </div>
    </div>
  )
}

export default Carousel