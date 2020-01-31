import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: []
    }
  }

  render() {
    return (
      <div>
        <Form />
      </div>
    )
  }
}





export default App;
