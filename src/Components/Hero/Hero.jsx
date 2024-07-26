import React from 'react'
import p1 from './p1.png'
import p2 from './p2.png'
import p3 from './p3.png'
import p4 from './p4.png'
import p5 from './p5.png'
import p6 from './p6.png'
import p7 from './p7.png'
import './Hero.css'

function Hero() {
  return (
    <div >
        <div className="heroe">
            
            <div className="left_planets">
                <div><img src={p1} className='planet1'/></div>
                <div><img src={p4} className="planet2"/></div>
                <div><img src={p3} className="planet3"/></div>
            </div>

            <div className="home">
                <div><img src={p7} className='planet_mid'/></div>
                <div className="home-para">
                        <h1 className='bold mb-4'>Let's Get to Know <br /> Our Solar System <br /><p className='px-20'>Galaxy</p></h1>
                    </div>
                    <div className="home-descrip">
                        <p>Embark on a cosmic journey across the ethereal expanse of the solar system Galaxy and follow the<p className='px-4'> orchestration of the cosmos and the planets weaving stories of their timeless existence.</p></p>
                    </div>
                    <div className="home-button">
                        <button className='home-btn'>Learn more
                        </button>
                    </div>
                    <div><img src={p2} className='planet_mid'/></div>
            </div>

            <div className="right_planets">
                <div><img src={p6} className="planet4"/></div>
                <div><img src={p5} className="planet5"/></div>
            </div>
        </div>
            
    </div>
    
  )
}

export default Hero
