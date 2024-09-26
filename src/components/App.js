import Header from "../components/Header";
import User from "../components/User.json";
import CharactersAPI from "../components/CharactersAPI";
import React from "react";
// import Form from "../components/Form";
// import StarWarsComponentIA from "../components/StarwarsComponentIA";
import "../styles/app.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header {...User} />
        <CharactersAPI />
        {/* <StarWarsComponentIA /> */}
        {/* <Form /> */}
      </div>
    );
  }
}

export default App;
