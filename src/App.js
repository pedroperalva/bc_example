import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import history from './services/history';
import Routes from './routes';

// Precisa vir depois da importação do reactotron
import { store, persistor } from './store';


function App() {
  return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router history={history}>
              <Routes />
            </Router>
          </PersistGate>
        </Provider>
  );
}

export default App;
