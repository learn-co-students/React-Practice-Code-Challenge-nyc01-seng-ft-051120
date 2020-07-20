import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: []
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
  
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        sushi={this.state.sushi} 
        moreSushiHandler={this.moreSushiHandler}/>
        <Table />
      </div>
    );
  }
}

export default App;