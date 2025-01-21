import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import { configureStore, compose } from '@reduxjs/toolkit'

import { rootReducer } from './reducers/rootReducer'
import App from './components/App/App'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ immutableCheck: { warnAfter: 256 }, serializableCheck: { warnAfter: 256 } }).concat(thunk),
    devTools: window.env.NODE_ENV !== 'production',
  },
  composeEnhancers()
)

const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
