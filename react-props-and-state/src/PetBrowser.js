import React from 'react';
import Pet from './Pet';


class PetBrowser extends React.Component {
  render() {
    console.log(this.props)

    const pets = this.props.pets.map((pet, index) => (
      <Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
    ));

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}
export default PetBrowser;