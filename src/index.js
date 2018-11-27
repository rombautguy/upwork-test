import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import configureStore from './configure/configureStore'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory()
const { Store, persistor } = configureStore()

ReactDOM.render(
<Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister();
