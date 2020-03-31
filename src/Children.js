import React, { Component } from "react";
import Folder from "./Folder";

class Children extends Component {
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
        <div style={{ marginLeft: "30px", borderRight: "1px solid red" }}>
          {this.state.showChildren &&
            this.props.item.children.map(eachItem => (
              <div style={{ marginLeft: "30px", borderRight: "1px solid red" }}>
                <Folder item={eachItem} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Children;
