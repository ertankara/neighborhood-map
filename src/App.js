import React, { Component } from 'react'
import Map from './MapContainer'
import Sidebar from './Sidebar'
import HamburgerButton from './HamburgerButton'
import KeyboardHints from './KeyboardHints'
import DetailsView from './DetailsView'
import Credentials from './utils/credentials'

const ESCAPE_BUTTON = 27,
      ENTER_BUTTON = 13

class MainPage extends Component {
  state = {
    locations: [],
    venueInfo: {},
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

    setTimeout(() => {
      document.querySelector('.hints')
        .style.opacity = '0';
    }, 9500)

    // Foursquare api request
    fetch(`https://api.foursquare.com/v2/venues/explore?ll=38.436074,27.141488&client_id=${Credentials.client_id}&client_secret=${Credentials.client_secret}&v=${Credentials.version_date}`)
    .then(repsonse => repsonse.json())
    .then(data => {
      const locations = data.response.groups[0].items.map(item => {
        return {
          position: { lat: item.venue.location.lat, lng: item.venue.location.lng },
          title: item.venue.name,
          id: item.venue.id,
          category: item.venue.categories[0].name,
          address: item.venue.location.address,
          crossStreet: item.venue.location.crossStreet,
          state: item.venue.location.state,
          coordinates: item.venue.location.lat + ', ' + item.venue.location.lng,
          postalCode: item.venue.location.postalCode
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

  sidebarItemClick = e => {
    // Eliminate other markers that don't match with the string expression
    this.setState({
      query: e.target.textContent.replace(/- /g, '')
    })

    // Search for the clikced location and retrieve the data
    for (const location of this.state.locations) {
      if (location.title === e.target.textContent.replace(/- /g, '')) {
        this.setState({ venueInfo: location })
        document.querySelector('.details-view')
          .style.opacity = '1';
      }
    }
  }

  sidebarInputClick = e => {
    this.setState({
      query: ''
    })

    document.querySelector('.details-view')
      .style.opacity = '0'
  }

  sidebarItemFocus = e => {
    document.querySelector('.hamburger-btn')
      .classList.add('hamburger-btn-hidden')

    document.querySelector('.sidebar')
      .classList.add('sidebar-expanded')
  }

  sidebarItemKeyUp = e => {
    if (e.keyCode === ENTER_BUTTON) {
      this.setState({
        query: e.target.textContent.replace(/- /g, '')
      })
    }
  }

  hintsLoseFocus = e => {
    e.target.style.display = 'none';
  }

  detailsCloseButton = e => {
    document.querySelector('.details-view')
      .style.opacity = '0'
  }

  updateQuery = e => {
    this.setState({
      query: e.target.value
    })
  }


  render() {
    return (
      <div className="app">
        <KeyboardHints onFocusLoss={this.hintsLoseFocus} />

        <DetailsView
          venueInfo={this.state.venueInfo}
          closeDetailsView={this.detailsCloseButton} />

        <HamburgerButton
          onHamClick={this.hamburgerBtnHandler} />

        <Sidebar
          onCloseClick={this.closeBtnHandler}
          places={this.state.locations}
          currentQuery={this.state.query}
          onQueryInput={this.updateQuery}
          onItemClick={this.sidebarItemClick}
          onInputClick={this.sidebarInputClick}
          onItemFocus={this.sidebarItemFocus}
          onItemKeyUp={this.sidebarItemKeyUp} />

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
