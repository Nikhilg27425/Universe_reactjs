import React from 'react'
import donutImage from './donut_large.png'
import neptune_img from './Neptune.png'
import './Neptune.css'
import blue_therm from './blue_therm.png'

function Neptune() {
  return (
    <div>
        <div className="neptune_left_content">

            <div className="neptune_content">
                <div className="neptune_header">
                    <p>8.Neptune</p>
                </div>
                <div className="neptune_para">
                    <p>Neptune, often called the "Blue Giant," is the eighth and farthest planet from the Sun in our solar system. It is a gas giant known for its striking blue color and turbulent atmosphere.</p>
                </div>
            </div>

            <div className="neptune-boxes">
                <div className="neptune_mini_box">
                <img src={donutImage} alt="Donut" className="donut-image" />
                <div className="neptune_text_content">
                    <div className="neptune_box_label">Diameter</div>
                    <div className="neptune_box_value">30,775</div>
                    <div className="neptune_box_unit">Miles</div>
                </div>
                </div>
                <div className="neptune_mini_box">
                <img src={blue_therm} alt="Donut" className="blue_therm" />
                <div className="neptune_text_content">
                    <div className="neptune_box_label">Temperature</div>
                    <div className="neptune_box_value">-218°</div>
                    <div className="neptune_box_unit">Celcius</div>
                </div>
                </div>
            </div>
    </div>

        <div className="">
            <img src={neptune_img} className='neptune_img'/>
        </div>
        
    </div>
  )
}

export default Neptune
