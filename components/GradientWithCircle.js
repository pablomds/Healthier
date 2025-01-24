import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GradientWithCircle = () => {
  return (
    <View style={styles.container}>
      {/* Gradient Background (using multiple views for simulating a gradient effect) */}
      <View style={styles.gradientBackground}>
        {/* Circle */}
        <View style={styles.circle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBackground: {
    width: '80%',
    height: 150,
    marginVertical: 50, // Equivalent to 5em
    marginHorizontal: 20, // Equivalent to 2em
    borderRadius: 8,
    backgroundColor: 'transparent', // background is transparent to see the gradient effect
    position: 'relative',
    overflow: 'hidden', // Ensures circle stays inside the bounds
  },
  circle: {
    width: 120,
    height: 120,
    backgroundColor: 'red',
    borderRadius: 60,  // Circular shape
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{ translateX: -60 }, { translateY: -60 }],
    zIndex: 1, // Ensure the circle appears above the background
  },
  // Adding a custom gradient background using multiple layers
  gradientLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'linear-gradient(to top, transparent, black 70%)', // For web-based solutions
  },
});

export default GradientWithCircle;
