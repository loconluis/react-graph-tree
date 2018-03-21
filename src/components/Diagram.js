import React from "react";
import OrgChart from "react-orgchart";
import 'react-orgchart/index.css';
import data from "../data";

class Diagram extends React.Component {
  render() {
    const MyNodeComponent = ({ node }) => {
      return (
        <div
          className="initechNode"
          onClick={() => alert("Hi my real name is: " + node.name)}
        >
          {node.name}
          <br />
          {node.description}
        </div>
      );
    };
    return (
      <div>
        <p>Hola</p>
        <OrgChart tree={data[0]} NodeComponent={MyNodeComponent} />
      </div>
    );
  }
}

export default Diagram;
