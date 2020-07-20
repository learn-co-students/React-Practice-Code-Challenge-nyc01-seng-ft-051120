import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {

  state ={
    startIndex: 0
  }

 nextFour = () => {
   this.setState(prevState => {
     return{startIndex: prevState.startIndex + 4}
   })
 }

  render(){
    let fourSushis = this.props.sushis.slice(this.state.startIndex,this.state.startIndex+4)
    console.log(fourSushis)
    return (
      <Fragment>
        <div className="belt">
          {
            fourSushis.map(sushi=>(<Sushi key={sushi.id} {...sushi} deduct = {this.props.deduct} budget={this.props.budget} newEmptyPlate={this.props.newEmptyPlate}/>))
          }
          <MoreButton more={this.nextFour}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer