import React from 'react';
import Sendbtn from './sendbtn-icon.png';

export default function Promptbox(props) {
  return (
    <>
    <div className="prompt">
        <button className='start-btn' disabled={props.limit === 19} onClick={props.start}>Next</button>
        <input type="text" className="prompt-input" />
        <div className="send-btn">
        <img className='send-img' src={Sendbtn} alt=""/>
        </div>
    </div>
    </>
  )
}
