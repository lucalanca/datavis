import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './configureStore'
import Root from './4.containers/root'

import './index.css';

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)
render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
