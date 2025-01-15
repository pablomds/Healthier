import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const CheckBox = ({ onPress, value }) => {
  return (
    <TouchableOpacity
      style={[
        CheckBoxStyles.checkbox,
        value && CheckBoxStyles.checked, 
      ]}
      onPress={onPress} 
    >
      {value && <Text style={CheckBoxStyles.checkmark}>✓</Text>}
    </TouchableOpacity>
  );
};

const CheckBoxStyles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#7E6DFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#7E6DFC',
    borderColor: '#7E6DFC',
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});