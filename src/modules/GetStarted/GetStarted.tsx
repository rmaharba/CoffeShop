import React from 'react';
import {View, Dimensions} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Canvas, Image, Shadow, useImage} from '@shopify/react-native-skia';

import {resPx} from 'src/utils';
import {storage} from 'src/utils/localstorage';
import {Button, Typography} from 'src/components';
import {UseNavigationType} from 'src/routes/types';

import {stylesGetStarted} from './styles';

const screenSizeDimensions = Dimensions.get('screen');

export const GetStarted = () => {
  const navigation = useNavigation<UseNavigationType>();
  const styles = stylesGetStarted();

  const coffeeGrainsImage = useImage(
    require('../../assets/images/coffee_grains_cup.png'),
  );

  const onPressButton = () => {
    storage.set('loggedUser', true);
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Home'}],
      }),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBlackLine} />
      <Canvas style={styles.canvasContainer}>
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
      <View style={styles.bottomContainer}>
        <View style={styles.firstTextContainer}>
          <Typography
            fontType="Bold"
            fontColor="white"
            textAlign="center"
            fontSize="xl">
            Coffee so good, your taste buds will love it.
          </Typography>
        </View>
        <View style={styles.secondTextContainer}>
          <Typography fontColor="#A9A9A9" textAlign="center" fontSize="s">
            The best grain, the finest roast, the powerful flavor.
          </Typography>
        </View>
        <View style={styles.buttonContainer}>
          <Button label={'Get Started'} onPress={onPressButton} />
        </View>
      </View>
    </View>
  );
};
