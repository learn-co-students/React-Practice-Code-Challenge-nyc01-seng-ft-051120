import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    page: 5,
    ateSushi: [],
    sushi: [],
    budget: 100
  }
  
  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState( {sushi: data} )
    })
  }

  renderSushi = () => {
    let n = this.state.page
    let sushi = this.state.sushi
    let rendered = sushi.map(sushi => sushi.id < n && !this.state.ateSushi.includes(sushi) ? sushi : null)
    return <SushiContainer eatSushi={this.eatSushi} sushi={rendered} moreSushiButton={this.moreSushiButton}/>
  }

  moreSushiButton = () => {
    let n = this.state.page
    this.setState( {page: n*2 })
  }

  eatSushi = (id) => {
   let selectedSushi = this.state.sushi.find(sushi => sushi.id === id)
   let originalBudget = this.state.budget
   if (originalBudget < selectedSushi.price) {
     alert("You do not have enough in your budget for this sushi.")
   } else {
    let newBudget = originalBudget - selectedSushi.price
    this.setState({ateSushi: [...this.state.ateSushi, selectedSushi], budget: newBudget})
   }
  }



  render() {
    console.log(this.state)
    return (
      <div className="app">
        {this.renderSushi()}
        <Table sushi={this.state.ateSushi} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;