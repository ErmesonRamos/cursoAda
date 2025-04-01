import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    console.log("Construindo a classe Counter!");
    this.state = { counter: 0 };
  }

  UNSAFE_componentWillMount() { 
    console.log("O Nosso componente contador será montado ");
  }

  componentDidMount() {
    console.log("O Nosso componente contador foi montado");
  }
  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Aumentar
        </button>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter - 1 });
          }}
        >
          Diminuir
        </button>
      </>
    );
  }
}
