import React, { Component } from "react";
import Children from "./Children";

class Folder extends Component {
  constructor(props) {
    super();
    this.state = {
      showChildren: false
    };
  }
  displayChildren = () => {
    let showChildren = !this.state.showChildren;
    this.setState({
      showChildren
    });
  };
  render() {
    return (
      <div>
        <h1>
          {this.props.item.name}{" "}
          <button onClick={this.displayChildren}>Show </button>
        </h1>
        <div style={{ borderLeft: "2px solid red" }}>
          {this.state.showChildren &&
            this.props.item.children.map(eachItem => (
              <div style={{ marginLeft: "30px" }}>
                <Children item={eachItem} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Folder;
