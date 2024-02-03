import React, { Component } from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import loginImage from "../assets/image/login.png";
  
  class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
        };
    }
  render() {
    return (
      <div className="flex h-screen"  style={{ paddingTop: "50px", width: "80%", margin: "auto", height: "500px"}}>
        {/* Left side with background image */}
        <div
          className="flex-shrink-0 w-1/2 h-full bg-cover border-solid border"
          style={{
            backgroundImage: `url(${loginImage})`
          }}
        ></div>
  
        {/* Right side with login form */}
        <div 
            className="flex-shrink-0 w-1/2 p-8 flex flex-col items-center justify-center mt[20%] border-solid border border-2" 
            style={{ height: "450px ",borderColor: 'rgb(247, 247, 247)'}} 
        >
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray" className="text-center">
              Login
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Votre Email
                </Typography>
                <Input
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Votre mot de passe
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <Button className="mt-6" fullWidth>
                Se Connecter
              </Button>
            </form>
          </Card>
        </div>
      </div>
    );
  }
}; 
  export default Login;
  