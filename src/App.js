import React, { Component } from "react";
import Folder from "./Folder";
class App extends Component {
  componentDidMount = () => {
    // console.log(this.state.folderList);
    // this.renderFolderList(this.state.folderList);
  };

  constructor(props) {
    super();
    this.state = {
      name: "Trell",
      showFolders: false,
      listOfFolderNames: [],
      folderList: {
        name: "root",
        children: [
          {
            name: "folder1",
            children: [
              {
                name: "folder1.1",
                children: [
                  {
                    name: "folder1.1.1",
                    children: [
                      {
                        name: "folder1.1.1.1",
                        children: [
                          {
                            name: "folder1.1.1.2",
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    name: "folder1.1.2",
                    children: []
                  },
                  {
                    name: "folder1.1.3",
                    children: []
                  }
                ]
              },
              {
                name: "folder1.2",
                children: [
                  {
                    name: "folder1.2.1",
                    children: []
                  },
                  {
                    name: "folder1.2.2",
                    children: []
                  }
                ]
              },
              {
                name: "folder1.3",
                children: []
              }
            ]
          },
          {
            name: "folder2",
            children: [
              {
                name: "folder1.2.1",
                children: []
              },
              {
                name: "folder1.2.2",
                children: []
              }
            ]
          },
          {
            name: "folder3",
            children: []
          }
        ]
      }
    };
  }
  renderFolders = () => {
    console.log(this.state.listOfFolderNames);
    this.setState({
      showFolders: true
    });
  };
  render() {
    return (
      <div>
        {this.state.folderList.children.map(eachItem => (
          // <p>{eachItem}</p>
          <Folder item={eachItem} />
        ))}
      </div>
    );
  }
}

export default App;
