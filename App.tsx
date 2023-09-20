import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>App screen</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
