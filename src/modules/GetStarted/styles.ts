import {StyleSheet} from 'react-native';

import {resPx} from 'src/utils';

import {GetStartedStylesType} from './types';

export const stylesGetStarted = (): GetStartedStylesType =>
  StyleSheet.create({
    container: {flex: 1, backgroundColor: '#000000'},
    topBlackLine: {backgroundColor: 'black', width: '100%', height: resPx(22)},
    canvasContainer: {
      width: '100%',
      height: resPx(495),
    },
    bottomContainer: {
      paddingHorizontal: resPx(20),
      width: '100%',
      backgroundColor: '#000000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    firstTextContainer: {top: resPx(-13)},
    secondTextContainer: {marginHorizontal: resPx(13)},
    buttonContainer: {marginTop: resPx(23)},
  });
