import React from 'react'
import donutImage from './donut_large.png'
import saturn_img from './saturn.png'
import './Saturn.css'
import blue_therm from './blue_therm.png'

function Saturn() {
  return (
    <div>
    <div className="saturn_all_content">

        <div>
            <img src={saturn_img} className='saturn_image'/>
        </div>

        <div className="saturn_left_content">

            <div className="saturn_content">
                <div className="saturn_header">
                    <p>6.Saturn</p>
                </div>
                <div className="saturn_para">
                    <p>Saturn, often referred to as the "Ringed Planet," is known for its stunning system of rings that encircle the planet's equator. It's the sixth planet from the Sun and is one of the most visually distinctive objects in our solar system, with more than 80 known satellites.</p>
                </div>
            </div>

            <div className="saturn-boxes">
                <div className="saturn_mini_box">
                    <img src={donutImage} alt="Donut" className="donut-image" />
                <div className="saturn_text_content">
                    <div className="saturn_box_label">Diameter</div>
                    <div className="saturn_box_value">74,898</div>
                    <div className="saturn_box_unit">Miles</div>
                </div>
                </div>
                <div className="saturn_mini_box">
                    <img src={blue_therm} alt="Donut" className="blue_therm" />
                <div className="saturn_text_content">
                    <div className="saturn_box_label">Temperature</div>
                    <div className="saturn_box_value">-139°</div>
                    <div className="saturn_box_unit">Celcius</div>
                </div>
            </div>
            
        </div>
    </div>
    
        
    </div>
</div>
  )
}

export default Saturn
