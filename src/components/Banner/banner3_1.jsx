import React from 'react'
import './banner3_1.scss'
import { FaRegCirclePlay } from "react-icons/fa6";
import image from "../../assets/hero-img.png";

const banner3_1 = () => {
  return (
    <div className='bannerMain flex'>
      <div className="content">
        <h1 className='content_main'>Elegant and creative solutions</h1>
        <p>We are team of talented designers making websites with Bootstrap</p>
        <div className="content_clink flex">
            <button className='content_click--btn'>Get Started</button>
            <div className="content_click--watch flex">
                <i><FaRegCirclePlay /></i>
                <p>Watch Video</p>
            </div>
        </div>
      </div>
      <div className="img">
        <img src={image} alt="" className='img_item'/>
      </div>
    </div>
  )
}

export default banner3_1
