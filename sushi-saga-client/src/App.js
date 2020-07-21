import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './containers/sushiWallet'

// Endpoint!
const sushiUrl='http://localhost:3000/sushis'

class App extends Component {
  state={sushis: [],
    ate: [],
    balance: 50}
 componentDidMount(){
 fetch(sushiUrl)
 .then(res=>res.json())
 .then(sushis=>{
   this.setState({sushis})
 })
 }
 eatSushi=(id)=>{
  const  eatenSushi=this.state.sushis.find(s=>s.id==id)
    let eaten=false
    this.state.ate.forEach(sushi => {
      if(sushi.id==id){
        eaten=true
      }
     
    });
  if(parseInt(eatenSushi.price)<=this.state.balance &&eaten==false){
    this.setState({ate: [...this.state.ate, eatenSushi],
      balance: this.state.balance-parseInt(eatenSushi.price)})
    }
 
 }
 handleAddMoney=(e)=>{
   this.setState({balance: this.state.balance+parseInt(e.target.value)})
   e.target.value=5

 }

  render() {
    
    return (
      <div className="app">
        <SushiWallet handleAddMoney={this.handleAddMoney}/>
        <SushiContainer sushis={this.state.sushis} 
        ate={this.state.ate}
        eatSushi={this.eatSushi}/>
        <Table ate={this.state.ate} balance={this.state.balance}/>
      </div>
    );
  }
}

export default App;