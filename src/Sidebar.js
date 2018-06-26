import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Sidebar extends Component {
  componentDidMount() {
    document.querySelector('.close-sidebar')
      .addEventListener('click', () => {
        document.querySelector('.sidebar').style.display = 'none'
        document.querySelector('.hamburger-btn').style.display = 'block'
      })
  }

  render() {
    return (
      <div id="sidebar" className="sidebar">
        <div className="close-sidebar">X</div>
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
  places: PropTypes.array.isRequired
}

export default Sidebar
