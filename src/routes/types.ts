import {ParamListBase, RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

type screens = 'Home' | 'Order' | 'Details' | 'GetStarted' | 'DeliveryDetail';

export type OptionsType =
  | NativeStackNavigationOptions
  | ((props: {
      route: RouteProp<ParamListBase, screens>;
      navigation: any;
    }) => NativeStackNavigationOptions)
  | undefined;

// For this approach: https://stackoverflow.com/a/73203492/9881752
export type RootStackParamList = {
  Home: {} | undefined;
};

export type UseNavigationType = NativeStackNavigationProp<RootStackParamList>;
