import {
  Map, Marker,
  InfoWindow,
  GoogleApiWrapper
} from 'google-maps-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    const reg = new RegExp(this.props.queryText.toLowerCase().trim())
    const bound = new this.props.google.maps.LatLngBounds()

    for (let i = 0; i < this.props.locations.length; i++) {
      bound.extend(this.props.locations[i].position)
    }

    return (
        <Map
          initialCenter={{ lat: 38.418665, lng: 27.126112, title: 'Konak' }}
          google={this.props.google}
          zoom={13}
          bounds={bound}>
          {/* First filter the ones that don't match with the query */}
            {this.props.locations.filter(location => {
              return reg.test(location.title.toLowerCase())
            })
            // Print the ones that was filtered out
            .map(location => {
              return (
                <Marker
                  key={location.title}
                  position={{ lat: location.position.lat, lng: location.position.lng}}
                  title={location.title}
                  onClick={this.onMarkerClick} />
              )
            })}
            <InfoWindow marker={this.state.activeMaker} visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.title}</h1>
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
