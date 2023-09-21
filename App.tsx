import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BasicDrawerNavigator, StackNavigator} from './src/router/';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <BasicDrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
