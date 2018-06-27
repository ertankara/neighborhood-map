import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchPlaces from './SearchPlaces'

class Sidebar extends Component {

  render() {
    const reg = new RegExp(this.props.currentQuery.toLowerCase().trim())
    return (
      <div className="sidebar">
        <div onClick={this.props.onCloseClick} className="close-sidebar">X</div>
        <SearchPlaces
          onQueryChange={this.props.onQueryInput}
          currentVal={this.props.currentQuery} />
        <ul>
          {/* Filter items depending on text input first, then print them */}
          {this.props.places.filter(place => {
            return reg.test(place.title.toLowerCase())
          })
          .map((place, index) => {
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
  onCloseClick: PropTypes.func.isRequired,
  currentQuery: PropTypes.string.isRequired,
  onQueryInput: PropTypes.func.isRequired
}

export default Sidebar
