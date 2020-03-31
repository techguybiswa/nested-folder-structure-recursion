import React, { Component } from "react";

class Question2 extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "Trell"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>;
      </div>
    );
  }
}

export default Question2;
