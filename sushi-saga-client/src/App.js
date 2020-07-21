import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Sushi from './components/Sushi';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  state = {
    sushies:[],
    currentIndex:0,
    clientMoney:200,
    sushiesEaten:0
  }

  buySushi = (price,id) =>{
    if (this.state.clientMoney >= price){
      const newSushiArray = this.state.sushies.map (sushi => {
        if (sushi.id === id ){
          return {...sushi,eaten:true}
        }
        return sushi
      })
      this.setState({
        sushies: newSushiArray,
        clientMoney:this.state.clientMoney - price,
        sushiesEaten: this.state.sushiesEaten + 1
      })
      return true
    }
    return false
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushies => {
      const newSushies = sushies.map( sushi => {
        return { ...sushi,eaten:false }
      })
      this.setState({sushies:newSushies})
  
    })
  }

  increaseIndex = ()=>{
    if((this.state.currentIndex + 4) === 100){
    this.setState({currentIndex:0})
    }else{
    this.setState({currentIndex: this.state.currentIndex + 4})
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  
          sushies={this.state.sushies} 
          currentIndex={this.state.currentIndex}
          buySushi = {this.buySushi}
          increaseIndex={this.increaseIndex}/>
        <Table  clientMoney={this.state.clientMoney}  sushiesEaten={this.state.sushiesEaten}/>
      </div>
    );
  }
}

export default App;