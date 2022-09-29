import React from 'react'
import Slider from 'react-slick';
import Ava01 from '../../../../images/ava-1.jpg'
import Ava02 from '../../../../images/ava-2.jpg'
import Ava03 from '../../../../images/ava-3.jpg'
import "../../../../Styles/slider.css"

export default function Testimonials() {
  
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed:3000,
    swipeToSlide: true,
    slidesToShow:1,
    slidesToScroll:1
  };
  
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sunt inventore numquam aut ea magni
          vitae facilis,
          beatae et, quod sed doloribus placeat eveniet, aliquid temporibus non fugiat reprehenderit nisi.
        </p>
        <div className = "slider__content d-flex align-items-center gap-3">
          <img src={Ava01} alt="alt" className='rounded' />
          <h6>Musa Adeleke</h6>
        </div>
      </div>
      <div>
      <p className="review__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sunt inventore numquam aut ea magni
          vitae facilis,
          beatae et, quod sed doloribus placeat eveniet, aliquid temporibus non fugiat reprehenderit nisi.
        </p>
        <div className = "slider__content d-flex align-items-center gap-3">
          <img src={Ava02} alt="alt" className='rounded' />
          <h6>Michael Salami</h6>
        </div>
      </div>
      <div>
      <p className="review__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sunt inventore numquam aut ea magni
          vitae facilis,
          beatae et, quod sed doloribus placeat eveniet, aliquid temporibus non fugiat reprehenderit nisi.
        </p>
        <div className = "slider__content d-flex align-items-center gap-3">
          <img src={Ava03} alt="alt" className='rounded' />
          <h6>Adeyemi bukola</h6>
        </div>
      </div>
    </Slider>
  )
}
