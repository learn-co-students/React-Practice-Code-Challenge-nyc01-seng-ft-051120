import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {

  state = {
    sushis: [],
    budget: 100,
    emptyPlates: []
    // page: 1
  }

  componentDidMount(){
    fetch(API)
    .then(res=>res.json())
    .then(sushis=> this.setState({sushis}))
  }

  deduct = (amount) => {
    this.setState({budget: this.state.budget-amount})
  }


  newEmptyPlate = () => {
    this.setState({emptyPlates: [...this.state.emptyPlates, "anotha one"]})
  }
  // getSushis = () => {
  //   fetch(`http://localhost:3000/sushis/?_limit=4&page=${this.state.page}`)
  //   .then(res=>res.json())
  //   .then(sushis=> this.setState({sushis}))
  // }

  // loadMore = () => {
  //   this.setState({page: this.state.page +1}, this.getSushis())
  // }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <SushiContainer budget={this.state.budget} sushis = {this.state.sushis} deduct = {this.deduct} newEmptyPlate={this.newEmptyPlate} />
        <Table budget={this.state.budget} emptyPlates={this.state.emptyPlates}/>
      </div>
    );
  }
}

export default App;