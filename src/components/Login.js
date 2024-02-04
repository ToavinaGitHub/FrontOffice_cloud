import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import loginImage from "../assets/image/Bonokany3.png";
import { useParams } from 'react-router-dom';

import config from "../Config";

function Login() {
  const [formData, setFormData] = useState({
    email: "koloina@gmail.com",
    password: "koloina",
  });

  const { id } = useParams();
  
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = formData;

    let url = config.baseUrl+'/api/v1/auth/authenticateClient';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (data) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("idUser",data.id);
        console.log(id);
        if(id==="0"){
          window.location.href = "/";
        } else if(id==="1"){
          window.location.href = `/AnnonceFavoris`;
        } else if(id==="2"){
          window.location.href = `/`;
        }
      }
    } catch (error) {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div
        className="flex-shrink-0 w-full md:w-1/2 h-64 md:h-full bg-cover border-solid border"
        style={{
          backgroundImage: `url(${loginImage})`,
        }}
      ></div>
      <div
        className="flex-shrink-0 w-full md:w-1/2 p-8 flex flex-col items-center justify-center border-solid border border-2"
        style={{ borderColor: 'rgb(247, 247, 247)' }}
      >
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray" className="text-center">
            Login
          </Typography>
          <form className="mt-8 mb-2 w-full max-w-screen-lg md:w-96" onSubmit={handleSubmit}>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Votre Email
              </Typography>
              <Input
                size="lg"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Votre mot de passe
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <Button className="mt-6" fullWidth type="submit">
              Se Connecter
            </Button>
          </form>
          <span id="error">{error}</span>
        </Card>
      </div>
    </div>
  );
}

export default Login;
