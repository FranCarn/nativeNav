import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <Icon name="airplane-outline" size={30} color="#900" />
      </Text>
    </View>
  );
};
