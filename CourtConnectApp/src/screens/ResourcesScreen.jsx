import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import tw from '../utils/tw';

const ResourceCard = ({ title, description, onPress }) => {
  return (
    <TouchableOpacity 
      style={tw`mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200`}
      onPress={onPress}
    >
      <Text style={tw`text-lg font-bold mb-1 text-secondary`}>{title}</Text>
      <Text style={tw`text-gray-600`}>{description}</Text>
    </TouchableOpacity>
  );
};

const ResourcesScreen = ({ navigation }) => {
  const resources = [
    {
      id: '1',
      title: 'Legal Aid Services',
      description: 'Find free or low-cost legal aid services in your area.',
    },
    {
      id: '2',
      title: 'Court Forms',
      description: 'Access and download official court forms for various legal proceedings.',
    },
    {
      id: '3',
      title: 'Know Your Rights',
      description: 'Educational resources about your legal rights in different situations.',
    },
    {
      id: '4',
      title: 'Legal Clinics',
      description: 'Schedule appointments with volunteer attorneys for brief advice.',
    },
    {
      id: '5',
      title: 'Self-Help Centers',
      description: 'Locations where you can receive in-person assistance with legal matters.',
    },
  ];

  return (
    <ScrollView style={tw`flex-1 bg-background`}>
      <View style={tw`p-6`}>
        <Text style={tw`text-2xl font-bold mb-6 text-text`}>Legal Resources</Text>
        
        {resources.map(resource => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            description={resource.description}
            onPress={() => console.log(`Selected resource: ${resource.title}`)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ResourcesScreen; 