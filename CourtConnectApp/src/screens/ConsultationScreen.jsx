import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import tw from '../utils/tw';
import Button from '../components/Button';

const ConsultationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [legalIssue, setLegalIssue] = useState('');
  
  const handleSubmit = () => {
    console.log('Form submitted', { name, email, phone, legalIssue });
    // In a real app, you would send this data to a server
    alert('Your consultation request has been submitted!');
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setLegalIssue('');
  };
  
  return (
    <ScrollView style={tw`flex-1 bg-background`}>
      <View style={tw`p-6`}>
        <Text style={tw`text-2xl font-bold mb-2 text-text`}>
          Schedule a Consultation
        </Text>
        <Text style={tw`text-gray-600 mb-6`}>
          Fill out the form below to request a consultation with a legal professional.
        </Text>
        
        <View style={tw`mb-4`}>
          <Text style={tw`text-gray-700 mb-1`}>Full Name</Text>
          <TextInput
            style={tw`p-3 bg-white border border-gray-300 rounded-md`}
            placeholder="Enter your full name"
            value={name}
            onChangeText={setName}
          />
        </View>
        
        <View style={tw`mb-4`}>
          <Text style={tw`text-gray-700 mb-1`}>Email</Text>
          <TextInput
            style={tw`p-3 bg-white border border-gray-300 rounded-md`}
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        
        <View style={tw`mb-4`}>
          <Text style={tw`text-gray-700 mb-1`}>Phone Number</Text>
          <TextInput
            style={tw`p-3 bg-white border border-gray-300 rounded-md`}
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>
        
        <View style={tw`mb-6`}>
          <Text style={tw`text-gray-700 mb-1`}>Describe your legal issue</Text>
          <TextInput
            style={tw`p-3 bg-white border border-gray-300 rounded-md h-32`}
            placeholder="Provide details about your legal situation"
            value={legalIssue}
            onChangeText={setLegalIssue}
            multiline
            textAlignVertical="top"
          />
        </View>
        
        <Button
          title="Submit Request"
          onPress={handleSubmit}
          variant="primary"
        />
      </View>
    </ScrollView>
  );
};

export default ConsultationScreen; 