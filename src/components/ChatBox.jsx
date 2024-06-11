import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from 'react-icons/fa';

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [editMessageId, setEditMessageId] = useState(null);
  const [editMessageText, setEditMessageText] = useState("");
  const chatBodyRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/message");
        setMessages(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    const newMessageObject = {
      sender: "user",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      profile: { name: "User", avatar: "user_avatar.png" }
    };

    try {
      const res = await axios.post("http://localhost:5000/api/message", newMessageObject);
      setMessages([...messages, res.data]);
      setNewMessage("");
      scrollToBottom();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/message/${id}`);
      setMessages(messages.filter(message => message._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditMessage = (message) => {
    setEditMessageId(message._id);
    setEditMessageText(message.text);
  };

  const handleUpdateMessage = async () => {
    if (editMessageText.trim() === "") return;

    try {
      const res = await axios.put(`http://localhost:5000/api/message/${editMessageId}`, { text: editMessageText });
      setMessages(messages.map(message => message._id === editMessageId ? res.data : message));
      setEditMessageId(null);
      setEditMessageText("");
    } catch (err) {
      console.error(err);
    }
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
        {messages.map((message) => (
          <div
            key={message._id}
            style={{
              marginBottom: '15px',
              padding: '10px',
              borderRadius: '10px',
              maxWidth: '80%',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              backgroundColor: message.sender === "user" ? '#c8e6c9' : '#f08a5d',
              color: '#2e7d32',
              alignSelf: message.sender === "user" ? 'flex-start' : 'flex-end',
              position: 'relative', // Position relative for positioning delete icon
            }}>
            <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              {message.sender === "admin" && (
                <img
                  src={message.profile.avatar}
                  alt={message.profile.name}
                  style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
                />
              )}
              <div style={{ position: 'relative', flexGrow: 1 }}>
                {editMessageId === message._id ? (
                  <div>
                    <input
                      type="text"
                      value={editMessageText}
                      onChange={(e) => setEditMessageText(e.target.value)}
                      style={{
                        width: 'calc(100% - 30px)',
                        padding: '5px',
                        borderRadius: '5px',
                        marginRight: '10px'
                      }}
                    />
                    <button onClick={handleUpdateMessage} style={{
                      backgroundColor: '#0d6efd',
                      color: '#fff',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}>Update</button>
                  </div>
                ) : (
                  <p style={{ marginBottom: '5px' }}>
                    {message.text}
                  </p>
                )}
                <p style={{ fontSize: '0.75em', color: 'black' }}>{message.time}</p>
              </div>
              {message.sender === 'user' && (
                <div style={{ position: 'absolute', top: '5px', right: '5px', display: 'flex', gap: '5px' }}>
                  <button
                    onClick={() => handleEditMessage(message)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '0',
                      cursor: 'pointer',
                      outline: 'none'
                    }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteMessage(message._id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '0',
                      cursor: 'pointer',
                      outline: 'none'
                    }}
                  >
                    <FaTrash />
                  </button>
                </div>
              )}
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
