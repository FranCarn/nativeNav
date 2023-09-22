import React, {useEffect} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate('Page 2')}
      />
      <Button title="Go person" onPress={() => navigation.navigate('Person')} />
      <Text style={{marginVertical: 20, fontSize: 18}}>
        Navigate with arguments
      </Text>
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
