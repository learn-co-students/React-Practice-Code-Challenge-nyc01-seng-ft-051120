import React, { Component, Fragment } from 'react'

class Table extends Component {
  state = {
    dirtyDishes: 0
  }

 renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }
  componentDidUpdate(prevProps){
    if (prevProps !== this.props) {
      this.setState({ dirtyDishes: this.props.dirtyDishes})
  }
}
  render(){
  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${this.props.budget} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {

            this.renderPlates(new Array(this.state.dirtyDishes).fill(0))
          }
        </div>
      </div>
    </Fragment>
  )
 }
}

export default Table
