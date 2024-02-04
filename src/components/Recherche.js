import SideBar from './SideBar';
import React from "react";
class Recherche extends React.Component {
  // ... Existing code

  // Function to update search criteria in the parent component
  updateSearchCriteria = (newCriteria) => {
    // Do something with the new search criteria, e.g., update state or trigger other actions
    console.log("Received new search criteria in MainComponent:", newCriteria);
  };

  render() {
    return (
        <div style={{ display: 'flex' }}>
          <SideBar updateSearchCriteria={this.updateSearchCriteria} />
          <div style={{ flex: 1 }}>

          </div>
        </div>
    );
  }
}

export default Recherche;
