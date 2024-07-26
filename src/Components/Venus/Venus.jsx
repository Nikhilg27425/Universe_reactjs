import React from 'react'
import './Venus.css'
import donutImage from './images/donut_large.png';
import orange_therm from './images/orange_therm.png'
import venus_image from './images/venus.png'

function Venus() {
  return (
    <div>
    <div className="venus">
      <div className="venus_info">
          <div className="venus_header">
              <p>2.Venus</p>
          </div>
          <div className="venus_para">
              <p>Venus is often referred to as Earth's "sister planet" due to its similar size and composition, but it stands out with its extremely inhospitable environment</p>
          </div>
          <div className="venus_boxes">
              <div className="venus_mini_box">
                  <img src={donutImage} alt="Donut" className="donut-image" />
              <div className="venus_text_content">
                  <div className="venus_box_label">Diameter</div>
                  <div className="venus_box_value">7,521</div>
                  <div className="venus_box_unit">Miles</div>
            </div>
          </div>
          <div className="venus_mini_box">
              <img src={orange_therm} alt="Donut" className="therm" />
              <div className="venus_text_content">
                  <div className="venus_box_label">Temperature</div>
                  <div className="venus_box_value">±475°</div>
                  <div className="venus_box_unit">Celsius</div>
              </div>
          </div>
          </div>
      </div>
      
      <div className="venus_img">
        <img src={venus_image} className='venus_img' />
      </div>
      
    </div>
  </div>
  )
}

export default Venus
