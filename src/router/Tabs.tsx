import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Tab1Screen, Tab2Screen} from '../screens';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Platform, Text} from 'react-native';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabAndroid />;
};
const BottomTabIOS = createBottomTabNavigator();
const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }

          return <Text style={{color, width: size}}>{iconName}</Text>;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 5,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 13,
        },
      })}
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}>
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={Tab1Screen}
      /> */}
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
        }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={Tab2Screen}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};

const TabAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled
      barStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 5,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 13,
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
        }}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={Tab2Screen}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};
