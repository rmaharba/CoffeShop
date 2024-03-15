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
import {headerDisabled} from './options';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={headerDisabled}
        />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={headerDisabled}
        />
        <Stack.Screen name="DeliveryDetail" component={DeliveryDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
