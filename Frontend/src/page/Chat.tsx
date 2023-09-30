import React, { useState, useEffect } from "react";
import "./Chat.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    setNewMessage("");
  };

  return (
    <>
      <div className="fond">
        <div className="nav">
          <h1 className="H11">CHAT</h1>
        </div>

        <div className="depart-arriver">
          <div className="chat-box">
            {messages.map((message, index) => (
              <div key={index} className="message">
                {message}
              </div>
            ))}
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="form">
            <input
              className="form-control"
              type="text"
              placeholder="Entrez votre message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <br />
            <br />
            <button className="btn btn-info btn-block" onClick={sendMessage}>
              Envoyer
            </button>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default Chat;
