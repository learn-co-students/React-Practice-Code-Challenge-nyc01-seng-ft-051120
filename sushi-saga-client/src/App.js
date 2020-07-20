import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    money: 100,
    plates: [],
    pageNumber: 1
  }


  fetchSushi = () => {
    let currentPage = this.state.pageNumber
    fetch(`http://localhost:3000/sushis/?_limit=4&_page=${currentPage}`)
    .then(res => res.json())
    .then( data => {
      this.setState({
        sushi: data,
        pageNumber: parseInt(this.state.pageNumber) + 1
      })
    })
  }
  componentDidMount(){
    this.fetchSushi()
  }
  
  moreSushiHandler = () => {
    console.log('hi')
    this.fetchSushi()
  
  }

  addPlates = () => {
    this.setState({
      plates: this.state.plates.push(1)
    })
  }

 

  render() {
    console.log(this.state.eaten)
    return (
      <div className="app">
        <SushiContainer 
        sushi={this.state.sushi} 
        eaten={this.state.eaten}
        moreSushiHandler={this.moreSushiHandler}
        addPlates={this.addPlates}
        />
        <Table money={this.state.money}
        plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;