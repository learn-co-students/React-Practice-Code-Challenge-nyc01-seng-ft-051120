import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    budget: 100,
    eaten: [], // running this back, we're gonna do this as an array of ID's
    displayIndex: 0
  }
  componentDidMount(){
    this.fetchSushi()
  }
  
  fetchSushi = () => {
    fetch(API/*+'?_limit=4*/)
    .then(r => r.json())
    .then(data => {
      this.setState({
        sushis: data
      })
    })
  }

  getFourSushi = () => {
    return this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex + 4)
  }

  more = (e) => {
    let newDisplayIndex = this.state.displayIndex + 4
    this.setState({
      displayIndex: newDisplayIndex
    })
  }

  // eatSushi = (id) => {
  //   this.setState({
  //     eatenSushi: [...this.state.eatenSushi, id]
  //   })
  // }

  eat = (sushi) => {
    const newMoney = this.state.budget - sushi.price
    if (!this.state.eaten.includes(sushi) && newMoney >= 0){
      this.setState({
        eaten: [...this.state.eaten, sushi],
        budget: newMoney
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        sushis={this.getFourSushi()} 
        more={this.more}
        eat={this.eat}
        eaten={this.state.eaten}
        />
        <Table budget={this.state.budget} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;