import React from 'react'
import PropTypes from 'prop-types'

function DetailsView(props) {
  // To save some keystrokes and simplicity
  const data = props.venueInfo
  return (
    <div className="details-view">
      <button
        onClick={props.closeDetailsView}
        className="close-details-view"
        aria-label="Close details window">X</button>

      <h1>{data.title}</h1>
      <h3><span aria-describedby="details-category">Category</span>: <span className="data" id="details-category">{!data.category ? 'N/A' : data.category}</span></h3>
      <p><span aria-describedby="details-address">Address</span>: <span className="data" id="details-address">{!data.address ? 'N/A' : data.address}</span></p>
      <ul>
        <li><span aria-describedby="detais-cross-street">Cross Street</span>: <span className="data" id="details-cross-street">{!data.crossStreet ? 'N/A' : data.crossStreet}</span></li>
        <li><span aria-describedby="detais-state">State</span>: <span className="data" id="details-state">{!data.state ? 'N/A' : data.state}</span></li>
        <li><span aria-describedby="detais-coords">Coordinates</span>: <span className="data" id="details-coords">{!data.coordinates ? 'N/A' : data.coordinates}</span></li>
        <li><span aria-describedby="detais-postal-code">Postal Code</span>: <span className="data" id="details-postal-code">{!data.postalCode ? 'N/A' : data.postalCode}</span></li>
      </ul>
      <br />
      <p>Data provided by <a href="https://foursquare.com" target="_blank">Foursquare</a></p>
    </div>
  )
}

DetailsView.propTypes = {
  venueInfo: PropTypes.object.isRequired
}

export default DetailsView
