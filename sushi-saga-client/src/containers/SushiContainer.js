import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


class SushiContainer extends Component {
  state = {
    startIndex: 0
  }

  updateIndex = () => {
    this.setState(prevState => ({ startIndex: prevState.startIndex + 4 }))
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
              showImg={this.props.eatenSushi.includes(sushi.id)}
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