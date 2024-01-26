import React from "react";
import GridContent from "./GridContent";
import tiguanImage from "../assets/image/tiguan.jpg";
import {
    Card,
    Typography
  } from "@material-tailwind/react";

class HistoriqueAnnonce extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
        };
    }

    render(){
        return (
            <>
                <div className="mt-10">
                    <Typography variant="h4" color="blue-gray" className="text-center">
                        Historique de mes annonces
                    </Typography>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                    <Card>
                        <GridContent
                            voiture="Tiguan"
                            prix="65 000 000 MGA"
                            specs={["2.0 TDI", "SUV", "Diesel", "Boîte de vitesse manuelle"]}
                            images={tiguanImage}
                            vendeur="Rakotonanahary Haja"
                            date="16-01-2024"
                        />
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
                    </Card>
                </div>
            </>
        );
    }
};

export default HistoriqueAnnonce;