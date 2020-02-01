import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './Form';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: []
    }
  }

  componentDidMount() {

    this.getCars()

  }
  
  getCars = () => {
    axios.get('/api/inventory').then(res=>{
      console.log('response from get cars',res.data);
      this.setState({
        inventory: res.data
      })
    })
  }

  soldCars = (id) => {
    axios.delete(`/api/sold/:id`).then(res =>{
      this.setState({
        inventory: res.data
      })
    })
  }

  createVehicle = inventory => {
    axios.post(`/api/createVehicle`, inventory).then(res =>{
      this.setState({
        inventory: res.data
      })
    })
  }

  updatePrice = (id, inventory) => {
    axios.put(`/api/updatePrice/:id`, inventory).then(res =>{
      this.setState({
        inventory: res.data
      })
    })
  }

  render() {
    const mappedInventory = this.state.inventory.map(car => {
      return (
        <List inventory={car}
        key={car.id} />
      )
    })
    
    return (
      <div>
        <Form create={this.createVehicle}/>
        <div>{mappedInventory}</div>
        
      </div>
    )
  }
}





export default App;
