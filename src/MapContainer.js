import {
  Map, Marker,
  InfoWindow,
  GoogleApiWrapper
} from 'google-maps-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escaperegexp from 'escape-regexp'

export class MapContainer extends Component {
  state = {
    activeMaker: {},
    selectedPlace: {},
    showingInfoWindow: false
  }


  componentDidMount() {
    // To make the view fit all markers
    this.forceUpdate()
  }


  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMaker: marker,
      showingInfoWindow: true
    })
  }


  render() {
    const reg = new RegExp(escaperegexp(this.props.queryText).toLowerCase().trim())
    const bound = new this.props.google.maps.LatLngBounds()

    for (let i = 0; i < this.props.locations.length; i++) {
      bound.extend(this.props.locations[i].position)
    }

    return (
        <Map
          initialCenter={{ lat: 38.418665, lng: 27.126112, title: 'Konak' }}
          google={this.props.google}
          bounds={bound}>
          {/* First filter the ones that don't match with the query */}
            {this.props.locations.filter(location => {
              return reg.test(location.title.toLowerCase())
            })
            // Print the ones that was filtered out
            .map(location => {
              console.log('The location is: ', location)
              return (
                <Marker
                  key={location.id}
                  position={{ lat: location.position.lat, lng: location.position.lng}}
                  title={location.title}
                  onClick={this.onMarkerClick}
                  animation={this.props.google.maps.Animation.Fo}
                  category={location.category}
                  address={location.address}
                  crossStreet={location.crossStreet}
                  state={location.state}
                  coordinates={location.coordinates}
                  postalCode={location.postalCode} />
              )
            })}
            <InfoWindow marker={this.state.activeMaker} visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.title}</h1>
                <h3>Category: {this.state.selectedPlace.category}</h3>
                <p>Address: {this.state.selectedPlace.address}</p>
                <ul>
                  <li>State: {this.state.selectedPlace.state}</li>
                  <li>Coordinates: {this.state.selectedPlace.coordinates}</li>
                  <li>Postal Code: {this.state.selectedPlace.postalCode}</li>
                </ul>
              </div>
            </InfoWindow>
        </Map>
    )
  }
}

MapContainer.propTypes = {
  locations: PropTypes.array.isRequired,
  queryText: PropTypes.string.isRequired
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB-Rff_nbsnhRb3jT6eqW6EWptTPCHsic4'
})(MapContainer)
