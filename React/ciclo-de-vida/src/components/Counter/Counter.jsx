import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 }
  }
  render() {
    return (
      <>
        <h1>0</h1>
        <button>Aumentar</button>
        <button>Diminuir</button>
      </>
    )
  };
}
