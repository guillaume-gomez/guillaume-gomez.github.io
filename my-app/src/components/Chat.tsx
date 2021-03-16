import React from 'react';
import { motion } from "framer-motion";
import "./Chat.css";

interface ChatInterface {
}
const variants = {
  active: (custom:number) => ({
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100, delay: custom * 0.2 }
    }
  }),
};

function Chat({} : ChatInterface) {
  return (
    <div className="chat">
      <motion.div variants={variants} custom={3} className="chat-message chat-bubble">
        <div className="chat-message-content">
        Hello comment ca va ?
        </div>
      </motion.div>
      <div className="chat-reply chat-bubble">
        <div className="chat-message-content">
        Ca va tres bien et toi
        </div>
      </div>

      <div className="chat-message chat-bubble">
        <div className="chat-message-content">
          <p>Hello comment ca va FJ</p>
           <p>jmfksk mfksmlfkmfl ksml skmls mskfsl</p>
        </div>
      </div>
      <div className="chat-reply chat-bubble">
        <div className="chat-message-content">
          <ul>
            <li>Ca va tres bien et toim mlkqdml</li>
            <li>oksofkslv k,lgklmskgmlmklkw lmklmkxlmkb lklmwk lwmkflwkfmlkfml k</li>
          </ul>
         </div>
      </div>

      <div className="chat-message chat-bubble">
        <div className="chat-message-content">
        Hello comment ca va ? kklk
        </div>
      </div>
      <div className="chat-reply chat-bubble">
        <div className="chat-message-content">
        Ca va tres bien et toil lkmklm
        </div>
      </div>

      <div className="chat-message chat-bubble">
        <div className="chat-message-content">
        Hello comment ca va ?klkl l
        </div>
      </div>
      <div className="chat-reply chat-bubble">
        <div className="chat-message-content">
        Ca va tres bien et toikl kl k
        </div>
      </div>

      <div className="chat-dots chat-bubble">
        <motion.div animate={{ translateY: -10 }}  transition={{ duration: 0.6, repeat: Infinity }}>.</motion.div>
        <motion.div animate={{ translateY: -10 }}  transition={{ duration: 0.6, repeat: Infinity, delay: 0.1}}>.</motion.div>
        <motion.div animate={{ translateY: -10 }}  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}>.</motion.div>
      </div>

    </div>
  );
}

export default Chat;
