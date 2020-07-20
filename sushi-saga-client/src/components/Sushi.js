import React from 'react'

class Sushi extends React.Component {

  state = {
    eaten: false
  }

  eatSushi = () => {
    if (this.props.budget >= this.props.price){
      this.setState(prevState=> {
        return {eaten: !prevState.eaten}
      })
      this.props.deduct(this.props.price)
      this.props.newEmptyPlate()
    }
  }

  render(){
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={this.eatSushi}>
          { 
            this.state.eaten
            ?null
            :<img src={this.props.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    )
  }

}

export default Sushi