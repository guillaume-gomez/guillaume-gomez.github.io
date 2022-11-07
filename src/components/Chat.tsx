import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import "./Chat.css";
import { GITHUB, LINKEDIN, MAIL } from '../constants';

interface ChatInterface {
}

interface LoadMessageInterface {
  position: number;
  children: React.ReactNode;
  typeOfMessage: "reply" | "message";
  lastMessage: number;
  setLastMessage: Function;
}

function LoadMessage({position, children, typeOfMessage, lastMessage, setLastMessage }:LoadMessageInterface) {
  const [displayMessage, setDisplayMessage] = useState<boolean>(false);
  useEffect(() => {
    setTimeout( () => setDisplayMessage(true), position * 1000);
  }, []);

  useEffect(() => {
    setLastMessage(lastMessage + 1);
  }, [displayMessage])


  if(position >= lastMessage) {
    return <></>;
  }

  if(displayMessage) {
    return <>{children}</>;
  }
  const customClassName = typeOfMessage === "message" ? "chat-message" : "chat-reply";

  return (
   <div className={`chat-bubble ${customClassName}`}>
    <motion.div animate={{ translateY: -10 }}  transition={{ duration: 0.6, repeat: Infinity }}>.</motion.div>
    <motion.div animate={{ translateY: -10 }}  transition={{ duration: 0.6, repeat: Infinity, delay: 0.1}}>.</motion.div>
    <motion.div animate={{ translateY: -10 }}  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}>.</motion.div>
  </div>);
}


function Chat({} : ChatInterface) {
  const [lastMessage, setLastMessage] = useState<number>(1);
  return (
    <div className="chat">
      <LoadMessage position={1} typeOfMessage="message" lastMessage={lastMessage} setLastMessage={setLastMessage}>
        <div className="chat-message chat-bubble">
          <div className="chat-message-content">
          Hello, tu vis ou ? 
          </div>
        </div>
      </LoadMessage>
      <LoadMessage position={2} typeOfMessage="reply" lastMessage={lastMessage} setLastMessage={setLastMessage} >
        <div className="chat-reply chat-bubble">
          <div className="chat-message-content">
          à Paris
          </div>
        </div>
      </LoadMessage>
      <LoadMessage position={3} typeOfMessage="message" lastMessage={lastMessage} setLastMessage={setLastMessage} >
      <div className="chat-message chat-bubble">
        <div className="chat-message-content">
          Eh on peut on te contacter ou ?
        </div>
      </div>
      </LoadMessage>
      <LoadMessage position={4} typeOfMessage="reply" lastMessage={lastMessage} setLastMessage={setLastMessage}>
      <div className="chat-reply chat-bubble">
        <div className="chat-message-content">
            <ul>
              <li>Par mail à <a className="underline-link" href={`mailto:${MAIL}`} description="my professional email"><strong>guillaume.gomez846@gmail.com</strong></a></li>
              <li>Ou via <a className="chat-underline-message" href={LINKEDIN} description="my linkedin account">Linkedin</a></li>
            </ul>
         </div>
      </div>
      </LoadMessage>
      <LoadMessage position={5} typeOfMessage="message" lastMessage={lastMessage} setLastMessage={setLastMessage} >
      <div className="chat-message chat-bubble">
        <div className="chat-message-content">
          Et le remote ?
        </div>
      </div>
      </LoadMessage>
      <LoadMessage position={6} typeOfMessage="reply" lastMessage={lastMessage} setLastMessage={setLastMessage}>
        <div className="chat-reply chat-bubble">
          <div className="chat-message-content">
            Pourquoi pas ?
          </div>
        </div>
       </LoadMessage>
       <LoadMessage position={7} typeOfMessage="message" lastMessage={lastMessage} setLastMessage={setLastMessage}>
      <div className="chat-message chat-bubble">
        <div className="chat-message-content">
          On peut voir où tes travaux ?
        </div>
      </div>
      </LoadMessage>
      <LoadMessage position={8} typeOfMessage="reply" lastMessage={lastMessage} setLastMessage={setLastMessage}>
      <div className="chat-reply chat-bubble">
        <div className="chat-message-content">
           Ben <a className="underline-link" href="#project">ici 😋</a> ou sur <a className="underline-link" href={GITHUB}>mon github</a>
        </div>
      </div>
      </LoadMessage>

    </div>
  );
}

export default Chat;
