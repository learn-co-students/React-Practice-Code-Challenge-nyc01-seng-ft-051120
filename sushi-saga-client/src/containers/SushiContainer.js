import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
         props.sushi.map(sushi => <Sushi sushi={sushi} addPlates={props.addPlates}/>)
        }
        <MoreButton moreSushiHandler={props.moreSushiHandler}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer