import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { createLogger } from 'redux-logger'

import reducer from '../reducers'
import saga from '../sagas'

const persistConfig = {
  key: 'upwork-test',
  storage
}

const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, reducer)
let Store = null

export function getStore() {
  return Store
}

export default function configureStore() {
  const middleware = [sagaMiddleware]

  // if (process.env.NODE_ENV !== 'production') {
  //   middleware.push(createLogger())
  // }

  Store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
  const persistor = persistStore(Store)
  sagaMiddleware.run(saga)
  return { Store, persistor }
}
