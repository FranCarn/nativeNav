import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../theme/appTheme';

export const TouchableIcon = ({iconName}: {iconName: string}) => {
  return (
    <TouchableOpacity onPress={() => console.log(iconName)}>
      <Icon name={iconName} size={80} color={colors.primary} />
    </TouchableOpacity>
  );
};
