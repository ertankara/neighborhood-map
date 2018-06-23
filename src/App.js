import React, { Component } from 'react'
import Map from './MapContainer'

class MainPage extends Component {
  state = {
    locations: [
      { lat: 38.418665, lng: 27.126112, title: 'Konak' },
      { lat: 38.439018, lng: 27.141123, title: 'Alsancak' },
      { lat: 38.394222, lng: 27.057919, title: 'Balçova' },
      { lat: 38.324203, lng: 26.767730, title: 'Urla' }
    ]
  }

  render() {
    return (
      <Map locations={this.state.locations}/>
    )
  }
}

export default MainPage
