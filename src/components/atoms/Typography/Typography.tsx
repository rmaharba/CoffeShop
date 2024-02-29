import React, {FC} from 'react';
import {Text} from 'react-native';

import {TypographyProps} from './types';
import {stylesTypography} from './styles';

export const Typography: FC<TypographyProps> = ({
  children,
  fontSize = 'm',
  fontColor = 'black',
  fontType = 'Regular',
  textAlign = 'center',
}) => {
  const styles = stylesTypography({
    fontSize,
    fontType,
    textAlign,
    fontColor,
  });
  return <Text style={styles.textStyle}>{children ?? ''}</Text>;
};
