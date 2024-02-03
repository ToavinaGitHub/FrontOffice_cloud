import React from "react";
import {
  Card,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="p-2">
            <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Mot clé" />
        </div>
        <div className="p-2">
            <Select label="Marque" name="marque">
                <Option>VolksWagen</Option>
                <Option>Toyota</Option>
                <Option>Renault</Option>
            </Select>
        </div>
        <div className="p-2">
            <Select label="Modele" name="modele">
                <Option>Modele1</Option>
                <Option>Modele2</Option>
                <Option>Modele3</Option>
            </Select>
        </div>
        <div className="p-2">
            <Select label="Categorie" name="categorie">
                <Option>Categorie1</Option>
                <Option>Categorie2</Option>
                <Option>Categorie3</Option>
            </Select>
        </div>
        <div className="p-2">
            <Input label="Prix Min" />
            <Input label="Prix Max" />
        </div>
        <div className="p-2">
            <Input label="Date Min" />
            <Input label="Date Max" />
        </div>
      </Card>
      
    );
  }
};

export default SideBar;
