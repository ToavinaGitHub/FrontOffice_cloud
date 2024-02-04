import React, { useEffect, useState } from "react";
import GridContent from "./GridContent";

import {
  Card,
  Typography
} from "@material-tailwind/react";

import config from "../Config";

function HistoriqueAnnonce() {
    const [annonces, setAnnonces] = useState([]);
    useEffect(() => {
        fetchAnnoncesHistorique();
    }, []);

    const fetchAnnoncesHistorique = () => {
        const token = localStorage.getItem("token");
        const idUser= localStorage.getItem("idUser");
        fetch(config.baseUrl+`/AnnoncesHistorique?idClient=${idUser}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setAnnonces(data);
            })
            .catch((error) => {
                window.location.href = "/Login/2";
            });
    };
  return (
    <>
      <div className="mt-10">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Historique de mes annonces
        </Typography>
      </div>
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
                    </Card>
                ))}
            </div>
    </>
  );
}

export default HistoriqueAnnonce;
