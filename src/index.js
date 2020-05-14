import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { Provider } from 'react-redux'
import { Store } from './store'
import state from './state'

ReactDOM.render(
  <Provider store={Store}>
    <App state={state} />
  </Provider>,
  document.getElementById('root'),
)
