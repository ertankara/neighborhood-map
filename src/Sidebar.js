import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <div onClick={this.props.onCloseClick} className="close-sidebar">X</div>
        <ul>
          {this.props.places.map((place, index) => {
            return (
              <li className="places" key={index}>{(index + 1) + ' ' + place.title}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

Sidebar.propTypes = {
  places: PropTypes.array.isRequired,
  onCloseClick: PropTypes.func.isRequired
}

export default Sidebar
