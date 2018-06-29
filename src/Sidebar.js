import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchPlaces from './SearchPlaces'
import escaperegexp from 'escape-regexp'

class Sidebar extends Component {

  render() {
    const reg = new RegExp(escaperegexp(this.props.currentQuery).toLowerCase().trim())
    return (
      <div className="sidebar">
        <div onClick={this.props.onCloseClick} className="close-sidebar">X</div>
        <SearchPlaces
          onInputClick={this.props.onInputClick}
          onQueryChange={this.props.onQueryInput}
          currentVal={this.props.currentQuery} />
        <ul>
          {/* Filter items depending on text input first, then print them */}
          {this.props.places.filter(place => {
            return reg.test(place.title.toLowerCase())
          })
          .map((place, index) => {
            return (
              <li tabIndex="0" onKeyUp={this.props.onKeyUp} onFocus={this.props.onItemFocus} onClick={this.props.onItemClick} className="places" key={index}>{'- ' + place.title}</li>
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
  onQueryInput: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
  onInputClick: PropTypes.func.isRequired,
  onItemFocus: PropTypes.func.isRequired,
  onItemKeyUp: PropTypes.func.isRequired
}

export default Sidebar
