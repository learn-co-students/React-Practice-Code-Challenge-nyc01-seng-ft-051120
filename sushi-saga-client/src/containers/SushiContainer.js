import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    limit: 4
  }
  handleMoreSushi = () => {
    let newDisplayIndex = this.state.limit + 4
    this.setState({
      limit: newDisplayIndex
    })
  }



  render() {
    let sushis = this.props.sushis.slice(this.state.limit, this.state.limit + 4)
    return (

      <React.Fragment>
        <div className="belt">

          {sushis.map(sushi =>
            <Sushi
              eatMe={this.props.eatMe}
              sushi={sushi}
              id={sushi.id}
              name={sushi.name}
              img_url={sushi.img_url}
              price={sushi.price}
              taken={this.props.eaten.includes(sushi)}
            />
          )
          }
          <MoreButton handleMoreSushi={this.handleMoreSushi} />
        </div>
      </React.Fragment>
    )

  }
}

export default SushiContainer
