import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    startIndex: 0
  }

  getMore = () => {
    // console.log(this.state)
    if (this.state.startIndex >= this.props.sushis.length){
      this.setState({
        startIndex: 0
      })
    }
    else{
    this.setState({
      startIndex: this.state.startIndex + 4
    })
  }
  }
  
  render(){
  return (
    <Fragment>
      <div className="belt">
         {this.props.sushis.slice(this.state.startIndex, this.state.startIndex + 4).map(sushi => 
                <Sushi
                key={sushi.id}
                id={sushi.id}
                name={sushi.name}
                img_url={sushi.img_url}
                price={sushi.price}
                eat={this.props.eat}
                isEaten={this.props.eatenSushi.includes(sushi.id)}
                />
              
        )}
        <MoreButton more={this.getMore}/>
      </div>
    </Fragment>
  )}
}

export default SushiContainer