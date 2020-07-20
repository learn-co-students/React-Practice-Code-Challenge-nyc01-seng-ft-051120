import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    fetchedSushis: [],
    budget: 100,
    consumedSushi: []
  }
  componentDidMount(){
    this.fetchSushi()
  }
  
  fetchSushi = () => {
    fetch(API/*+'?_limit=4*/)
    .then(r => r.json())
    .then(data => {
      this.setState({
        fetchedSushis: data
      })
    })
  }

  

  getMoreSushi = (x,y) => {
    console.log('get me more sushi');
   
  }

  // eatSushi = () => {
  //   this.setState(prevState => {
  //     return {
  //       budget: prevState.budget - 
  //     }
  //   })
  // }


  render() {
    let smallerSushiArray = this.state.fetchedSushis.slice(0,4)
    return (
      <div className="app">
        <SushiContainer sushis={smallerSushiArray} getMoreSushi={this.getMoreSushi}/>
        <Table budget={this.state.budget} />
      </div>
    );
  }
}

export default App;