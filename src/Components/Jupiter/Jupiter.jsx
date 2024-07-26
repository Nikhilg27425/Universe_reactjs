import React from 'react'
import './Jupiter.css'
import donutImage from './donut_large.png'
import jupiter_img from './jupiter.png'
import blue_therm from './blue_therm.png'

function Jupiter() {
  return (
    <div>
        <div className="jupiter_all_content">
        <div className="jupiter_left_content">
            <div className="jupiter_content">
                <div className="jupiter_header">
                    <p>5.Jupiter</p>
                </div>
                <div className="jupiter_para">
                    <p>Jupiter, the largest planet in our solar system, is a gas giant known for its immense size, powerful storms, and numerous moons.</p>
                </div>
            </div>

            <div className="jupiter-boxes">
                <div className="jupiter_mini_box">
                <img src={donutImage} alt="Donut" className="donut-image" />
                <div className="jupiter_text_content">
                    <div className="jupiter_box_label">Diameter</div>
                    <div className="jupiter_box_value">86,881</div>
                    <div className="jupiter_box_unit">Miles</div>
                </div>
                </div>
                <div className="jupiter_mini_box">
                <img src={blue_therm} alt="Donut" className="blue_therm" />
                <div className="jupiter_text_content">
                    <div className="jupiter_box_label">Temperature</div>
                    <div className="jupiter_box_value">-108°</div>
                    <div className="jupiter_box_unit">Celcius</div>
                </div>
                </div>
            </div>
        </div>

            <div>
                <img src={jupiter_img} className='jupiter_image'/>
            </div>
        </div>
    </div>
  )
}

export default Jupiter
