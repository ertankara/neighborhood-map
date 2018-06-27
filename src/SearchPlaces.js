import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class SearchPlaces extends Component {
  render() {
    return (
      <input
        onChange={this.props.onQueryChange}
        type="text"
        placeholder="Search for places"
        value={this.props.currentVal} />
    )
  }
}



export default SearchPlaces
