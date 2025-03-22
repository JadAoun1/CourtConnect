import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from '../utils/tw';

const Button = ({ title, onPress, variant = 'primary', disabled = false }) => {
  // Define styles based on variant
  const getStyles = () => {
    const baseStyle = 'py-3 px-6 rounded-md';
    
    if (disabled) {
      return `${baseStyle} bg-gray-300`;
    }
    
    switch (variant) {
      case 'primary':
        return `${baseStyle} bg-primary`;
      case 'secondary':
        return `${baseStyle} bg-secondary`;
      case 'outline':
        return `${baseStyle} border border-primary`;
      default:
        return `${baseStyle} bg-primary`;
    }
  };
  
  const getTextStyles = () => {
    const baseStyle = 'font-bold text-center';
    
    if (disabled) {
      return `${baseStyle} text-gray-500`;
    }
    
    switch (variant) {
      case 'outline':
        return `${baseStyle} text-primary`;
      default:
        return `${baseStyle} text-white`;
    }
  };
  
  return (
    <TouchableOpacity 
      style={tw`${getStyles()}`}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={tw`${getTextStyles()}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button; 