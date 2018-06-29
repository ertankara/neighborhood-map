import React, { Component } from 'react'

class KeyboardHints extends Component {
  render() {
    return (
      <div onBlur={this.props.onFocusLoss} tabIndex="1" className="hints">
        <ul>
          <li>Use <strong>escape</strong> button to switch on and off sidebar</li>
          <li>Use <strong>enter</strong> key to select a place in the list</li>
        </ul>
      </div>
    )
  }
}

export default KeyboardHints
