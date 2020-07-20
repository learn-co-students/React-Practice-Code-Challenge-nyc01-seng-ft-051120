import React, { Fragment } from 'react'

const Sushi = (props) => {
  let handleEat = (event) => {
    props.handleEat(props.id)
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleEat}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eaten ?
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