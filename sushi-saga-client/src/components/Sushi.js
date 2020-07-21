import React, { Fragment } from 'react'

class Sushi extends React.Component {

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={() => this.props.eatSushi(this.props.id)}>
          {
            /* Tell me if this sushi has been eaten! */ 
            false ?
            null
            :
            <img src={this.props.img_url} width="100%" />
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