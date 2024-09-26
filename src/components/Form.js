import React from "react";

class Form extends React.Component {
  // Déclaration de la state
  state = {
    firstName: "",
    email: ""
  };

//   fonction de changement en fonction de l'état de l'évenemnt
  handleChange = (event) => {
    // console.log(event.target.name);
    // accéder au nom de l'élément ainsi qu'à sa valeur.
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    // console.log(this.state);
    return (
      <div className="form">
        {/* à chaque fois qu'il y a mise à jour du state, injecter les valeurs directement içi */}
        UserName : {this.state.firstName} <br />
        Email : {this.state.email}
        <p>Name: <input name="firstName" type="text" onChange={this.handleChange} /> </p>
        <p>Email: <input name="email" type="email" onChange={this.handleChange} /> </p>
      </div>
    );
  }
}

export default Form;
