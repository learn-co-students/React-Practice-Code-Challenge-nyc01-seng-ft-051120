import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state={
    limit:4
  }
handleMoreSushi=()=>{
if(this.state.limit < this.props.sushis){
  this.setState((prevState) => ({ limit: (prevState.limit + 4) }));
}
}

eatMe = (id)=>{
  
  let eat = this.props.sushis.filter(i=>i!==id)
  console.log(eat)

}

  render() {
    let sushis=this.props.sushis.slice(0,this.state.limit)
    return (
      
         <React.Fragment>
      <div className="belt">
       
        {sushis.map(sushi=>
        <Sushi 
        eatMe={this.eatMe}
        id={sushi.id}
        name={sushi.name}
      img_url={sushi.img_url}
     price={sushi.price}
        />
        )
        }
        <MoreButton handleMoreSushi={this.handleMoreSushi}/>
      </div>
    </React.Fragment>
  ) 

  }
}

export default SushiContainer
