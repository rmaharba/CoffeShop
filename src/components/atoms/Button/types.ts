import {ViewStyle} from 'react-native';

export type buttonType = 's' | 'm' | 'l';

export type ButtonProps = {
  label: string;
  type?: buttonType;
  onPress: () => void;
};

export type ButtonStyleProps = {
  type: buttonType;
};

export type StyleButtonTypes = {
  container: ViewStyle;
};
