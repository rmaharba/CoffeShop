import React from 'react';
import {View, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Canvas, Image, Shadow, useImage} from '@shopify/react-native-skia';

import {resPx} from 'src/utils';
import {Button, Typography} from 'src/components';
import {UseNavigationType} from 'src/routes/types';

const screenSizeDimensions = Dimensions.get('screen');

export const GetStarted = () => {
  const navigation = useNavigation<UseNavigationType>();
  const coffeeGrainsImage = useImage(
    require('../../assets/images/coffee_grains_cup.png'),
  );
  const onPressButton = () => {
    navigation.navigate('Home');
  };
  //
  //
  // TODO: Refactor on everything ;)
  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <Canvas
        style={{
          width: '100%',
          height: resPx(495),
        }}>
        <Image
          image={coffeeGrainsImage}
          x={0}
          y={0}
          width={screenSizeDimensions.width}
          height={resPx(500)}
          fit={'cover'}
        />
        <Shadow dx={0} dy={-25} blur={15} color="#000000" inner />
      </Canvas>
      <View
        style={{
          paddingHorizontal: resPx(20),
          width: '100%',
          backgroundColor: '#000000',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{top: resPx(-13)}}>
          <Typography
            fontType="Bold"
            fontColor="white"
            textAlign="center"
            fontSize="xl">
            Coffee so good, your taste buds will love it.
          </Typography>
        </View>
        <View style={{marginHorizontal: resPx(13)}}>
          <Typography fontColor="#A9A9A9" textAlign="center" fontSize="s">
            The best grain, the finest roast, the powerful flavor.
          </Typography>
        </View>
        <View style={{marginTop: resPx(23)}}>
          <Button label={'Get Started'} onPress={onPressButton} />
        </View>
      </View>
    </View>
  );
};
