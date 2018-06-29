import React from 'react'
import PropTypes from 'prop-types'
import SearchPlaces from './SearchPlaces'
import escaperegexp from 'escape-regexp'

function Sidebar(props) {
  const reg = new RegExp(escaperegexp(props.currentQuery).toLowerCase().trim())
    return (
      <div className="sidebar">
        <button onFocus={props.onItemFocus} aria-label="Close sidebar" onClick={props.onCloseClick} className="close-sidebar">X</button>
        <SearchPlaces
          onInputClick={props.onInputClick}
          onQueryChange={props.onQueryInput}
          currentVal={props.currentQuery} />
        <ul>
          {/* Filter items depending on text input first, then print them */}
          {props.places.filter(place => {
            return reg.test(place.title.toLowerCase())
          })
          .map((place, index) => {
            return (
              <li
                tabIndex="0"
                onKeyUp={props.onItemKeyUp}
                onFocus={props.onItemFocus}
                onClick={props.onItemClick}
                key={index}>{'- ' + place.title}</li>
            )
          })}
        </ul>
      </div>
    )
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
