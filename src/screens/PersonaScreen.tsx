import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../router/StackNavigator';

// interface RouteParams {
//   id: number;
//   name: string;
// }
// interface Props extends StackScreenProps<any,any> {}

interface Props extends StackScreenProps<RootStackParams, 'Person'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  // const params = route.params as RouteParams;

  const params = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Personal Screen</Text>
      <Text style={styles.title}>{params.name}</Text>
    </View>
  );
};
