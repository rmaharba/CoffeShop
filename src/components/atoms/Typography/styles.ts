import {StyleSheet} from 'react-native';

import {
  fontSizes,
  fontsFamily,
  StylesTypographyProps,
  StylesTypographyTypes,
} from './types';
import {resText} from '../../../utils';

// TODO: This need to be global, in the future global theme
export const fontSizesPx: {[key in fontSizes]: number} = {
  xl: resText(34),
  l: resText(20),
  m: resText(18),
  s: resText(16),
  xs: resText(14),
  xxs: resText(12),
};

export const stylesTypography = ({
  fontSize,
  fontType,
  fontColor,
  textAlign,
}: StylesTypographyProps): StylesTypographyTypes =>
  StyleSheet.create({
    textStyle: {
      fontSize: fontSizesPx[fontSize],
      textAlign,
      fontFamily: fontsFamily[fontType],
      color: fontColor,
    },
  });
