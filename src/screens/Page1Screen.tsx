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
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.bigBtn, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('Person', {
              id: 1,
              name: 'Joan',
            })
          }>
          <Text style={styles.bigBtnText}>Joan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.bigBtn}}
          onPress={() =>
            navigation.navigate('Person', {
              id: 2,
              name: 'Susan',
            })
          }>
          <Text style={styles.bigBtnText}>Susan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
