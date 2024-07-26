import React from 'react'
import './Footer.css'
import arrow from './Button.png'
import logo from './logo.png'

function Footer() {
  return (
    <div>
      <div className="footer">

        <div className="footer_header">
          <p>Join The Education Community</p>
        </div>
        
        <div className="footer_para">
          <p>Join the Education Community today and be part of a movement that's transforming minds and shaping tomorrows.</p>
        </div>

        <div className="email_footer">
          <div className="enter_email">
            <p>Enter your email</p>
          </div>
    
          <button className='subscribe'>
              <p>Subscribe</p>
              <div className="subs_arrow">
                <img src={arrow}/>
              </div>
          </button>
        </div>

        <div className="email_bottom">
          <div className="email_bottom_logo">
            <img src={logo}/>
          </div>
          <div className="email_bottom_list">
            <a href='#' className='p'>Mercury</a>
            <a href='#' className='p'>Venus</a>
            <a href='#' className='p'>Earth</a>
            <a href='#' className='p'>Mars</a>
          </div>
          <div className="email_bottom_id">
            <p>©2023 Solarsystemdesign</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
