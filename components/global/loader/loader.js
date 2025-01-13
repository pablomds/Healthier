import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const LoaderIconSVG = () => {
  // Create a reference for the animated value
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Define the spinning animation
    const spinAnimation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000, // 1 second for a full spin
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    spinAnimation.start();

    // Cleanup the animation when the component unmounts
    return () => spinAnimation.stop();
  }, [spinValue]);

  // Map the animated value to a rotation transform
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <Svg
          width={80}
          height={80}
          viewBox="0 0 80 80"
          fill="none"
        >
          <Path
            d="M55.5302 15.1377C55.9478 14.6718 56.4531 14.2928 57.0172 14.0223C57.5813 13.7518 58.1933 13.5951 58.818 13.5612C59.4427 13.5273 60.068 13.6168 60.6581 13.8247C61.2482 14.0325 61.7916 14.3547 62.2571 14.7726C65.7467 17.8959 68.5371 21.721 70.4459 25.9975C72.3546 30.2739 73.3386 34.9054 73.3333 39.5885C73.3333 58.0012 58.4095 72.9218 40 72.9218V63.398C44.8196 63.3981 49.5257 61.9355 53.4962 59.2037C57.4667 56.4718 60.5147 52.5993 62.2372 48.0981C63.9598 43.5969 64.2757 38.6789 63.1433 33.9943C62.011 29.3096 59.4835 25.0789 55.8952 21.8615C54.9553 21.0182 54.3888 19.8361 54.3203 18.5752C54.2519 17.3143 54.687 16.0778 55.5302 15.1377Z"
            fill="url(#paint0_linear)"
          />
          <Path
            d="M34.4416 6.71849C35.6754 6.53515 36.9318 6.8432 37.9408 7.57644C38.9499 8.30968 39.631 9.40956 39.8376 10.6396C40.0443 11.8697 39.7601 13.1318 39.0461 14.1545C38.3321 15.1773 37.2453 15.879 36.0194 16.109C30.4738 17.0507 25.4405 19.9249 21.8112 24.2224C18.1819 28.5199 16.1909 33.9633 16.1908 39.5883C16.1908 45.903 18.6993 51.959 23.1644 56.4242C27.6296 60.8893 33.6856 63.3978 40.0003 63.3978V72.9216C21.5908 72.9216 6.66699 58.001 6.66699 39.5883C6.66699 23.255 18.4956 9.39786 34.4416 6.71849Z"
            fill="#7E6DFC"
          />
          <Defs>
            <LinearGradient
              id="paint0_linear"
              x1="56.6667"
              y1="13.5542"
              x2="40"
              y2="63.3961"
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#7E6DFC" stopOpacity="0" />
              <Stop offset="1" stopColor="#7E6DFC" />
            </LinearGradient>
          </Defs>
        </Svg>
      </Animated.View>
    </View>
  );
};

export default LoaderIconSVG;
