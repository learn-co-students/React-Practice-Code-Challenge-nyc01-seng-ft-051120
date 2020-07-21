import React, { Fragment } from 'react'

const Sushi = (props) => {
  let { id, name, price, img_url, eat, showImg } = props;

  return (
    <div className="sushi">
      <div className="plate" 
          onClick={() => eat(id)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          showImg ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi