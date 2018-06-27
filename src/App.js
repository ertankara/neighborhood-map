import React, { Component } from 'react'
import Map from './MapContainer'
import Sidebar from './Sidebar'
import HamburgerButton from './HamburgerButton'

const ESCAPE_BUTTON = 27

class MainPage extends Component {
  state = {
    locations: [
      { lat: 38.418665, lng: 27.126112, title: 'Konak' },
      { lat: 38.439018, lng: 27.141123, title: 'Alsancak' },
      { lat: 38.394222, lng: 27.057919, title: 'Balçova' },
      { lat: 38.324203, lng: 26.767730, title: 'Urla' }
    ],
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
