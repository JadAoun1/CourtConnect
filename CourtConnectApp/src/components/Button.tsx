import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import tw from '../utils/tw';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'inverse';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  fullWidth = false,
}) => {
  // Define styles based on variant
  const buttonStyles = () => {
    const baseStyle = 'py-3 px-6 rounded-md';
    const widthStyle = fullWidth ? 'w-full' : '';
    
    if (disabled) {
      return `${baseStyle} ${widthStyle} bg-gray-dark opacity-50`;
    }
    
    switch (variant) {
      case 'primary':
        return `${baseStyle} ${widthStyle} bg-main`;
      case 'inverse':
        return `${baseStyle} ${widthStyle} bg-white border border-main`;
      default:
        return `${baseStyle} ${widthStyle} bg-main`;
    }
  };
  
  const textStyles = () => {
    if (disabled) {
      return 'font-bold text-white text-center';
    }
    
    switch (variant) {
      case 'primary':
        return 'font-bold text-white text-center';
      case 'inverse':
        return 'font-bold text-main text-center';
      default:
        return 'font-bold text-white text-center';
    }
  };
  
  return (
    <TouchableOpacity 
      style={tw`${buttonStyles()}`}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'inverse' ? tw.color('main') : tw.color('white')} 
          size="small" 
        />
      ) : (
        <Text style={tw`${textStyles()}`}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button; 