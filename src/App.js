import React, { Component } from 'react'
import Map from './MapContainer'
import Sidebar from './Sidebar'
import HamburgerButton from './HamburgerButton'

class MainPage extends Component {
  state = {
    locations: [
      { lat: 38.418665, lng: 27.126112, title: 'Konak' },
      { lat: 38.439018, lng: 27.141123, title: 'Alsancak' },
      { lat: 38.394222, lng: 27.057919, title: 'Balçova' },
      { lat: 38.324203, lng: 26.767730, title: 'Urla' }
    ]
  }

  componentDidMount() {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 27) {
        document.querySelector('#sidebar').classList.remove('sidebar-expanded')
        document.querySelector('.hamburger-btn').style.display = 'block'
      }
    })
  }

  hamburgerBtnHandler = e => {
    console.log('event works')
    const sidebar = document.querySelector('#sidebar')
    if (sidebar.classList.toggle('sidebar-expanded')) {
      e.target.style.display = 'none'
    }
    else {
      e.target.style.display = 'block'
    }
    sidebar.classList.toggle('sidebar-expanded')
  }

  render() {
    return (
      <div className="app">
        <HamburgerButton onHamClick={this.hamburgerBtnHandler} />
        <Sidebar places={this.state.locations}>
        </Sidebar>
        <div className="map">
          <Map locations={this.state.locations} />
        </div>
      </div>
    )
  }
}

export default MainPage
