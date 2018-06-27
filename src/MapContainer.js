import {
  Map, Marker,
  InfoWindow,
  GoogleApiWrapper
} from 'google-maps-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MapContainer extends Component {
  render() {
    const reg = new RegExp(this.props.queryText.toLowerCase())
    return (
        <Map
          initialCenter={{ lat: 38.418665, lng: 27.126112, title: 'Konak' }}
          google={this.props.google}
          zoom={13}>
          {/* First filter the ones that don't match with the query */}
            {this.props.locations.filter(location => {
              return reg.test(location.title.toLowerCase())
            })
            // Print the ones that was filtered out
            .map(location => {
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

MapContainer.propTypes = {
  locations: PropTypes.array.isRequired
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB-Rff_nbsnhRb3jT6eqW6EWptTPCHsic4'
})(MapContainer)
