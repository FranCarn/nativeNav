import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context';

export const SettingScreen = () => {
  const {top} = useSafeAreaInsets();
  const {authState} = useContext(AuthContext);
  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 3)}</Text>
    </View>
  );
};
