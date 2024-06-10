import React, { useState, useEffect, useRef } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { sender: "user", text: "Hi", time: "23:58", profile: { name: "User", avatar: "user_avatar.png" } },
    // Add more messages here...
  ]);

  const [newMessage, setNewMessage] = useState("");
  const chatBodyRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMessageObject = {
      sender: "user",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      profile: { name: "User", avatar: "user_avatar.png" } // Set appropriate user profile here
    };

    setMessages([...messages, newMessageObject]);
    setNewMessage("");
    scrollToBottom();
  };

  const scrollToBottom = () => {
    chatBodyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '600px',
      margin: '20px auto',
      borderRadius: '15px',
      border: '1px solid #ddd',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 'calc(100vh - 40px)', // Subtract height of header
      maxHeight: '80vh'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px',
        borderBottom: '1px solid #ddd',
        backgroundColor: '#15803d'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <img src="user_avatar.png" alt="User Avatar" style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            marginRight: '10px'
          }} />
          <span>User Name</span>
        </div>
        <button onClick={handleLogout} style={{
          backgroundColor: '#0d6efd',
          color: '#fff',
          border: 'none',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>Logout</button>
      </div>
      <div style={{
        flexGrow: 1,
        overflowY: 'auto',
        padding: '15px'
      }}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              marginBottom: '15px',
              padding: '10px',
              borderRadius: '10px',
              maxWidth: '80%',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              backgroundColor: message.sender === "user" ? '#c8e6c9' : '#f08a5d',
              color: '#2e7d32',
              alignSelf: message.sender === "user" ? 'flex-start' : 'flex-end'
            }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {message.sender === "admin" && (
                <img
                  src={message.profile.avatar}
                  alt={message.profile.name}
                  style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
                />
              )}
              <div>
                <p style={{ marginBottom: '5px' }}>
                  {message.text}
                </p>
                <p style={{ fontSize: '0.75em', color: 'black' }}>{message.time}</p>
              </div>
            </div>
          </div>
        ))}
        <div ref={chatBodyRef} />
      </div>
      <div style={{
        display: 'flex',
        padding: '15px',
        borderTop: '1px solid #ddd',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px'
      }}>
        <input
          type="text"
          style={{
            flexGrow: 1,
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '5px',
            marginRight: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
          placeholder="Type message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button onClick={handleSendMessage} style={{
          backgroundColor: '#0d6efd',
          color: '#fff',
          border: 'none',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>Send</button>
      </div>
    </div>
  );
}
