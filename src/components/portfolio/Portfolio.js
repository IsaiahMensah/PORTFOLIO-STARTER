import React from 'react'
import "./Portfolio.css"
import {Swiper ,SwiperSlide,swiperSlider} from "swiper/react"
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import "swiper/css"

const Portfolio = () => {
  return (
    <div className='portfolio '>
        {/* hedading */}
        <span>Recent Project</span>
        <span>Portfolio</span>
        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={2}
        grab grabCursor={true}
        className="portfolio-slider"
        >
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
             
        </Swiper>
    </div>
  )
}

export default Portfolio