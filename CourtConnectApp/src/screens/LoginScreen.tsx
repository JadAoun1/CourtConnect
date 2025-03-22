import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import tw from '../utils/tw';
import Button from '../components/Button';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  // Add other screens here
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Navigate to home screen on successful login
      navigation.navigate('Home');
    }, 1500);
  };
  
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`flex-1`}
      >
        <ScrollView contentContainerStyle={tw`flex-grow`}>
          <View style={tw`flex-1 p-6`}>
            {/* Header */}
            <View style={tw`mb-8`}>
              <Text style={tw`text-3xl font-bold text-black mb-2`}>Welcome back!</Text>
              <Text style={tw`text-gray-dark text-base`}>Log in to find your next game</Text>
            </View>
            
            {/* Form */}
            <View style={tw`mb-6`}>
              <View style={tw`mb-4`}>
                <Text style={tw`text-black mb-1 font-medium`}>Email</Text>
                <TextInput
                  style={tw`bg-gray-light p-3 rounded-md text-black border border-gray-light`}
                  placeholder="Enter your email"
                  placeholderTextColor={tw.color('gray-dark')}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              
              <View style={tw`mb-6`}>
                <Text style={tw`text-black mb-1 font-medium`}>Password</Text>
                <TextInput
                  style={tw`bg-gray-light p-3 rounded-md text-black border border-gray-light`}
                  placeholder="Enter your password"
                  placeholderTextColor={tw.color('gray-dark')}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
                <TouchableOpacity style={tw`self-end mt-2`}>
                  <Text style={tw`text-main`}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              
              <Button
                title="Log In"
                onPress={handleLogin}
                loading={loading}
                fullWidth
              />
            </View>
            
            {/* Footer */}
            <View style={tw`flex-row justify-center mt-6`}>
              <Text style={tw`text-gray-dark`}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={tw`text-main font-bold`}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen; 