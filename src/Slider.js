import React from 'react';

const Slider = () => {
    return (
        <div className='p-5'>
            <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full h-80">
    <img src="https://thumbs.dreamstime.com/b/flat-lay-passport-white-plane-model-computer-laptop-flat-lay-passport-white-plane-model-computer-laptop-pastel-111390990.jpg" className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-80">
    <img src="https://www.blsindia-canada.com/ottawa-jurisdiction/images/slider-2.jpg" alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-80">
    <img src="https://redleaffdk.com/images/slider1.jpg " alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-80">
    <img src="https://theincredibleglobe.com/wp-content/uploads/2022/09/UK-Student-Visa-Updated-rules-for-Indian-students-2022-1.webp" alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider;