import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomeScreen,
  OrderScreen,
  DetailsScreen,
  GetStartedScreen,
  DeliveryDetailScreen,
} from '../screens';
import {homeOptions} from './options';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={homeOptions}
        />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="DeliveryDetail" component={DeliveryDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
