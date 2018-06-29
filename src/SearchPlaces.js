import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchPlaces extends Component {
  render() {
    return (
      // <label>Search for a place
      <div>
        <label htmlFor="search-venue">Search for a venue</label>
        <input
          id="search-venue"
          onChange={this.props.onQueryChange}
          onClick={this.props.onInputClick}
          type="text"
          placeholder="Search..."
          value={this.props.currentVal} />
      </div>
    )
  }
}

SearchPlaces.proppTypes = {
  onQueryChange: PropTypes.func.isRequired,
  currentVal: PropTypes.string.isRequired,
  onInputClick: PropTypes.func.isRequired
}

export default SearchPlaces
