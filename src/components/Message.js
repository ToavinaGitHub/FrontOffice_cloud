import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: "",
    };
  }
  
  fetchDiscussionEntre = () => {
    const idUser= localStorage.getItem("idUser");
    const idUser2 = localStorage.getItem('idUser2');
    fetch(`https://wsprojetcloud-production.up.railway.app/message/messageBetween?user1=${idUser}&user2=${idUser2}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ annonces: data });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  handleSendMessage = () => {
    const { messages, newMessage } = this.state;

    if (newMessage.trim() !== "") {
      this.setState({
        messages: [...messages, { sender: "John", content: newMessage }],
        newMessage: "",
      });
    }
  };

  sendMessage = async (idSender, idReceive) => {

  }

  render() {
    const { messages, newMessage } = this.state;

    return (
      <div className="flex items-center justify-center h-screen" style={{ marginTop: "-8px" }}>
        <div className="max-w-md w-full p-4 bg-gray-100 rounded shadow-lg">
          <div className="font-bold text-xl mb-4">Rakotonanahary Haja</div>
          <div className="mb-4 h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 flex ${
                  message.sender === "John" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`${
                    message.sender === "John"
                      ? "bg-blue-500 text-white rounded-tl rounded-br"
                      : "bg-gray-300 text-black rounded-tr rounded-bl"
                  } p-2 max-w-md`}
                >
                  <strong>{message.sender}:</strong> {message.content}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => this.setState({ newMessage: e.target.value })}
              className="flex-1 p-2 border rounded"
              placeholder="Type your message..."
            />
            <button
              onClick={this.handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Envoyer
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
