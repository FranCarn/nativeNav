import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

export const SettingScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
};
