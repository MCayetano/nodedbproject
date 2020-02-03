import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './Form';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: [],
      price: ""
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
    // console.log("soldCars", id);
    axios.delete(`/api/sold/${id}`).then(res =>{
      // console.log('inventory after delete', res.data);
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
    axios.put(`/api/updatePrice/${id}`, inventory).then(res =>{
      this.setState({
        inventory: res.data
      })
    })
}

handleChange = e => {
  let price = e.target.value;
  this.setState ({
      price : price
  })
}


editCar = (e) => {
  // console.log(e.target.value)
  let indexValue = e.target.value
  let index = this.state.inventory.findIndex(elem => {
    return parseInt(elem.id) === parseInt(indexValue)
  })

  

  let curCar = this.state.inventory[index]

  let updatedCar = {
    id: curCar.id,
    make: curCar.mqke,
    model: curCar.model,
    year: curCar.year,
    price: this.state.price,
    description: curCar.description
  }
  this.updatePrice(index, updatedCar)
  this.setState({
    price: ""
  })
}

  render() {
    const mappedInventory = this.state.inventory.map(car => {
      console.log(car.id, "id's of all cars")
      return (
        <div>
          <List price={this.state.price} inventory={car} handleChange={this.handleChange}
          key={car.id} />
          {/* <input placeholder="Price" value={this.state.price} onChange={this.handleChange}></input> */}
          <button value={car.id} onClick={this.editCar}>Edit</button>
          <button value={car.id} onClick={e => this.soldCars(e.target.value)}>Delete</button>
        </div>


      )
    })
    
    return (
      <div>
        <div className="header">
          <h1 className="Textheader">Elite Auto Brokers</h1>
        </div>
        <div className="centerBar">
        <Form create={this.createVehicle}/>
        </div>
        <div>{mappedInventory}</div>
        
      </div>
    )
  }
}





export default App;
