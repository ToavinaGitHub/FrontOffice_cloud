import React, { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/"; 
  };

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"  style={{ backgroundColor: 'rgb(54, 65, 86)'}}>
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium text-white"
        >
          LOGO
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">
            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="mr-4 cursor-pointer py-1.5 font-medium text-white"
                onClick={() => handleRedirect("/")}
              >
                  Accueil
              </Typography>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="mr-4 cursor-pointer py-1.5 font-medium text-white"
                onClick={() => handleRedirect("/Discussions")}
              >
                  Discussions
              </Typography>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="mr-4 cursor-pointer py-1.5 font-medium text-white"
                onClick={() => handleRedirect("/Message")}
              >
                  Message
              </Typography>

              <Link to={`/AnnonceFavoris`}>
                  <Typography
                      as="li"
                      variant="small"
                      color="blue-gray"
                      className="mr-4 cursor-pointer py-1.5 font-medium text-white"
                    >
                        Favoris
                    </Typography>
              </Link>       

               <Link to={`/HistoriqueAnnonce`}>
                  <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="mr-4 cursor-pointer py-1.5 font-medium text-white"
                  >
                      Historique
                  </Typography>
              </Link>
                
            </ul>
          </div>
          <div className="flex items-center gap-x-1">
              {token ? (
                <Typography
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block text-white"
                  onClick={() => handleLogout()} 
                >
                  <FontAwesomeIcon icon={faUser} className="text-lg" />
                  <span>Se déconnecter</span>
                </Typography>
              ) : (
                <Typography
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block text-white flex items-center gap-x-1"
                  onClick={() => handleRedirect("/Login/0")}
                >
                  <FontAwesomeIcon icon={faUser} className="text-lg" />
                  <span>Se connecter</span>
                </Typography>
              )}
        </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
