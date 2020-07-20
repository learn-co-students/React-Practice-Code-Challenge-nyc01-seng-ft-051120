import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props.sushi)
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.map(sushi => 
        <Sushi 
          key={props.sushi.id}
          {...sushi}
          eatSushi={props.eatSushi}
        />
        )}
        <MoreButton moreSushiButton={props.moreSushiButton}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer