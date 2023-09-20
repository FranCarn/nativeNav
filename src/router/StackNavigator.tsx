import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Page1Screen, Page2Screen, Page3Screen} from '../screens';
const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen
        name="Page 1"
        options={{title: 'Page 1'}}
        component={Page1Screen}
      />
      <Stack.Screen
        name="Page 2"
        options={{title: 'Page 2'}}
        component={Page2Screen}
      />
      <Stack.Screen
        name="Page 3"
        options={{title: 'Page 3'}}
        component={Page3Screen}
      />
    </Stack.Navigator>
  );
};
