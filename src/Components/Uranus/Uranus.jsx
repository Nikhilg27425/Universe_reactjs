import React from 'react'
import donutImage from './donut_large.png'
import uranus_img from './uranus.png'
import './Uranus.css'
import blue_therm from './blue_therm.png'

function Uranus() {
  return (
    <div>
      <div className="uranus_left_content">
        <div className="uranus_content">
            <div className="uranus_header">
                <p>7.Uranus</p>
            </div>
            <div className="uranus_para">
                <p>Uranus, often referred to as the "Ice Giant," is a unique and mysterious planet in our solar system. It stands out due to its distinct blue-green color and its unusual rotation axis.</p>
            </div>
        </div>

        <div className="uranus-boxes">
            <div className="uranus_mini_box">
            <img src={donutImage} alt="Donut" className="donut-image" />
            <div className="uranus_text_content">
                <div className="uranus_box_label">Diameter</div>
                <div className="uranus_box_value">31,518</div>
                <div className="uranus_box_unit">Miles</div>
            </div>
            </div>
            <div className="uranus_mini_box">
            <img src={blue_therm} alt="Donut" className="blue_therm" />
            <div className="uranus_text_content">
                <div className="uranus_box_label">Temperature</div>
                <div className="uranus_box_value">-224°</div>
                <div className="uranus_box_unit">Celcius</div>
            </div>
            </div>
        </div>
    </div>
    <div className="">
        <img src={uranus_img} className='uranus_img'/>
    </div>
    </div>
  )
}

export default Uranus
