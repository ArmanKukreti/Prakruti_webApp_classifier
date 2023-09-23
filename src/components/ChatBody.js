import React from 'react';
import BotChat from './BotChat';
import Userchat from './Userchat';
import Promptbox from './Promptbox';
import { useState, useEffect } from 'react';
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'


export default function ChatBody() {
//   const handleSend = () => {
//     // Get the input element
//     const inputElement = document.querySelector(".prompt-input");

//     // Get the value from the input
//     const userMessage = inputElement.value;

//     // Create a <p> element to display the user's message
//     const p = document.createElement('p');
//     p.textContent = userMessage;

//     // Get the container with the class "user-msg" and append the <p> element
//     const userMsgContainer = document.querySelector(".user-msg");
//     userMsgContainer.appendChild(p);

//     // Clear the input field
//     inputElement.value = "";
//   };
    
    // const getData = async () => {
    //     const url = "https://voyegerz.pythonanywhere.com/ask_question";
    //     let data = await fetch(url, {
    //         method: 'GET'
    //     });
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     const question = parsedData.question;
    //     console.log("Question:", question);
    //     return parsedData;
    // }


    const generateRandomValues = () => {
      const total = 100; // The total percentage should be 100%
      const value1 = Math.floor(Math.random() * total); // Generate a random percentage for value1
      const value2 = Math.floor(Math.random() * (total - value1)); // Generate a random percentage for value2
      const value3 = total - value1 - value2; // Calculate value3 to ensure the total is 100%
      return `Vata=${value1}%, Pitta=${value2}%, Kapha=${value3}%`;
    };

    const randomValues = generateRandomValues();
    


    let i=0;
    const [selectAns, setSelectAns] = useState({
        options: [],
        question: [],
        i:i
    });

    const [chatSections, setChatSections] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://voyegerz.pythonanywhere.com/ask_question", {
              method: 'GET'
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const parsedData = await response.json();
    
            setSelectAns({
              options: parsedData.options,
              question: parsedData.questions,
              i: 0
            });
    
            const newChatSection = (
              <div className="chat-section" key={chatSections.length}>
                <BotChat question={parsedData.questions[0]} />
                <Userchat
                  option1={parsedData.options[0][0]}
                  option2={parsedData.options[0][1]}
                  option3={parsedData.options[0][2]}

                />
              </div>
            );
    
            setChatSections([newChatSection]);
          } catch (error) {
            console.error("Network error:", error);
          }
        };
    
        fetchData();
      }, []); 

    
      const handleClick = () => {
        const updatedI = selectAns.i + 1;

        setSelectAns((prevState) => ({
          ...prevState,
          i: updatedI
        }));
        console.log(selectAns);
        const newChatSection = (
          <div className="chat-section" key={chatSections.length}>
            <BotChat question={selectAns.question[updatedI]} />
            <Userchat
              option1={selectAns.options[updatedI][0]}
              option2={selectAns.options[updatedI][1]}
              option3={selectAns.options[updatedI][2]}
            />
          </div>
        );
    
        setChatSections((prevSections) => [...prevSections, newChatSection]);

        if (selectAns.i === 18) {

          setTimeout(() => {
            const botChatSection = (
              <div className="chat-section" key={chatSections.length + 1}>
                <BotChat question={randomValues} />
              </div>
            );
      
            setChatSections((prevSections) => [...prevSections, botChatSection]);
          }, 2000); 
        }
      };
      

  return (
    <>
      <Sidebar/>
      {/* <Header/> */}
      <div className="chat-body">
        {/* Render chat sections */}
        {chatSections.map((section, index) => (
          <React.Fragment key={index}>{section}</React.Fragment>
        ))}
        <Promptbox start={handleClick} limit={selectAns.i}/>
      </div>
    </>
  )
}
