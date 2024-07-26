import React from 'react'
import './Earth.css'
import donutImage from './donut_large.png';
import rocket from './images/plane.png'
import earth from './images/earth.png'
import layer1 from './images/layer1.png'
import arrow from './images/arrow.png'

function Earth() {
  return (
    <div>
        <div className="earth">

            {/* upper content starts */}

            <div className="upper_content">
                <div className="earth_info">
                    <div className="earth_heading">
                        <p>3.Earth</p>
                    </div>
                    <div className="earth_para">
                        <p>Earth is the third planet from the Sun and the only known planet to support life. Earth is the only planet known to harbor life. It's a diverse and dynamic world with a wide range of ecosystems, climates, and geological features.</p>
                    </div>
                </div>
                <div className="earth_mini_box">
                    <img src={donutImage} alt="Donut" className="donut-image" />
                    <div className="earth_text_content">
                        <div className="earth_box_label">Diameter</div>
                        <div className="earth_box_value">7,918</div>
                        <div className="earth_box_unit">Miles</div>
                    </div>
                </div>
            </div>

            {/* upper content ends */}

            {/* middle content starts */}

            <div className="middle_content">
                <div className="moon_mid_info">
                    <div className="moon_mid_header">
                        <p>Moon Planet</p>
                    </div>
                    <div className="moon_mid_para">
                        <p>Earth has one natural satellite, the Moon, which plays a role in stabilizing the planet's rotation and tides. The Moon's gravitational pull causes ocean tides to rise and fall.</p>
                    </div>
                </div>
            </div>

            {/* middle content ends */}

            {/* image section starts */}

            <div>
                <img src={rocket} className='earth_rocket'/>
            </div>

            <div>
                <img src={earth} className='earth_img' />
                <div>
                    <img src={layer1} className='earth_img_l1' />
                </div>
            </div>
            <div className="man"></div>
            <div>
                    <img src={arrow} className='arrow_img'/>
            </div>

            {/* image section ends */}

        </div>
    </div>
  )
}

export default Earth
