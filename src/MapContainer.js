import {
  Map, Marker,
  InfoWindow,
  GoogleApiWrapper
} from 'google-maps-react'
import React, { Component } from 'react'

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker />
        <InfoWindow  />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB-Rff_nbsnhRb3jT6eqW6EWptTPCHsic4'
})(MapContainer)
