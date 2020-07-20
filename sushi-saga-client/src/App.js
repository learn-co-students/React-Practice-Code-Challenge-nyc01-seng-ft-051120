import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushi: [],
    money: 100,
    newMoney: ''
  }

  componentDidMount(){
  
    fetch(API)
    .then(resp => resp.json())
    .then(data => 
      this.setState({
      sushis: data
    }))
  }

  eatSushi = (id, price) => {
    console.log(this.state)
    if(!this.state.eatenSushi.includes(id) && price <= this.state.money){
      this.setState(prevState => ({
        eatenSushi: [...prevState.eatenSushi, id],
        money: prevState.money - price
      }))
    }
  }

  addMoney = (e) => {
    console.log(this.state)
    this.setState({
      newMoney: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState(prevState => ({
      money: prevState.money + parseInt(prevState.newMoney),
      newMoney: ''
    }))
  }

  render() {
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <label >
            <input placeholder='Add Money' type='number' value={this.state.newMoney} onChange={this.addMoney}/>
          <button type='Submit'>Add Money</button>
          </label>
          </form>
        <SushiContainer sushis={this.state.sushis}
            eat={this.eatSushi}
            eatenSushi={this.state.eatenSushi}
        />
        <Table money={this.state.money}
          eaten={this.state.eatenSushi}
        />
      </div>
    );
  }
}

export default App;