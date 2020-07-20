import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
state = {
  dirtyDishes: 0,
  sushi: []
}

componentDidMount(){
 this.fetchSushi()
}

dishBin = () => {
  this.setState({dirtyDishes: this.state.dirtyDishes + 1})
  console.log(this.state.dirtyDishes)
}


fetchSushi(){
 fetch(API)
 .then(res => res.json())
   .then(data => {
     this.setState({sushi: data})
  })
}


  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} dishBin={this.dishBin}/>
        <Table dirtyDishes={this.state.dirtyDishes}/>
      </div>
    );
  }
}

export default App;
