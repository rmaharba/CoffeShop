import React from 'react';
import {View, Text, Button} from 'react-native';

import {styles} from './styles';

import {resPx} from '../../utils';

export const Home = ({navigation}: any) => {
  const onPressNavigation = () => {
    navigation.navigate('Order');
  };
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: resPx(5)}}>Home Screen</Text>
      <Button onPress={onPressNavigation} title="Navigate to Order" />
    </View>
  );
};
