import { create } from 'twrnc';

// Initialize tailwind with the config
const tw = create({
  theme: {
    extend: {
      colors: {
        // Main app colors
        main: '#FF6B00', // Vibrant orange as main color for basketball theme
        white: '#FFFFFF',
        black: '#000000',
        'gray-light': '#F5F5F5', 
        'gray-dark': '#6B7280',
        // Additional useful colors
        success: '#4CAF50',
        error: '#F44336',
        warning: '#FFC107',
        info: '#2196F3',
      },
    },
  },
});

export default tw; 