import React from "react";
import {
    Typography,
    Button,
  } from "@material-tailwind/react";
import { faEye, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";



function GridContent({ idAnnonce, voiture,descri, prix, specs, image, vendeur, date }){
  
    const imageStyle = {
        width: '100%',
        height: '300px', // Adjust the height as needed
        objectFit: 'cover',
        borderRadius: '8px', // Rounded corners for aesthetics
      };
    return(
                <>
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-4">
                            <Typography variant="h3">{voiture}</Typography>
                            <Typography variant="h5" color="gray">
                                {prix.toLocaleString("fr-FR")} MGA
                            </Typography>
                        </div>
                        <p className="flex items-center space-x-2 text-xl mb-5 text-blue-gray-500">
                            {descri}
                        </p>
                        <p className="flex items-center space-x-2 text-sm text-blue-gray-500">
                            {specs.map((spec, index) => (
                                <React.Fragment key={index}>
                                <span className="mr-3">{spec}</span>
                                {index < specs.length - 1 && (
                                    <span className="flex items-center justify-center w-2 h-2 bg-blue-gray-500 rounded-full"></span>
                                )}
                                </React.Fragment>
                            ))}
                        </p>
                        <img
                            src={image}
                            className="w-full h-auto mt-4 mb-4 custom-image"
                            style={imageStyle}
                            alt="Voiture"
                        ></img>
                         <div className="flex items-center justify-between mb-4 text-blue-gray-500">
                            <Typography variant="h7" className="text-s">{vendeur}</Typography>
                            <Typography variant="h7" color="gray" className="text-s">
                                {date}
                            </Typography>
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-4 mt-4">
                    <Link to={`/Details/${idAnnonce}`}>
                        <Button
                        style={{ backgroundColor: 'rgb(33, 45, 64)', color: 'white' }} 
                        size="sm" 
                        ripple="dark" 
                        className="text-center"
                        >   
                            <FontAwesomeIcon icon={faEye} className="w-4 h-4 mx-auto" />
                            
                        </Button>
                    </Link>
                    <div className="flex items-center space-x-2">
                                <Typography
                                variant="caption" 
                                className="text-gray-600"
                                >
                                    Voir détail
                                </Typography>
                                <FontAwesomeIcon icon={faAngleRight} className="text-gray-600" />
                    </div>
                </div>
            </>
    );
};

export default GridContent;