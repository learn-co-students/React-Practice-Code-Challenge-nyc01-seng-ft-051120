import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // console.log(props)
  // const getSomeSushi = () => {
  //   for(let i=0; i<4; i++){
  //     props.map(
  //       name = props.name,
  //       img_url = props.img_url,
  //       price = props.price
  //     )
  //   }
  // }
  
  return (
    <Fragment>
      <div className="belt">
         {props.sushis.slice(0,4).map(sushi => {
                <Sushi
                name={sushi.name}
                img_url={sushi.img_url}
                price={sushi.price}
                />
              }
        )}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer