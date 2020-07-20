import React, { Fragment } from 'react'

class Sushi extends React.Component {

  state = {
    eaten: 'false'
  }

  eatSushi = (e) => {
    console.log(e.target)
    if (this.state.eaten === 'false'){
      this.setState({
      eaten: 'true'
    })
   }
    
 }
  
  render(){
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={this.eatSushi}
           onClick={this.props.addPlates}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          this.state.eaten === 'true' ?
        
           null
          :
            <img src={this.props.sushi.img_url} width="100%" />
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