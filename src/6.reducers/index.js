import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import spreadsheets from './spreadsheets';

const rootReducer = combineReducers({
  spreadsheets,
  routing
})

export default rootReducer
