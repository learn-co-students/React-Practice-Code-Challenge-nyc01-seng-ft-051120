import React, { Fragment } from 'react'

class Sushi extends React.Component {

  state = {
    eaten: false
  }

  toggleEaten = () => {
    this.setState({
      eaten: !this.state.eaten
    })
  }

  render() {
    console.log(this.state);
  return (
      <div className="sushi">
        <div className="plate" 
             onClick={() => this.toggleEaten()}>
          {this.state.eaten ? null : <img src={this.props.image} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    )
  }
}

export default Sushi