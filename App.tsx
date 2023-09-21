import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Sidemenu, StackNavigator} from './src/router/';

export const App = () => {
  return (
    <NavigationContainer>
      <Sidemenu />
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
