import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import config from "../Config";

function Message() {
  const [id] = useState(localStorage.getItem("idUser"));
  const [token] = useState(localStorage.getItem("token"));
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState({});
  const { idUser } = useParams();


  if(!token){
    window.location.href = "/Login/2";
  }

  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      try {
        const response = await fetch(config.baseUrl + "/message/sendMessage", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            idSender: id,
            idReceiver: idUser,
            message: newMessage,
            etat: 0
          }),
        });

        const successMessage = await response.text();

        if (response.ok) {
          setMessages([...messages, { message: newMessage, dateMessage: new Date().toISOString(), idSender: id }]);
          setNewMessage("");
        } else {
          console.error("Error sending message:", successMessage);
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  

  useEffect(() => {
    const fetchMessages = async () => {
      const apiUrl = config.baseUrl + "/message/messageBetween?user1=" + id + "&user2=" + idUser;
      try {
        const response = await fetch(apiUrl, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
  
    const fetchUserDetails = async () => {
      let userUrl = config.baseUrl + '/api/v1/demo/utilisateur?id=' + idUser;
      try {
        const response = await fetch(userUrl, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
    fetchMessages();

  }, [id, idUser, token]);

  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{ marginTop: "-8px" }}>
      <div className="max-w-md w-full p-4 bg-gray-100 rounded shadow-lg" style={{ height: "400px", overflowY: "auto", display: "flex", flexDirection: "column" }}>
        {/* Fixed elements container */}
        <div className="font-bold text-xl mb-4 sticky top-0 bg-white">{user.prenomUtilisateur} {user.nomUtilisateur}</div>
        
        {/* Messages container */}
        <div className="flex-1 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 p-2 flex ${
                message.idSender.toString() === id ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`${
                  message.idSender.toString() === id
                    ? "bg-blue-500 text-white rounded-tl rounded-br"
                    : "bg-gray-300 text-black rounded-tr rounded-bl"
                } p-2 max-w-md`}
              >
                {message.message} - {new Date(message.dateMessage).toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        {/* Input and button container */}
        <div className="flex items-center space-x-2 p-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-2 border rounded"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;
