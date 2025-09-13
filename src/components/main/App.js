import React from 'react';
import './App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Form from '../Form';

class App extends React.Component{
  state ={
        peliculas: [
        {"id": 1,"nombre": "A House of Dynamite"},
        {"id": 2,"nombre": "Dead Man's Wire"},
        {"id": 3,"nombre": "Marc by Sofia"},
        {"id": 4,"nombre": "El extranjero"},
        {"id": 5,"nombre": "Romería"},
        {"id": 6,"nombre": "Sirat. Trance en el desierto"},
        {"id": 7,"nombre": "Predator: Asesino de asesinos"},
        {"id": 8,"nombre": "Superman"},
        {"id": 9,"nombre": "Cómo entrenar a tu dragón"},
        {"id": 10,"nombre": "Ne Zha 2"},
        {"id": 11,"nombre": "Lilo & Stitch"},
        {"id": 12,"nombre": "Captain America: Brave New World"},
        {"id": 13,"nombre": "Jurassic World: Rebirth"},
        {"id": 14,"nombre": "Una película de Minecraft"},
        {"id": 15,"nombre": "The Monkey"},
        {"id": 16,"nombre": "Aún estoy aquí"},
        {"id": 17,"nombre": "The Order"},
        {"id": 18,"nombre": "Memorias de un caracol"},
        {"id": 19,"nombre": "La luz que imaginamos"},
        {"id": 20,"nombre": "A Real Pain"},
    ]
  }

  agregarPelicula = (nuevoNombre) =>{
  const pelicula = {
    id: this.state.peliculas.length+1,
    nombre: nuevoNombre,
  }

  this.setState({
    peliculas : [...this.state.peliculas, pelicula
    ]
  })
  console.log("Datos recibidos ", pelicula);
}

  render(){
    return (
      <>
        <Header/>
        <h2>Mi aplicación</h2>
        <div className='parrafo'>
          <p>Esta aplicación muestra el contenido almacenado de mi app:</p>
        </div>

        <dl>
        {this.state.peliculas.map(i => (
        <React.Fragment key={i.id}>
          <dt>Nombre: {i.nombre}</dt>
          <dd>ID: {i.id}</dd>
        </React.Fragment>
        ))}
      </dl>


        <Form agregarPelicula={this.agregarPelicula}/>

        <Footer/>
      </>
      
    );
  }
}
export default App;

