import React, { useEffect, useState } from "react";
import avatarImage from "../assets/image/avatar.jpg";
import { useNavigate } from "react-router-dom";

const customWidth = "800px";

function Discussions() {
  const idUser= localStorage.getItem("idUser");
  const [discu, setDiscussions] = useState([]);
  const [discussionEntre, setDiscussionEntre] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      fetchDiscussionData();
  }, []);

  const fetchDiscussionData = () => {
      const token = localStorage.getItem("token");
      const idUser= localStorage.getItem("idUser");
      fetch(`https://wsprojetcloud-production.up.railway.app/message/boiteDiscu?user=${idUser}`, {
          headers: {
              'Authorization': `Bearer ${token}`,
          },
      })
          .then((response) => response.json())
          .then((data) => {
              setDiscussions(data);

              data.forEach(discussion => {
                fetchDiscussionEntre(idUser , discussion.idUtilisateur);
              });
          })
          .catch((error) => {
              window.location.href = "/Login/1";
          });
  };

  const fetchDiscussionEntre = (idUser1 , idUser2 ) => {
    fetch(`https://wsprojetcloud-production.up.railway.app/message/messageBetween?user1=${idUser1}&user2=${idUser2}`)
      .then((response) => response.json())
      .then((data) => {
        const lastMessage = data[data.length - 1];
        setDiscussionEntre((prevData) => [
          ...prevData,
          {idUser1, idUser2, lastMessage: lastMessage.message , lastMessageSender: lastMessage.idSender , lastMessageDate: lastMessage.dateMessage }
        ]);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }

  const handleRedirect = () => {
    navigate("/Message");
  };

  return (
    <div style={{ width: customWidth }} className=" mx-auto mt-4 p-4 bg-white rounded shadow-lg">
      <div className="font-bold text-lg mb-2">Discussions</div>
      {discu.map((discussion , index) => (
        <div key={index}>
          <div>
            <div className="flex items-center justify-between border-b py-2 cursor-pointer"
                onClick={handleRedirect}
            >
              <div className="flex items-center">
                <img src={avatarImage} alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="font-bold" >{discussion.nomUtilisateur} {discussion.prenomUtilisateur}</div>
                  <div className="text-gray-500">
                    {discussionEntre[index] && discussionEntre[index].lastMessageSender === idUser ? (
                      <span>{discussionEntre[index].lastMessage}</span>
                    ) : (
                      <span><strong>{discussionEntre[index] && discussionEntre[index].lastMessage}</strong></span>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-gray-400">{discussionEntre[index] && discussionEntre[index].lastMessageDate}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Discussions;
