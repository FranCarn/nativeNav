import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Sidemenu, StackNavigator} from './src/router/';
import {AuthProvider} from './src/context';

export const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Sidemenu />
        {/* <StackNavigator /> */}
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
