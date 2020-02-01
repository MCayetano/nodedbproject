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

  getCars = () => {
    axios.get('/api/inventory').then(res=> {
      this.setState({
        inventory: res.data
      })
    })
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
