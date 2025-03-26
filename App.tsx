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

enableScreens();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <StaticScreen/>
    </NavigationContainer>
  );
}

export default App;
