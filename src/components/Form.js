import React from "react";

class Form extends React.Component {

   envioFormulario = event => {
      this.props.agregarPelicula(
        document.getElementById("nombre").value
      );
      document.getElementById("nombre").value = "";
        event.preventDefault();
    }

  render() {
    return (
    <div>
      <form onSubmit={this.envioFormulario}>
        <label>Nombre:
        <input type="text" id="nombre" name="nombre" placeholder="Ingresa el nombre" required /></label>
        <button type="submit">Enviar</button>
      </form>
    </div>
    )
  }
}

export default Form;