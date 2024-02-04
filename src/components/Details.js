import React, { useState, useEffect } from "react";
import { Card, Typography, Button } from "@material-tailwind/react";

import { useParams } from 'react-router-dom';


import config from "../Config";

function Details() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [annonce, setAnnonce] = useState([]);
  const { idAnnonce } = useParams();

  const handleScrollRight = () => {
    const imageWidth = 800; 
    const newPosition = scrollPosition + imageWidth;

    if (newPosition < annonce.saryAnnonces.length * imageWidth) {
      setScrollPosition(newPosition);
    }
  };

  const handleScrollLeft = () => {
    const imageWidth = 800; 
    const newPosition = scrollPosition - imageWidth;

  if (newPosition >= 0) {
    setScrollPosition(newPosition);
  }
  };

  useEffect(() => {
    fetch(config.baseUrl+`/Annonce?idAnnonce=${idAnnonce}`)
      .then((response) => response.json())
      .then((data) => {
        setAnnonce(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [idAnnonce]);

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-8xl mx-auto">
        <Card>
          <div className="p-4 flex items-start">
            <div className="w-3/5 pr-8 relative">
              <div style={{ overflowX: 'hidden', whiteSpace: 'nowrap' }}>
                <div
                  style={{
                    display: 'flex',
                    transition: 'transform 0.3s ease-in-out',
                    transform: `translateX(${-scrollPosition}px)`,
                  }}
                >
                  {annonce.saryAnnonces?.map((image, index) => (
                    <img
                      key={index}
                      src={`data:image/jpeg;base64, ${image.sary}`}
                      alt="Voiture"
                      style={{ width: '100%', height: 'auto' }}
                    ></img>
                  ))}
                </div>
              </div>
              <button
                onClick={handleScrollRight}
                className="absolute top-1/2 right-[25px] transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded"
              >
                &rarr;
              </button>

              <button
                onClick={handleScrollLeft}
                className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded"
              >
                &larr;
              </button>
            </div>
            <div className="w-2/5">
              <div className="mb-4">
                <Typography variant="h3">{annonce.modele?.nomModele}</Typography>
                <Typography variant="h6">{annonce.modele?.marque?.nomMarque}</Typography>
                <Typography variant="h4" color="gray">
                  {annonce.prixDemande?.toLocaleString("fr-FR")} MGA
                </Typography>
              </div>
              <p className="text-m text-blue-gray-500 mb-4">
                  {[
                    { label: "Moteur", value: annonce.moteurModele?.moteur?.nomMoteur },
                    { label: "Catégorie", value: annonce.modele?.categorie?.nomCategorie },
                    { label: "Carburant", value: annonce.carburant?.nomCarburant },
                    { label: "Transmission", value: annonce.transmission?.nomTransmission },
                    { label: "Kilométrage", value: `${annonce.kilometrage} km` },
                    { label: "Nombre de porte", value: annonce.nbPorte },
                    { label: "Année de sortie", value: annonce.anneeModele?.annee },
                  ].map((pair, index) => (
                    <React.Fragment key={index}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <span style={{ fontWeight: "bold" }}>{`${pair.label}`}</span>
                        <span style={{ marginLeft: "10px" }}>{`${pair.value}`}</span>
                      </div>
                      {index < 6 && <hr style={{ marginTop: "10px" }} />}
                    </React.Fragment>
                  ))}
             </p>
              <div className="flex items-center justify-between text-blue-gray-500 mb-4">
              <Typography variant="h7" className="text-m">
                    Vendu par: {annonce.utilisateur?.nomUtilisateur} {annonce.utilisateur?.prenomUtilisateur}
                  </Typography>
                  <Typography variant="h7" color="gray" className="text-m">
                      {new Date(annonce.dateAnnonce).toLocaleDateString()}
                  </Typography>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Button color="blue" size="md" ripple="dark">
                  Acheter Maintenant
                </Button>
                <Button variant="outlined" size="md" ripple="dark">
                  Contacter
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Details;
