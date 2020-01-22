import React, { Component } from "react";
//components
import './App.css';
import Moviesheader from "./components/Moviesheader"; 

class App extends Component {
  render() {
    console.log(this.props);
    return <Moviesheader />;
  }
}

export default App;
