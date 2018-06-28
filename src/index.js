import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import serviceWorker from './utils/serviceWorker'
import './index.css'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
serviceWorker()
