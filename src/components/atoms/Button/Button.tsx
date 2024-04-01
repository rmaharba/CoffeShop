import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';

import {Typography} from '..';

import {ButtonProps} from './types';
import {stylesButton} from './styles';

export const Button: FC<ButtonProps> = ({onPress, label, type = 'l'}) => {
  const styles = stylesButton({type});
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}>
      {/* TODO: Make the Typography HERE more customizable */}
      <Typography fontType="Bold" fontSize="s" fontColor="white">
        {label ?? ''}
      </Typography>
    </TouchableOpacity>
  );
};
