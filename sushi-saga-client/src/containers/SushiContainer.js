import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.slice(0,4).map(sushi => 
          <Sushi
          key={sushi.id}
          id={sushi.id}
          name={sushi.name}
          price={sushi.price}
          image={sushi.img_url} 
          />
        )
        }
        <MoreButton getMoreSushi={props.getMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer