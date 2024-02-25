import {ParamListBase, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

type screens = 'Home' | 'Order' | 'Details' | 'GetStarted' | 'DeliveryDetail';

export type OptionsType =
  | NativeStackNavigationOptions
  | ((props: {
      route: RouteProp<ParamListBase, screens>;
      navigation: any;
    }) => NativeStackNavigationOptions)
  | undefined;
