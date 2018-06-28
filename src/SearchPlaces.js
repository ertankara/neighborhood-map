import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchPlaces extends Component {
  render() {
    return (
      <input
        onChange={this.props.onQueryChange}
        onClick={this.props.onInputClick}
        type="text"
        placeholder="Search for places"
        value={this.props.currentVal} />
    )
  }
}

SearchPlaces.proppTypes = {
  onQueryChange: PropTypes.func.isRequired,
  currentVal: PropTypes.string.isRequired,
  onInputClick: PropTypes.func.isRequired
}

export default SearchPlaces
