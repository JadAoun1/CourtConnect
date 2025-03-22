import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import tw from '../utils/tw';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={tw`flex-1 bg-background`}>
      <View style={tw`p-6`}>
        <Text style={tw`text-3xl font-bold text-center mb-2 text-secondary`}>
          CourtConnect
        </Text>
        <Text style={tw`text-lg text-center mb-6 text-gray-600`}>
          Your Personal Legal Assistant
        </Text>
        
        <View style={tw`my-8`}>
          <Button 
            title="Find Legal Resources" 
            onPress={() => navigation.navigate('Resources')}
            variant="primary"
          />
          
          <View style={tw`h-4`} />
          
          <Button 
            title="Schedule Consultation" 
            onPress={() => navigation.navigate('Consultation')}
            variant="secondary"
          />
          
          <View style={tw`h-4`} />
          
          <Button 
            title="Legal Document Templates" 
            onPress={() => alert('This feature will be available in future updates!')}
            variant="outline"
          />
        </View>
        
        <View style={tw`mt-6 p-4 bg-white rounded-lg shadow-sm`}>
          <Text style={tw`text-lg font-bold mb-2 text-text`}>
            Need Help?
          </Text>
          <Text style={tw`text-gray-600 mb-4`}>
            Access legal resources, document templates, and connect with legal professionals all in one place.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen; 