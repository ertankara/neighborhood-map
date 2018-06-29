import React from 'react'
import PropTypes from 'prop-types'

function HamburgerButton(props) {
    return (
      <div onClick={props.onHamClick} className="hamburger-btn">
        𝄘
      </div>
    )
}

HamburgerButton.propTypes = {
  onHamClick: PropTypes.func.isRequired
}

export default HamburgerButton
