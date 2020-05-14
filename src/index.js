import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { Provider } from 'react-redux'
import { Store } from './store'
import state from './state'
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <App state={state} />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
