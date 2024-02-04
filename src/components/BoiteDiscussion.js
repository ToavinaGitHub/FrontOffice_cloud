import React from "react";
import avatarImage from "../assets/image/avatar.jpg";



import configUrl from "../Config";


import { Link } from "react-router-dom";
class BoiteDiscussion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        discussions:[],
        baseUrl : configUrl.baseUrl,
        token:localStorage.getItem("token"),
        id:localStorage.getItem("idUser"),
    };
  };

  
  
  componentDidMount() {
    this.fetchDiscussionsData(); 
  }

  fetchDiscussionsData = () => { 


    if(!this.state.token){
      window.location.href = "/Login/2";
    }
    try{
      console.log(this.state.id);

      let url = this.state.baseUrl+"/message/boiteDiscu?user="+this.state.id;
      console.log(url);
      fetch(url,{
        headers: {
          'Authorization': `Bearer ${this.state.token}`,
        },
      }) 
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({ discussions: data });
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
    catch(error){
      window.location.href = "/Login/2";
    }
   
  };





  render() {
    const customWidth = "800px";
    return (
      <div style={{ width: customWidth }} className=" mx-auto mt-4 p-4 bg-white rounded shadow-lg">
        <div className="font-bold text-lg mb-2">Discussions</div>

        {this.state.discussions.map((discussion, index) => ( 

        <Link to={`/Message/${discussion.idUtilisateur}`}>
          <div key={index}>
            <div className="flex items-center justify-between border-b py-2 cursor-pointer"
                onClick={this.handleRedirect}
            >
              <div className="flex items-center">
                <img src={avatarImage} alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="font-bold" >{discussion.prenomUtilisateur} {discussion.nomUtilisateur}</div>
                  <div className="text-gray-500">...</div>
                </div>
              </div>
              <div className="text-gray-400">09:12</div>
            </div>

          </div>
        </Link>
      ))}
      </div>
      
    );
  }
}

export default BoiteDiscussion;
