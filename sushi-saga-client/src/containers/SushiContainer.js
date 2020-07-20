import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  state={
    moreFirst: 0,
    moreLast: 4
  }
  loadMore=()=>{
    this.setState({moreFirst: this.state.moreFirst+4})
    this.setState({moreLast: this.state.moreLast+4})
  }

  render(){  
    return (
      <Fragment>
        <div className="belt">
          {this.props.sushis.slice(this.state.moreFirst,this.state.moreLast).map(sushi=> 
          <Sushi key={sushi.id} {...sushi} 
                  handleEat={this.props.handleEat}
                  eaten={this.props.eatSushi.includes(sushi)}/>)}

          <MoreButton more={this.loadMore}/>
          
        </div>
      </Fragment>
    )}
}

export default SushiContainer