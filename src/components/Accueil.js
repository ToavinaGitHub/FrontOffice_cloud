import React from "react";
import GridContent from "./GridContent";
import {
  Button,
  Card,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import SideBar from "./SideBar";

import config from "../Config";

class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      annonces: [],
      token: localStorage.getItem("token"),
      idUser: localStorage.getItem("idUser"),
    };
  }

  componentDidMount() {
    this.fetchAnnoncesData();
  }

  fetchAnnoncesData = () => {
    fetch(config.baseUrl+"/AnnoncesDispo")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ annonces: data });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  addToFav = async (idAnnonce, idUser) => {
    try {
      let url = config.baseUrl+`/annonceFavoris/save?idUser=${idUser}&idAnnonce=${idAnnonce}`;
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.state.token}`,
        },
      });
  
      if (!response.ok) {
        // Si la réponse n'est pas ok, générer une erreur manuellement
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
  
    } catch (error) {
      console.error('Erreur lors de la requête fetch:', error);
      window.location.href = "/Login/0";
    }
  };
  

  render() {
    const { annonces} = this.state;

    return (
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 ">
        <SideBar />
        {annonces.map((annonce, index) => (
          <Card key={index}  className="mt-6 w-96">
            <GridContent
              idAnnonce={annonce.idAnnonce}
              voiture={annonce.modele.nomModele}
              prix={annonce.prixDemande}
              descri={annonce.description}
              specs={[
                annonce.moteurModele.moteur.nomMoteur,
                annonce.modele.categorie.nomCategorie,
                annonce.transmission.nomTransmission,
              ]}
              image={annonce.saryAnnonces[0].sary}
              vendeur={`${annonce.utilisateur.nomUtilisateur} ${annonce.utilisateur.prenomUtilisateur}`}
              date={new Date(annonce.dateAnnonce).toLocaleDateString()}
            />
            <div className="flex flex-col gap-4 mt-4">
                  <Button
                    ripple={false}
                    style={{ backgroundColor: "rgb(125, 78, 87)", color: "white" }}
                    onClick={() => this.addToFav(annonce.idAnnonce,this.state.idUser)}
                  >
                     <FontAwesomeIcon icon={faHeart} className="w-5 h-5 mr-2" /> Ajouter aux Favoris
                  </Button>

                <Link to={`/Message/${annonce.utilisateur.idUtilisateur}`}>
                  <Button
                    ripple={false}
                    style={{ backgroundColor: "rgb(54, 65, 86)", color: "white" }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-2" /> Contacter
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    );
  }
}

export default Accueil;
