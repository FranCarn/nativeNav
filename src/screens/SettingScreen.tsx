import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, styles} from '../theme/appTheme';
import {AuthContext} from '../context';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingScreen = () => {
  const {top} = useSafeAreaInsets();
  const {authState} = useContext(AuthContext);
  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 3)}</Text>

      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={150} color={colors.primary} />
      )}
    </View>
  );
};
