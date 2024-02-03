import React from "react";
import { Card, Typography, Button } from "@material-tailwind/react";
import tiguanImage from "../assets/image/tiguan.jpg";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0,
    };
  }

   handleScrollRight = () => {
    const imageWidth = 800; 
    const newPosition = this.state.scrollPosition + imageWidth;

    if (newPosition < this.images.length * imageWidth) {
      this.setState({ scrollPosition: newPosition });
    }
  };

   handleScrollLeft = () => {
    const imageWidth = 800; 
    const newPosition = this.state.scrollPosition - imageWidth;
     if (newPosition < this.images.length * imageWidth) {
      this.setState({ scrollPosition: newPosition });
    }
  };

  images = [
    tiguanImage,
    tiguanImage,
    tiguanImage,
  ];

  render() {
    return (
      <div className="container mx-auto p-8">
        <div className="max-w-8xl mx-auto">
          <Card>
            <div className="p-4 flex items-start">
              <div className="w-2/3 pr-8 relative">
                   <div style={{ overflowX: 'hidden', whiteSpace: 'nowrap' }}>
                    <div
                    style={{
                      display: 'flex',
                      transition: 'transform 0.3s ease-in-out',
                      transform: `translateX(${-this.state.scrollPosition}px)`,
                    }}
                    >
                     {this.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Image ${index}`}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    ))}
                    </div>
                </div>
                <button
                      onClick={this.handleScrollRight}
                      className="absolute top-1/2 right-[40px] transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded"
                    >
                        &rarr;
                    </button>

                  <button
                      onClick={this.handleScrollLeft}
                      className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded"
                    >
                        &larr;
                    </button>
              </div>
              <div className="w-1/3">
                <div className="mb-4">
                  <Typography variant="h3">Tiguan</Typography>
                  <Typography variant="h6">VolksWagen</Typography>
                  <Typography variant="h4" color="gray">
                    65 000 000 MGA
                  </Typography>
                </div>
                <p className="text-sm text-blue-gray-500 mb-4">
                  <span className="block mb-2">2.0 TDI</span>
                  <span className="block mb-2">Moteur: moteur</span>
                  <span className="block mb-2">Catégorie: SUV</span>
                  <span className="block mb-2">Carburant: Diesel</span>
                  <span className="block mb-2">Transmission: Boîte de vitesse manuelle</span>
                </p>
                <div className="flex items-center justify-between text-blue-gray-500 mb-4">
                  <Typography variant="h7" className="text-sm">
                    Vendu par: Rakotonanahary Haja
                  </Typography>
                  <Typography variant="h7" color="gray" className="text-sm">
                    16-01-2024
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
}

export default Details;
