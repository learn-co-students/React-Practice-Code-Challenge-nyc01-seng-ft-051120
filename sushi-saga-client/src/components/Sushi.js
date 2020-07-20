import React, { Fragment } from 'react'

class Sushi extends React.Component {

  state = {
    wasEaten: false
  }

  eatSushi = ()=>{
    const {buySushi,price} = this.props
    if(buySushi(price)){
      this.setState({wasEaten:true})
    }else{
      alert("You don't have enough money")
    }
  }

  render(){
    console.log(this.props);
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={/* Give me a callback! */ this.eatSushi}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            this.state.wasEaten ?
              null
            :
              <img src={this.props.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {/* Give me a name! */this.props.name} - ${/* Give me a price! */this.props.price}
        </h4>
      </div>
    )
  }
}

export default Sushi