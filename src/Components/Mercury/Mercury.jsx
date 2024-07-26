import React from 'react'
import './Mercury.css'
import donutImage from './images/donut_large.png';
import orange_therm from './images/orange_therm.png'
import blue_therm from './images/blue_therm.png'
import mercury_img from './mer_img.png'

function Mercury() {
  return (
    <div>
      <div className="mercury">

        <div className="mercury_img">
            <img src={mercury_img} className='mercury_img'></img>
        </div>

        <div className="mercury_info">

            <div className="mer_header">
                <p>1.Mercury</p>
            </div>

            <div className="mer_para">
                <p>Mercury is the closest planet to the Sun and is known for its extreme temperatures and barren, rocky surface. It is one of the four terrestrial planets in our solar system, characterized by their solid, rocky composition.</p>
            </div>

            <div className="mer_boxes">
                <div className="mer_mini_box">
                    <img src={donutImage} alt="Donut" className="donut-image" />
                <div className="mer_text_content">
                    <div className="mer_box_label">Diameter</div>
                    <div className="mer_box_value">3,032</div>
                    <div className="mer_box_unit">Miles</div>
                </div>
            </div>

            <div className="mer_mini_box">
                <img src={orange_therm} alt="Donut" className="therm" />
                <div className="mer_text_content">
                    <div className="mer_box_label">Day time Temperature</div>
                    <div className="mer_box_value">±430°</div>
                    <div className="mer_box_unit">Celsius</div>
                </div>
            </div>

            <div className="mer_mini_box">
                <img src={blue_therm} alt="Donut" className="therm" />
                <div className="mer_text_content">
                    <div className="mer_box_label">Night time Temperature</div>
                    <div className="mer_box_value">-180°</div>
                    <div className="mer_box_unit">Celsius</div>
                </div>
            </div>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mercury
