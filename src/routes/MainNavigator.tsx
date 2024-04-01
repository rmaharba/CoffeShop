import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {storage} from 'src/utils/localstorage';

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
  // The line below is just for testing
  // storage.delete('loggedUser');
  const isLogged = storage.getBoolean('loggedUser');
  const initialRoute = isLogged ? 'Home' : 'GetStarted';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
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
