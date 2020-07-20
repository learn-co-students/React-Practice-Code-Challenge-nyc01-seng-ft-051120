import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"
        onClick={() => props.eatMe(props.sushi)}>
        {
          /* Tell me if this sushi has been eaten! */
          props.taken ?
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