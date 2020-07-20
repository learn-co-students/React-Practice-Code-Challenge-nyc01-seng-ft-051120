import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    money: 100,
    eaten: false
  }


  fetchSushi = () => {
    fetch('http://localhost:3000/sushis/?_limit=4')
    .then(res => res.json())
    .then( data => {
      this.setState({
        sushi: data
      })
    })
  }
  componentDidMount(){
    this.fetchSushi()
  }
  
  moreSushiHandler = () => {
    console.log('hi')
    let pageNumber = this.state.pageNumber
    fetch('http://localhost:3000/sushis/?_limit=4')
    .then(res => res.json())
    .then( data => {
      this.setState({
        sushi: data
      })
    })
  
  }

  eatSushi = (e) => {
     console.log(e.target)
     this.setState({
       eaten: true
     })
     
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        sushi={this.state.sushi} 
        eaten={this.state.eaten}
        moreSushiHandler={this.moreSushiHandler}
        eatSushi={this.eatSushi}/>
        <Table money={this.state.money}/>
      </div>
    );
  }
}

export default App;