/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Router from './src/router/Router'
import * as Color from './src/constants/Colors';

const App = () => {
  return (
    <View style={styles.container}>
      <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.GLOBAL_APP_BACKGROUND_COLOR,
  }
});

export default App;