import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import tw from '../utils/tw';
import Button from '../components/Button';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  // Add other screens here
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  
  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      {/* Background with overlay */}
      <View style={tw`flex-1 justify-between`}>
        <View style={styles.imageContainer}>
          {/* Using a solid color background instead of an image for now */}
          <View style={tw`w-full h-full bg-black`} />
          <View style={tw`absolute inset-0 bg-black opacity-70`} />
          
          {/* Basketball graphic - using the app icon as a placeholder */}
          <View style={tw`absolute inset-0 items-center justify-center`}>
            <Image
              source={require('../../assets/icon.png')}
              style={tw`w-40 h-40 opacity-30`}
              resizeMode="contain"
            />
          </View>
        </View>
        
        {/* App Title and Description */}
        <View style={tw`flex-1 justify-center items-center z-10 px-6`}>
          <Text style={tw`text-main text-5xl font-bold text-center mb-2`}>
            CourtConnect
          </Text>
          <Text style={tw`text-white text-lg text-center mb-8`}>
            Find, organize, and join pickup basketball games in your area
          </Text>
        </View>
        
        {/* Buttons */}
        <View style={tw`px-6 pb-12 z-10`}>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('Signup')}
            variant="primary"
            fullWidth
          />
          
          <View style={tw`h-4`} />
          
          <Button
            title="Log In"
            onPress={() => navigation.navigate('Login')}
            variant="inverse"
            fullWidth
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  imageContainer: {
    ...StyleSheet.absoluteFillObject,
    width,
    height,
  },
});

export default WelcomeScreen; 