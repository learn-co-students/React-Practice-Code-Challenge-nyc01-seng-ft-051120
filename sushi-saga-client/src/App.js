import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state={
    sushis: [],
    eatSushi: [],
    remainingMoney: 70
  }

  componentDidMount(){
    fetch(API)
    .then(resp=>resp.json())
    .then(sushis => this.setState({sushis}))
  }

  handleEat = (sushiId) =>{
    let selectedSushi = this.state.sushis.find(sushi => sushi.id === sushiId)
    let remaining = this.state.remainingMoney - selectedSushi.price
    if(remaining >= 0){
      this.setState(prevState => ({
        eatSushi: [...prevState.eatSushi, selectedSushi],
        remainingMoney: remaining
      }));
    }
    
  }


  render() {
    return (
      <div className="app">
        <SushiContainer 
        sushis={this.state.sushis}
        handleEat={this.handleEat}
        eatSushi={this.state.eatSushi}/>
        <Table eatSushi={this.state.eatSushi}
        remainingMoney={this.state.remainingMoney}/>
      </div>
    );
  }
}

export default App;