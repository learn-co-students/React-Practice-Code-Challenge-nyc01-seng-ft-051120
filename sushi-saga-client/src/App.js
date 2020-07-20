import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    money: 100,
    eaten: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/sushis')
      .then(resp => resp.json())
      .then(data => this.setState({ sushis: data }))
  }


  eatMe = (sushi) => {
    const newMoney = this.state.money - sushi.price
    if (!this.state.eaten.includes(sushi) && newMoney >= 0) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: newMoney
      })
    }
  }
  render() {

    return (
      <div className="app">
        <SushiContainer
          eatMe={this.eatMe}
          sushis={this.state.sushis}
          eaten={this.state.eaten}
        />
        <Table
          eaten={this.state.eaten}
          money={this.state.money} />
      </div>
    );
  }
}

export default App;