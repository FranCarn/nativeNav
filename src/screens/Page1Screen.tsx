import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate('Page 2')}
      />
      <Button title="Go person" onPress={() => navigation.navigate('Person')} />
      <Text>Navigate with arguments</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Person', {
            id: 1,
            name: 'Joan',
          })
        }>
        <Text>Joan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Person', {
            id: 2,
            name: 'Susan',
          })
        }>
        <Text>Susan</Text>
      </TouchableOpacity>
    </View>
  );
};
