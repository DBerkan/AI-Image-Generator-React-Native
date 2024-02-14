import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Animated, Easing} from 'react-native';

const LoadingAnimation = () => {
  const [rotation] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const rotateInterpolation = rotation.interpolate({
    inputRange: [0, 2],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View style={{transform: [{rotate: rotateInterpolation}]}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </Animated.View>
    </View>
  );
};

export default LoadingAnimation;