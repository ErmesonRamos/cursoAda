import React from "react"
// Componente em classe é uma classe que herda a classe Componentes do React, e retorna HTML dentro método render.
class App extends React.Component {
  constructor() {
    super()
    this.name = 'Ermeson Ramos'
  }
  // Método responsável por renderizar o contéudo HTML do nosso componente.
   render() {
    return (
      <>
        <div>
          <h1>Aprendendo React</h1>
          <h2>{this.name}</h2>
          <p>Isso aqui é um parágrafo</p>
        </div>
      </>
    )
  }
}

export default App;
