import React from 'react';
import './Navbar.css';
import { Link , NavLink } from 'react-router-dom';
import logo from './logo.png'

function Navbar() {
    return (
        <div>
            <Link to='./'>
            <div className="components">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className="list">
                    <NavLink to='/Mercury' ><a href='#'>Mercury</a></NavLink>
                    <NavLink to='/Venus' ><a href='#'>Venus</a></NavLink>
                    <NavLink to='/Earth' ><a href='#'>Earth</a></NavLink>
                    <NavLink to='/Mars' ><a href='#'>Mars</a></NavLink>
                </div>
                <div className="description">
                    <p>@2023 Slarsystemdesign</p>
                </div>
            </div>
            </Link>
        </div>
    );
}

export default Navbar;
