import '../App.css';
import React from 'react';
import prikriti_logo from './prikriti_logo.jpg'
import iconSearch from './icons-search.svg'

export default function Navbar() {
    const handleToggle = () => {
        document.querySelector('.dropdown_menu').classList.toggle('open');
    }
  return (
    <div className='Nav'>
        <div className="nav-left">
            <div className="logo">
                <img src={prikriti_logo} alt="logo" />
            </div>
            <div className="navigation">
                <ul className="nav-items">
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Prakriti</a></li>
                    <li><a href='/'>About</a></li>
                </ul>
            </div>
      </div>
      <div className="nav-right">
        <div className="searchbox">
            <input className="searchbox-input" type="text" placeholder='search'/>
            <button className="search-btn">
            <img className="search-icon" src={iconSearch} alt="search" />
            </button>
        </div>
        <button className="login_btn">Login</button>
        <div className="toggle-btn"  onClick={handleToggle}>
            <div className='line line1'></div>
            <div className='line line2'></div>
            <div className='line line3'></div>
        </div>
      </div>
      <div className="dropdown_menu">
        <li><a href='/'>Home</a></li>
        <li><a href='/'>Prakriti</a></li>
        <li><a href='/'>About</a></li>
        <li><button className="login_btn">Login</button></li>
      </div>
    </div>
  )
}
