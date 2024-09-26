import React from "react";
import axios from "axios";
import "../styles/charactersAPI.css";
import DisplayCharacter from "./DisplayCharacter";

class CharactersAPI extends React.Component {
  state = {
    characters: [],
    isLoaded: false, //création et initialisation d'une nouvelle state
  };

  getCharacters = async () => {
    // async and await utilization
    const result = await axios.get(
      "https://miadil.github.io/starwars-api/api/all.json"
    );
    this.setState({ characters: result.data, isLoaded: true });

    // axios utilization
    // axios.get("https://miadil.github.io/starwars-api/api/all.json")
    // .then((res) => this.setState({ characters: res.data, isLoaded: true })
    // );

    // fetch Utilzation
    // fetch("https://miadil.github.io/starwars-api/api/all.json")
    //   .then((res) => res.json())
    //   .then((res) => this.setState({ characters: res, isLoaded: true }));
  };
  // lancement de cette fonction "après" le chargement des datas
  componentDidMount() {
    this.getCharacters();
  }

  render() {
    const { characters, isLoaded } = this.state;
    return (
      <>
        {!isLoaded ? (
          <div>Loading...</div>
        ) : (
          <div>
            Characters chicken code school
            <div>
              {characters.map((character) => (
                <DisplayCharacter character={character} key={character.id} />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default CharactersAPI;
