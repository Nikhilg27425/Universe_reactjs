import React from 'react'
import './Mars.css'
import donutImage from './donut_large.png' 
import orange_therm from './orange_therm.png'
import blue_therm from './blue_therm.png'
import mars_img from './images/mars.png'
import m_arrow from './images/arrow.png'

function Mars() {
  return (
    <div>
      <div className="mars">

        <div className="mars_left_content">
            <div className="mars_left_header">
                <p>4.Mars</p>
            </div>
            <div className="mars_left_para">
                <p>Mars, often referred to as the "Red Planet," is the fourth planet from the Sun and has captivated human imagination for centuries with its reddish appearance and potential for hosting life.</p>
            </div>
            <div className="mars_img">
              <img src={mars_img} className='mars_img'/>
            </div>
        </div>
        
        <div className="mars_mid_content">
            <div className="mars_arrow">
              <img src={m_arrow} className='mars_arrow'/>
            </div>
            <div className="mars_mid_header">
                <p>Martian Moons</p>
            </div>
            <div className="mars_mid_para">
                <p>Mars has two small moons, Phobos and<br />Deimos, which are irregularly shaped and<br /> thought to be captured asteroids.</p>
            </div>
        </div>

        <div className="mars-boxes">
          <div className="mars_mini_box">
            <img src={donutImage} alt="Donut" className="donut-image" />
            <div className="mars_text_content">
              <div className="mars_box_label">Diameter</div>
              <div className="mars_box_value">4,212</div>
              <div className="mars_box_unit">Miles</div>
            </div>
          </div>
          <div className="mars_mini_box">
            <img src={orange_therm} alt="Donut" className="therm_img" />
            <div className="mars_text_content">
              <div className="mars_box_label">Day time Temperature</div>
              <div className="mars_box_value">±20°</div>
              <div className="mars_box_unit">Celcius</div>
            </div>
          </div>
          <div className="mars_mini_box">
            <img src={blue_therm} alt="Donut" className="therm_img" />
            <div className="mars_text_content">
              <div className="mars_box_label">Night time Temperature</div>
              <div className="mars_box_value">-73°</div>
              <div className="mars_box_unit">Celcius</div>
            </div>
          </div>
        </div>

      </div>
        
    </div>
  )
}

export default Mars
