import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './4.containers/app'
import Home from './4.containers/home'
import Spreadsheet from './4.containers/spreadsheet';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="spreadsheets/:slug" component={Spreadsheet} />
  </Route>
)
