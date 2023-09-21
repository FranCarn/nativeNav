import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Page1Screen, Page2Screen, Page3Screen, PersonaScreen} from '../screens';

export type RootStackParams = {
  'Page 1': undefined;
  'Page 2': undefined;
  'Page 3': undefined;
  Person: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();

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
      <Stack.Screen name="Person" component={PersonaScreen} />
    </Stack.Navigator>
  );
};
