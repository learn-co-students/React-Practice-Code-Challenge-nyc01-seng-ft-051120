import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    eatenSushi: [] 

  }

  componentDidMount(){
    this.getSushi()
  }
  
  getSushi = () => {
    fetch(API)
      .then(res => res.json())
      .then(sushi => this.setState({ sushi })) 
  }

  eatSushi = (id) => {
    if(!this.state.eatenSushi.includes(id)){
      this.setState({ eatenSushi: [ ...this.state.eatenSushi, id ]})
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <SushiContainer 
          eat={this.eatSushi}
          eatenSushi={this.state.eatenSushi}
          sushi={this.state.sushi}/>
        <Table 
          eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}
