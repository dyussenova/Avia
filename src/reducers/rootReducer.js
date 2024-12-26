import { combineReducers } from 'redux'

import reducerFilter from './reducerFilter'
import reducerTicket from './reducerTicket'
import reducerTabs from './reducerTabs'

export const rootReducer = combineReducers({
  reducerFilter,
  reducerTicket,
  reducerTabs,
})
