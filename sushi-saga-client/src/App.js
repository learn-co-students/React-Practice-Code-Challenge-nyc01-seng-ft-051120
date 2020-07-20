import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  state = {
    sushies:[],
    currentIndex:0
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushies => this.setState({sushies}))
  }

  increaseIndex = ()=>{
    this.setState({currentIndex: this.state.currentIndex + 4})
  }

  render() {
    
    return (
      <div className="app">
        <SushiContainer  
          sushies={this.state.sushies} 
          currentIndex={this.state.currentIndex}
          increaseIndex={this.increaseIndex}/>
        <Table />
      </div>
    );
  }
}

export default App;