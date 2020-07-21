import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


class SushiContainer extends Component {
  state = {
    startIndex: 0
  }

  updateIndex = () => {
    let newIndex = this.state.startIndex + 4 
    this.setState({ startIndex: newIndex >= this.props.sushi.length ? 0 : newIndex })
    // this.setState(prevState => ({ startIndex: prevState.startIndex + 4 })) // implicit return of object, just wrap obj in parens
    // this.setState(prevState => ({ startIndex: 
    //     prevState.startIndex + 4 > prevState.sushis.length 
    //       ? 0 
    //       : prevState.startIndex + 4 
    // }))
  }

  render(){
    let { startIndex } = this.state
    return (
      <Fragment>
        <div className="belt">
          {this.props.sushi.slice(startIndex, startIndex + 4).map(sushi => (
            <Sushi 
              key={sushi.id} 
              {...sushi} 
              // eatenSushi={this.props.eatenSushi} and then do includes in ternary in Sushi.js
              showImg={this.props.eatenSushi.includes(sushi.id)/** true/false */}
              eat={this.props.eat}/>
          ))}
          <MoreButton 
            more={this.updateIndex}/>
        </div>
      </Fragment>
    )
  }
}


export default SushiContainer