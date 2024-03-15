import React from 'react';
import {View} from 'react-native';

import {Button} from 'src/components';

import {styles} from './styles';

export const Home = ({navigation}: any) => {
  const onPressNavigation = () => {
    navigation.navigate('Order');
  };
  return (
    <View style={styles.container}>
      <Button type="l" label={'Buy Now'} onPress={onPressNavigation} />
      {/* <Button onPress={onPressNavigation} title="Navigate to Order" /> */}
    </View>
  );
};
