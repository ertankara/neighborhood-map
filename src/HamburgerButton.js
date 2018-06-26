import React, { Component } from 'react'

class HamburgerButton extends Component {
  render() {
    return (
      <div onClick={this.props.onHamClick} className="hamburger-btn">
        𝄘
      </div>
    )
  }
}

export default HamburgerButton