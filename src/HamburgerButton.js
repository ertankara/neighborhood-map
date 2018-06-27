import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HamburgerButton extends Component {
  render() {
    return (
      <div onClick={this.props.onHamClick} className="hamburger-btn">
        𝄘
      </div>
    )
  }
}

HamburgerButton.propTypes = {
  onHamClick: PropTypes.func.isRequired
}

export default HamburgerButton
