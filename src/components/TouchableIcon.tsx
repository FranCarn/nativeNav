import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../theme/appTheme';
import {AuthContext} from '../context';

export const TouchableIcon = ({iconName}: {iconName: string}) => {
  const {changeFavIcon} = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => changeFavIcon(iconName)}>
      <Icon name={iconName} size={80} color={colors.primary} />
    </TouchableOpacity>
  );
};
