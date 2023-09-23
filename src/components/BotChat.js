import React from 'react';
import prikriti_logo from './prikriti_logo.jpg';

export default function BotChat(props) {

  return (
    <div className="prompt">
        <div className="bot-chats">
            <img className="bot-img" src={prikriti_logo} alt="" />
            <p className='b-chat' >{props.question}</p>
        </div>           
    </div>
  )
}
