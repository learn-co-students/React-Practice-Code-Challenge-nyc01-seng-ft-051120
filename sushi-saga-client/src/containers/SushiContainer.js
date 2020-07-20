import React from 'react'
import MoreButton from '../components/MoreButton'
// import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state={
    limit:4
  }
handleMoreSushi=()=>{
  
}

  render() {
    return (
      
         <React.Fragment>
      <div className="belt">
        {
          // <Sushi />
        }
        <MoreButton />
      </div>
    </React.Fragment>
  ) 

  }
}

export default SushiContainer
