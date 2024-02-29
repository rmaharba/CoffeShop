import React from 'react';
import {View, Button} from 'react-native';

import {styles} from './styles';

import {Typography} from '../../components';
import {resPx} from '../../utils';

export const Home = ({navigation}: any) => {
  const onPressNavigation = () => {
    navigation.navigate('Order');
  };
  return (
    <View style={styles.container}>
      {/* <Button onPress={onPressNavigation} title="Navigate to Order" /> */}
    </View>
  );
};
