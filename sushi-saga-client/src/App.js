import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
state = {
  sushi: []
}

componentDidMount(){
 this.fetchSushi()
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
        <SushiContainer sushi={this.state.sushi}/>
        <Table />
      </div>
    );
  }
}

export default App;
