import React from 'react' ;
import './Sun.css' ;
import donutImage from './donut_large.png';
import temp_scale_Image from './orange_therm.png'

function Sun() {
  return (
    <div>   
        <div className="sun">
            {/* image section starts*/}
            <div className="sun-image"></div>
            {/* image section ends */}


            {/* box starts */}
            <div className="box">
                <div className='sun_heading'>
                    <h1>.Sun</h1>
                </div>
                <div className="sun-para">
                    <p>The Sun is a huge, glowing ball of hot plasma at the centre of our solar system and provides the vital energy needed for life on Earth. This energy radiates outward in the form of light and heat, providing warmth and light to the entire solar system.</p>
                </div>
                <div className="sun-boxes">
                    <div className="sun_mini_box">
                        <img src={donutImage} alt="Donut" className="donut-image" />
                    <div className="sun_text_content">
                        <div className="sun_box_label">Diameter</div>
                        <div className="sun_box_value">870,000</div>
                        <div className="sun_box_unit">Miles</div>
                    </div>
                    </div>
                    <div className="sun_mini_box">
                        <img src={temp_scale_Image} alt="Donut" className="temp_scale_Image" />
                    <div className="sun_text_content">
                        <div className="sun_box_label">Temperature</div>
                        <div className="sun_box_value">±5,500°</div>
                        <div className="sun_box_unit">Celsius</div>
                    </div>
                </div>
            </div>
                
        </div>
        </div>
            {/* box ends */}
    </div>
  )
}

export default Sun
