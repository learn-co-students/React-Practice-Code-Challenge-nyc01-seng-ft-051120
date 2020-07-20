
import React, { Component, Fragment } from 'react';
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


class SushiContainer extends Component {
state = {
 currentSushiStart: 0,
 currentSushiEnd: 4,
}
 more() {

 }

render(){
  console.log(this.props)

  let currentSushi = this.props.sushi.slice(this.state.currentSushiStart, this.state.currentSushiEnd)
  return (
    <Fragment>
      <div className="belt">
        {
         currentSushi.map((sushi, index) =>
           <Sushi key={index} sushi={sushi}/>
       )}
        <MoreButton />
      </div>
    </Fragment>
  )
 }
}

export default SushiContainer
