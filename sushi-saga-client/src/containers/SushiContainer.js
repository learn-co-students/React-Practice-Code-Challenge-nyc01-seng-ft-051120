import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'



class  SushiContainer extends React.Component {
  state={current: 4, 
    previous: 0}

 handleMore=()=>{
   this.setState({current: this.state.current+4,
    previous: this.state.previous+4})
 }
 renderSushi=()=>{
   let toBeRenderedSushi=[]
   if(this.props.sushis[0]!=undefined){
     
    for(let i=this.state.previous; i<this.state.current; i++){
      toBeRenderedSushi.push(this.props.sushis[i])
    }
   }
  
  return toBeRenderedSushi.map(sushi=><Sushi
     key={sushi.id}
      {...sushi}
    eatSushi={this.props.eatSushi}
    ate={this.props.ate}/>)

  }

  render(){
    
  return ( 
    <Fragment>
      <div className="belt">
        {this.renderSushi()}
        <MoreButton handleMore={this.handleMore} />
      </div>
    </Fragment>
  )
  }
}

export default SushiContainer