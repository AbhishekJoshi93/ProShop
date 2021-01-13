import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import './bootstrap.min.css'
import App from './App'
import Favicon from 'react-favicon'

ReactDOM.render(
  <Provider store={store}>
    <Favicon url='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/480px-Apple-logo.png' />
    <App />
  </Provider>,
  document.getElementById('root')
)
