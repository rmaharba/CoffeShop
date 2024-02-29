import {TextStyle} from 'react-native';

// TODO: Needs to be global, on the future global theme
export const fontsFamily = {
  Regular: 'Sora-Regular',
  Bold: 'Sora-SemiBold',
};

export type textAlign =
  | 'auto'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | undefined;
export type fontTypes = 'Regular' | 'Bold';
export type fontSizes = 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';

export interface TypographyProps {
  children: React.ReactNode;
  fontSize?: fontSizes;
  fontType?: fontTypes;
  textAlign?: textAlign;
  fontColor?: string;
}

export type StylesTypographyProps = {
  fontSize: fontSizes;
  fontType: fontTypes;
  textAlign: textAlign;
  fontColor: string;
};

export type StylesTypographyTypes = {
  textStyle: TextStyle;
};
