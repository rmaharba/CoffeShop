import {StyleSheet} from 'react-native';

import {resPx} from '../../../utils';

import {StyleButtonTypes, ButtonStyleProps} from './types';

const buttonWidth = {
  l: 315,
  m: 217,
  s: 217,
};

export const stylesButton = ({type}: ButtonStyleProps): StyleButtonTypes =>
  StyleSheet.create({
    container: {
      width: resPx(buttonWidth[type]),
      height: resPx(62),
      alignItems: 'center',
      borderRadius: resPx(16),
      justifyContent: 'center',
      backgroundColor: '#C67C4E', //TODO: Needs to be in the future theme
    },
  });
