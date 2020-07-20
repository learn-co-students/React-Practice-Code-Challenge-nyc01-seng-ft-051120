
import React, { Component, Fragment } from 'react';
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


class SushiContainer extends Component {
state = {
 currentSushiStart: 0,
 currentSushiEnd: 4,
}

 more = () => {
   this.setState({
     currentSushiStart: this.state.currentSushiStart + 4,
     currentSushiEnd: this.state.currentSushiEnd + 4
   })
 }

render(){
  let currentSushi = this.props.sushi.slice(this.state.currentSushiStart, this.state.currentSushiEnd)
  return (
    <Fragment>
      <div className="belt">
        {
         currentSushi.map((sushi, index) =>
           <Sushi key={sushi.id} sushi={sushi} dishBin={this.props.dishBin}/>
       )}
        <MoreButton more={this.more}/>
      </div>
    </Fragment>
  )
 }
}

export default SushiContainer
