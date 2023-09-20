import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/native';

export const Page2Screen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Back',
      headerBackTitle: 'Back',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>
      <Button title="Return" onPress={() => navigation.navigate('Page 2')} />
      <Button
        title="Go to page 3"
        onPress={() => navigation.navigate('Page 3')}
      />
    </View>
  );
};
