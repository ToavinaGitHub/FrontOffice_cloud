import React from "react";
import GridContent from "./GridContent";
import tiguanImage from "../assets/image/tiguan.jpg";
import {
    Button,
    Card,
    IconButton,
    Typography,
  } from "@material-tailwind/react";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faEnvelope, faStar,faEye, faAngleRight } from '@fortawesome/free-solid-svg-icons';

class Accueil extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
        };
    }
    render(){
        return (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    <Card>
                        <GridContent
                            voiture="Tiguan"
                            prix="65 000 000 MGA"
                            specs={["2.0 TDI", "SUV", "Diesel", "Boîte de vitesse manuelle"]}
                            images={tiguanImage}
                            vendeur="Rakotonanahary Haja"
                            date="16-01-2024"
                        />
                        <div className="flex flex-col gap-4 mt-4">
                            <Button
                                ripple={false}
                                style={{ backgroundColor: 'rgb(125, 78, 87)', color: 'white' }}
                            >
                                <FontAwesomeIcon icon={faStar} className="w-5 h-5 mr-2" /> Ajouter aux Favoris
                            </Button>
                            <Button
                                ripple={false}
                                style={{ backgroundColor: 'rgb(54, 65, 86)', color: 'white' }}
                            >
                                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-2" /> Contacter
                            </Button>
                        </div>
                    </Card>
                    <Card>
                        <GridContent
                            voiture="Tiguan"
                            prix="65 000 000 MGA"
                            specs={["2.0 TDI", "SUV", "Diesel", "Boîte de vitesse manuelle"]}
                            images={tiguanImage}
                            vendeur="Rakotonanahary Haja"
                            date="16-01-2024"
                        />
                        <div className="flex flex-col gap-4 mt-4">
                            <Button
                                ripple={false}
                                style={{ backgroundColor: 'rgb(125, 78, 87)', color: 'white' }}
                            >
                                <FontAwesomeIcon icon={faStar} className="w-5 h-5 mr-2" /> Ajouter aux Favoris
                            </Button>
                            <Button
                                ripple={false}
                                style={{ backgroundColor: 'rgb(54, 65, 86)', color: 'white' }}
                            >
                                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-2" /> Contacter
                            </Button>
                        </div>
                    </Card>
                    <Card>
                        <GridContent
                            voiture="Tiguan"
                            prix="65 000 000 MGA"
                            specs={["2.0 TDI", "SUV", "Diesel", "Boîte de vitesse manuelle"]}
                            images={tiguanImage}
                            vendeur="Rakotonanahary Haja"
                            date="16-01-2024"
                        />
                        <div className="flex flex-col gap-4 mt-4">
                            <Button
                                ripple={false}
                                style={{ backgroundColor: 'rgb(125, 78, 87)', color: 'white' }}
                            >
                                <FontAwesomeIcon icon={faStar} className="w-5 h-5 mr-2" /> Ajouter aux Favoris
                            </Button>
                            <Button
                                ripple={false}
                                style={{ backgroundColor: 'rgb(54, 65, 86)', color: 'white' }}
                            >
                                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-2" /> Contacter
                            </Button>
                        </div>
                    </Card>
                </div>
                
            </>
        );
    }
};

export default Accueil;