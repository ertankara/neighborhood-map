import {
  Map, Marker,
  InfoWindow,
  GoogleApiWrapper
} from 'google-maps-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MapContainer extends Component {
  render() {
    return (
        <Map
          initialCenter={{ lat: 38.418665, lng: 27.126112, title: 'Konak' }}
          google={this.props.google}
          zoom={13}>
            {this.props.locations.map(location => {
              return (
                <Marker key={location.title}
                  position={{ lat: location.lat, lng: location.lng}}
                  title={location.title} />
              )
            })}
        </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB-Rff_nbsnhRb3jT6eqW6EWptTPCHsic4'
})(MapContainer)

MapContainer.propTypes = {
  locations: PropTypes.array.isRequired
}
