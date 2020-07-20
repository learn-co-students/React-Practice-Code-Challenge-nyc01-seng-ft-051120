import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
 
function displayNextFourSushies(sushies,currentIndex){
    let sushiesToBeDisplay = []
    for (let i = currentIndex; i < currentIndex + 4 ; i++){
      sushiesToBeDisplay.push(<Sushi {...sushies[i]}/>)
    }
    return sushiesToBeDisplay
}



const SushiContainer = (props) => {
  console.log(props)
  return (
    <Fragment>
      <div className="belt">
        {
          displayNextFourSushies(props.sushies,props.currentIndex)
          /* 
             Render Sushi components here!
          */
        }
        <MoreButton increaseIndex={props.increaseIndex}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer