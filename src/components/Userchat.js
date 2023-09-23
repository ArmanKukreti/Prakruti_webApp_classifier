import React, { useState } from 'react';
import prikriti_logo from './prikriti_logo.jpg';

export default function Userchat(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle user clicks and set the selected option
  const handleUserClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="user-chats">
      <div className="user-msg">
        <p
          className={`u-chat u-chat1 ${selectedOption === props.option1 ? 'selected' : ''}`}
          id="us1"
          onClick={() => handleUserClick(props.option1)}
        >
          {props.option1}
        </p>
        <p
          className={`u-chat u-chat2 ${selectedOption === props.option2 ? 'selected' : ''}`}
          id="us2"
          onClick={() => handleUserClick(props.option2)}
        >
          {props.option2}
        </p>
        <p
          className={`u-chat u-chat3 ${selectedOption === props.option3 ? 'selected' : ''}`}
          id="us3"
          onClick={() => handleUserClick(props.option3)}
        >
          {props.option3}
        </p>
      </div>
      <div className="user-img">
        <img className="u-img" src={prikriti_logo} alt="" />
      </div>
    </div>
  );
}
