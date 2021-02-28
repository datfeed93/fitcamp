import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createRoutes from './router';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './../state/configureStore';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    const {store, persistor} = configureStore;
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div>
            {createRoutes()}
          </div>
        </PersistGate>
      </Provider>
    )
  }
}

export default App;

