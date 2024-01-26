import React from "react";
import avatarImage from "../assets/image/avatar.jpg";
import { useNavigate } from "react-router-dom";
import { withRouter } from "react-router-dom";

class BoiteDiscussion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  handleRedirect = () => {
    const navigate = useNavigate();
    navigate("/Message");
  };

  render() {
    const customWidth = "800px";
    return (
      <div style={{ width: customWidth }} className=" mx-auto mt-4 p-4 bg-white rounded shadow-lg">
        <div className="font-bold text-lg mb-2">Discussions</div>
        <div>
          <div className="flex items-center justify-between border-b py-2 cursor-pointer"
              onClick={this.handleRedirect}
          >
            <div className="flex items-center">
              <img src={avatarImage} alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <div className="font-bold" >Rakotonanahary Haja</div>
                <div className="text-gray-500">Bonjour</div>
              </div>
            </div>
            <div className="text-gray-400">09:12</div>
          </div>
        </div>
        <div>
        <div className="flex items-center justify-between border-b py-2 cursor-pointer"
              onClick={this.handleRedirect}
          >
            <div className="flex items-center">
              <img src={avatarImage} alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <div className="font-bold">Rakotonanahary Haja</div>
                <div className="text-gray-500">Bonjour</div>
              </div>
            </div>
            <div className="text-gray-400">09:12</div>
          </div>
        </div>
        <div>
        <div className="flex items-center justify-between border-b py-2 cursor-pointer"
              onClick={this.handleRedirect}
          >
            <div className="flex items-center">
              <img src={avatarImage} alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <div className="font-bold">Rakotonanahary Haja</div>
                <div className="text-gray-500">Bonjour</div>
              </div>
            </div>
            <div className="text-gray-400">09:12</div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default BoiteDiscussion;
