import React, { Fragment } from 'react'

const isEaten=(props)=>{
  let eaten=false
  props.ate.forEach(sushi=> {
    if(sushi.id==props.id){
     eaten =true
    }
  });
  return eaten
}
const Sushi = (props) => {
  
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={()=>props.eatSushi(props.id)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          isEaten(props)?
            null
          :
            <img src={props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi