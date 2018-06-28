import React, { Component } from 'react'
import Map from './MapContainer'
import Sidebar from './Sidebar'
import HamburgerButton from './HamburgerButton'
import Credentials from './utils/credentials'

const ESCAPE_BUTTON = 27

class MainPage extends Component {
  state = {
    locations: [],
    query: ''
  }


  componentDidMount() {
    document.addEventListener('keyup', e => {
      e.preventDefault()

      if (e.keyCode === ESCAPE_BUTTON) {
        document.querySelector('.sidebar')
          .classList.toggle('sidebar-expanded')

        document.querySelector('.hamburger-btn')
          .classList.toggle('hamburger-btn-hidden')
      }
    })

    // Foursquare api request
    fetch(`https://api.foursquare.com/v2/venues/explore?near=alsancak&client_id=${Credentials.client_id}&client_secret=${Credentials.client_secret}&v=${Credentials.version_date}`)
    .then(repsonse => repsonse.json())
    .then(data => {
      const locations = data.response.groups[0].items.map(item => {
        return {
          position: { lat: item.venue.location.lat, lng: item.venue.location.lng }, title: item.venue.name, id: item.venue.id
        }
      })

      this.setState({ locations })
    })
    .catch(err => {
      console.log('Failed to fetch foursquare data', err)
    })
  }


  hamburgerBtnHandler = e => {
    // Hide hamburger button
    e.target.classList.add('hamburger-btn-hidden')

    // Display sidebar
    document.querySelector('.sidebar')
      .classList.add('sidebar-expanded')
  }


  closeBtnHandler = e => {
    document.querySelector('.sidebar')
      .classList.remove('sidebar-expanded')

    document.querySelector('.hamburger-btn')
      .classList.remove('hamburger-btn-hidden')
  }


  updateQuery = e => {
    this.setState({
      query: e.target.value
    })
  }


  render() {
    return (
      <div className="app">
        <HamburgerButton
          onHamClick={this.hamburgerBtnHandler} />

        <Sidebar
          onCloseClick={this.closeBtnHandler}
          places={this.state.locations}
          currentQuery={this.state.query}
          onQueryInput={this.updateQuery} />

        <div className="map">
          <Map
            queryText={this.state.query}
            locations={this.state.locations} />
        </div>
      </div>
    )
  }
}

export default MainPage
