import React from "react";
import Navbar from "./assets/Navbar/Navbar";
import './assets/styles/App.css'
// Componente em classe é uma classe que herda a classe Componentes do React, e retorna HTML dentro método render.
class App extends React.Component {

  // Método responsável por renderizar o contéudo HTML do nosso componente.
   render() {
    return <Navbar />;
  }
}

export default App;
