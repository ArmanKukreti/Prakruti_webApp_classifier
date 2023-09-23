import '../App.css';
import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <>
    <Navbar/>
    <div className="container">
        <div className="hero">
            <img className="hero_img" src="https://i0.wp.com/www.jogiayurved.com/wp-content/uploads/2023/08/kaph.webp?w=1000&ssl=1" alt="hero_Img" />
        </div>
        <div className="ellipse_container">
            <div className="ellipse ellipse1"></div>
            <div className="ellipse ellipse2"></div>
            <div className="ellipse ellipse3"></div>
            <div className="ellipse ellipse4"></div>
            <div className="ellipse ellipse5"></div>
            <div className="ellipse ellipse6"></div>
            <div className="ellipse ellipse7"></div>
        </div>
        <div className="hero_text">
            <p className="text_line text_line1">Know Your</p>
            <p className="text_line text_line2">Prakriti?</p>
            <p className="text_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae numquam harum commodi. Provident vel quo sequi cupiditate ipsam! Eum temporibus incidunt libero amet, sequi ipsa natus a quo quidem.</p>
            <button className="quiz-btn">Quiz me!</button>
        </div>
    </div>
    </>
  )
}
