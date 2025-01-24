import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Ellipse, Defs, ClipPath, Rect } from 'react-native-svg';

const EllipseWithSubtraction = () => {
  return (
    <View style={styles.container}>
      <Svg width="200" height="200" viewBox="0 0 200 200">
        {/* Define the clip-path to subtract from the ellipse */}
        <Defs>
          <ClipPath id="clip">
            {/* Define the subtracted area (rectangle here) */}
            <Rect x="50" y="50" width="100" height="100" />
          </ClipPath>
        </Defs>

        {/* Ellipse with a subtraction effect */}
        <Ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="50"
          fill="blue"
          clipPath="url(#clip)" // Apply the clipping path
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default EllipseWithSubtraction;
