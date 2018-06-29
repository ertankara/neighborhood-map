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
    // To make the view fit all markers on first load
    this.forceUpdate()
  }


  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMaker: marker,
      showingInfoWindow: true
    })
  }

  onMapClick = () => {
    this.setState({
      activeMaker: {},
      selectedPlace: {},
      showingInfoWindow: false
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
          role="application"
          onClick={this.onMapClick}
          initialCenter={{ lat: 38.418665, lng: 27.126112, title: 'Konak' }}
          google={this.props.google}
          bounds={bound}>
          {/* First filter the ones that don't match with the query */}
            {this.props.locations.filter(location => {
              return reg.test(location.title.toLowerCase())
            })
            // Print the ones that was filtered out
            .map(location => {
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
              <body>
                <header>
                  <h1>{this.state.selectedPlace.title}</h1>
                  <h3><span aria-describedby="category">Category</span>: <span id="category">{!this.state.selectedPlace.category ? 'N/A' : this.state.selectedPlace.category}</span></h3>
                </header>
                <main>
                  <p><span aria-describedby="address">Address</span>: <span id="address">{!this.state.selectedPlace.address ? 'N/A' : this.state.selectedPlace.address}</span></p>
                  <ul>
                    <li><span aria-describedby="cross-street">Cross Street</span>: <span id="cross-street">{!this.state.selectedPlace.crossStreet ? 'N/A' : this.state.selectedPlace.crossStreet}</span></li>
                    <li><span aria-describedby="state">State</span>: <span id="state">{!this.state.selectedPlace.state ? 'N/A' : this.state.selectedPlace.state}</span></li>
                    <li><span aria-describedby="coords">Coordinates</span>: <span id="coords">{this.state.selectedPlace.coordinates}</span></li>
                    <li><span aria-describedby="postal-code">Postal Code</span>: <span id="postal-code">{!this.state.selectedPlace.postalCode ? 'N/A' : this.state.selectedPlace.postalCode}</span></li>
                  </ul>
                </main>
                <footer>
                  Data provided by <a rel="noopener noreferrer" href="https://foursquare.com" target="_blank">Foursquare</a>
                </footer>
              </body>
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
