import React, { Component } from 'react';
import Diagram from './Diagram';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Diagram />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
