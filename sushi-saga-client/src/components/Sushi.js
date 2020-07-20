import React, { Component, Fragment } from 'react'

class Sushi extends Component{

state = {
  sushiId: this.props.sushi.key,
  eaten: false
}

componentDidUpdate(prevProps){
  if (this.state.sushiId !== this.props.sushi.key) {
      this.setState({eaten: false})
  }

}

eat(dishPrice) {
  if (this.props.budget < dishPrice) {
   console.log("out of money")
 } else {
  this.setState({eaten: true});
  this.props.dishBin(dishPrice)
 }
}

render(){

  return (
    <div className="sushi">
      <div className="plate"
           onClick={()=> this.eat(this.props.sushi.price)}>
        {
           !this.state.eaten ?
            <img src={this.props.sushi.img_url} width="100%" />
            :
            null
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
  )
 }
}

export default Sushi
