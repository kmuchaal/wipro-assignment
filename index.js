/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import ConfigureStore from './src/store/ConfigureStore';

const store = ConfigureStore()

const WiproAssingmentApp = () => (
    <Provider store = { store }>
      <App />
    </Provider>
  )

AppRegistry.registerComponent(appName, () => WiproAssingmentApp);
