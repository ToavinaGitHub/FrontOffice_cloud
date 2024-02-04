import React from "react";
import {
  Card,
  Input,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marques: [],
      modeles: [],
      categories: [],
      keyword: "",
      selectedMarque: "",
      selectedModele: "",
      selectedCategorie: "",
      minPrice: "",
      maxPrice: "",
      minDate: "",
      maxDate: "",
      minKilometrage: "",
      maxKilometrage: "",
    };
  }

  componentDidMount() {
    this.fetchMarques();
    this.fetchCategories();
    this.fetchModeles();
  }

  fetchMarques = () => {
    fetch("https://wsprojetcloud-production.up.railway.app/necessaireFront/marques")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ marques: data });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  fetchCategories = () => {
    fetch("https://wsprojetcloud-production.up.railway.app/necessaireFront/categories")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ categories: data });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  fetchModeles = () => {
    fetch("https://wsprojetcloud-production.up.railway.app/necessaireFront/modeles")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ modeles: data });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSelectChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSearchClick = () => {
    const {
      keyword,
      selectedMarque,
      selectedModele,
      selectedCategorie,
      minPrice,
      maxPrice,
      minDate,
      maxDate,
      minKilometrage,
      maxKilometrage,
    } = this.state;
  
    // Helper function to check if a value is non-empty, defined, and not null
    const isValidValue = (value) => value !== null && value !== undefined && value !== '';
  
    // Create an object with only valid values
    const searchCriteria = Object.fromEntries(
      Object.entries({
        keyword: this.state.keyword,
        marque: this.state.selectedMarque !== '' ? { idMarque: this.state.selectedMarque } : null,
        modele: this.state.selectedModele !== '' ? { idModele: this.state.selectedModele } : null,
        categorie: this.state.selectedCategorie !== '' ? { idCategorie: this.state.selectedCategorie } : null,
        prixMin: this.state.minPrice,
        prixMax: this.state.maxPrice,
        minKilometrage: this.state.minKilometrage,
        maxKilometrage: this.state.maxKilometrage,
        minDate: this.state.minDate,
        maxDate: this.state.maxDate,
      }).filter(([key, value]) => value !== null && value !== undefined && value !== '')
    );
    
    console.log("Search Criteria:", searchCriteria);
    
    
    
  
    console.log("Search Criteria:", searchCriteria);
    this.props.onSearchCriteria(searchCriteria);
  };

  

  render() {
    const { marques, modeles, categories } = this.state;

    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="p-2 flex items-center">
          <Input
            label="Mot clé"
            name="keyword"
            value={this.state.keyword}
            onChange={this.handleInputChange}
          />

            <Button
              color="indigo"
              onClick={this.handleSearchClick}
              className="ml-2 hover:bg-indigo-700 focus:ring focus:ring-indigo-200"
            >
              <MagnifyingGlassIcon className="h-5 w-5 text-white cursor-pointer" />
            </Button>

         
        </div>
        <div className="p-2">
          <Select
            label="Marque"
            name="selectedMarque"
            onChange={(value) => this.handleSelectChange("selectedMarque", value)}
          >
            {marques.map((marque) => (
              <Option key={marque.idMarque} value={marque.idMarque}>
                {marque.nomMarque}
              </Option>
            ))}
          </Select>
        </div>
        <div className="p-2">
          <Select
            label="Modele"
            name="selectedModele"
            onChange={(value) => this.handleSelectChange("selectedModele", value)}
          >
            {modeles.map((modele) => (
              <Option key={modele.idModele} value={modele.idModele}>
                {modele.nomModele}
              </Option>
            ))}
          </Select>
        </div>
        <div className="p-2">
          <Select
            label="Categorie"
            name="selectedCategorie"
            onChange={(value) => this.handleSelectChange("selectedCategorie", value)}
          >
            {categories.map((categorie) => (
              <Option key={categorie.idCategorie} value={categorie.nomCategorie}>
                {categorie.nomCategorie}
              </Option>
            ))}
          </Select>
        </div>
        <div className="p-2">
          <Input
            label="Prix Min"
            name="minPrice"
            value={this.state.minPrice}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="p-2">
          <Input
            label="Prix Max"
            name="maxPrice"
            value={this.state.maxPrice}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="p-2">
          <Input
            label="Date Min"
            name="minDate"
            value={this.state.minDate}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="p-2">
          <Input
            label="Date Max"
            name="maxDate"
            value={this.state.maxDate}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="p-2">
          <Input
            label="Kilometrage Min"
            name="minKilometrage"
            value={this.state.minKilometrage}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="p-2">
          <Input
            label="Kilometrage Max"
            name="maxKilometrage"
            value={this.state.maxKilometrage}
            onChange={this.handleInputChange}
          />
        </div>
      </Card>
    );
  }
}

export default SideBar;
