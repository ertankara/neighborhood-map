import React from 'react'
import PropTypes from 'prop-types'

function SearchPlaces(props) {
    return (
      // <label>Search for a place
      <div>
        <label htmlFor="search-venue">Search for a venue</label>
        <input
          id="search-venue"
          onChange={props.onQueryChange}
          onClick={props.onInputClick}
          type="text"
          placeholder="Search..."
          value={props.currentVal} />
      </div>
    )
}

SearchPlaces.proppTypes = {
  onQueryChange: PropTypes.func.isRequired,
  currentVal: PropTypes.string.isRequired,
  onInputClick: PropTypes.func.isRequired
}

export default SearchPlaces
