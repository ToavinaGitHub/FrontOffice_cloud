import React, { useEffect, useState } from "react";
import GridContent from "./GridContent";
import { Button, Card } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

import config from "../Config";
function AnnonceFavoris() {
    const [annonces, setAnnonces] = useState([]);

    useEffect(() => {
        fetchAnnoncesFavoris();
    }, []);

    const fetchAnnoncesFavoris = () => {
        const token = localStorage.getItem("token");
        const idUser= localStorage.getItem("idUser");
        fetch(config.baseUrl+`/AnnoncesFavoris?idClient=${idUser}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setAnnonces(data);
            })
            .catch((error) => {
                window.location.href = "/Login/1";
            });
    };

    const removeFromFavorites = (idAnnonce) => {
        const token = localStorage.getItem("token");
        const idUser= localStorage.getItem("idUser");
      
        console.log(idAnnonce);
        fetch(config.baseUrl+`/Annonce?idAnnonce=${idAnnonce}&idUser=${idUser}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(() => {
            // After successful deletion, fetch the updated list of favorites
            fetchAnnoncesFavoris();
        })
        .catch((error) => {
            console.error('Error deleting annonce from favorites:', error);
        });
    };
  

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 p-8">
                {annonces.map((annonce, index) => (
                    <Card key={index} className="mt-6 w-96">
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
                                style={{ backgroundColor: 'rgb(125, 78, 87)', color: 'white' }}
                                onClick={() => removeFromFavorites(annonce.idAnnonce)}
                            >
                                <FontAwesomeIcon icon={faTrash} className="w-5 h-5 mr-2" /> Supprimer des favoris
                            </Button>
                            <Link to={`/Message/${annonce.utilisateur.idUtilisateur}`}>
                                <Button variant="outlined" size="md" className="w-full" ripple="dark">
                                     Contacter
                                </Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default AnnonceFavoris;
