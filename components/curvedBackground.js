import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const CurvedBackground = () => {
  return (
    <View style={styles.container}>
      <Svg
        width="100%"
        height="200"
        viewBox="0 0 500 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M0 0H500V150C400 180 100 180 0 150V0Z"
          fill="#181A20" // Votre couleur de fond
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20', // Couleur de fond pour le reste
  },
});

export default CurvedBackground;
