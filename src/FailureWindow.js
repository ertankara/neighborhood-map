import React from 'react'

function FailureWindow(props) {
  return (
    <div role="alert" className="failure-window">
      <p>
        <em><strong>Foursquare data failed to load</strong></em> try following steps to resolve the problem...
        <br />
        <br />
        <ul>
          <li>Make sure you are connected to the internet</li>
          <li>Reload the page</li>
          <li>Inform admin about this problem at <strong>example@mail.com</strong></li>
        </ul>
      </p>
    </div>
  )
}

export default FailureWindow
