/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import StaticScreen from './src/components/organims/staticScreen';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { store } from './src/components/store/store';
enableScreens();

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StaticScreen/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
