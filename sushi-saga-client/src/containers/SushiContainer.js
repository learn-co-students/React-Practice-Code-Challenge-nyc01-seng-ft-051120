import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  state={
    sushis: []
  }
  more=()=>{
    this.setState({sushis:this.props.})
  }

  render(){  
    return (
      <Fragment>
        <div className="belt">
          {this.props.sushis.slice(0,4).map(sushi=> <Sushi key={sushi.id} {...sushi}/>)}
          <MoreButton />
          
        </div>
      </Fragment>
    )}

}
// const SushiContainer = (props) => {
//     return (
//       <Fragment>
//         <div className="belt">
//           {props.sushis.slice(0,4).map(sushi=> <Sushi key={sushi.id} {...sushi}/>)}
//           <MoreButton more={more}/>
          
//         </div>
//       </Fragment>
//     )
  
// }

export default SushiContainer