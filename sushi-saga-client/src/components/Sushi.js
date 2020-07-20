import React, { Component, Fragment } from 'react'

class Sushi extends Component{

state = {
  eaten: false
}

eat() {
  this.setState({eaten: true})
}

render(){
  return (
    <div className="sushi">
      <div className="plate"
           onClick={()=> this.eat()}>
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
