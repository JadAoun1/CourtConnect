import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from '../utils/tw';
import Button from '../components/Button';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  
  // Example games data (in a real app, this would come from an API)
  const upcomingGames = [
    {
      id: '1',
      title: 'Saturday Morning Pickup',
      location: 'Central Park Courts, NYC',
      date: 'Sat, June 10',
      time: '9:00 AM',
      players: '8/10',
      skillLevel: 'Intermediate'
    },
    {
      id: '2',
      title: 'Weekend Warriors',
      location: 'Brooklyn Heights YMCA',
      date: 'Sun, June 11',
      time: '2:00 PM',
      players: '6/12',
      skillLevel: 'All Levels'
    },
    {
      id: '3',
      title: 'After Work Runs',
      location: 'Chelsea Piers, Court 3',
      date: 'Mon, June 12',
      time: '6:30 PM',
      players: '4/10',
      skillLevel: 'Advanced'
    }
  ];
  
  const GameCard = ({ game }) => (
    <TouchableOpacity 
      style={tw`bg-white rounded-lg shadow-md p-4 mb-4 border border-gray-light`}
      onPress={() => console.log(`Viewing game ${game.id}`)}
    >
      <Text style={tw`text-lg font-bold text-black`}>{game.title}</Text>
      <Text style={tw`text-gray-dark mt-1`}>{game.location}</Text>
      <View style={tw`flex-row justify-between mt-2`}>
        <Text style={tw`text-black`}>{game.date} • {game.time}</Text>
        <Text style={tw`text-main font-medium`}>{game.players}</Text>
      </View>
      <View style={tw`flex-row mt-2 items-center`}>
        <View style={tw`bg-gray-light rounded-full px-2 py-1`}>
          <Text style={tw`text-xs text-gray-dark`}>{game.skillLevel}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-light`}>
      <ScrollView>
        <View style={tw`p-4`}>
          {/* Header */}
          <View style={tw`flex-row justify-between items-center mb-6`}>
            <Text style={tw`text-2xl font-bold text-black`}>CourtConnect</Text>
            <TouchableOpacity 
              style={tw`w-10 h-10 bg-main rounded-full items-center justify-center`}
              onPress={() => console.log('Profile')}
            >
              <Text style={tw`text-white font-bold`}>P</Text>
            </TouchableOpacity>
          </View>
          
          {/* Create Game Button */}
          <Button
            title="Create New Game"
            onPress={() => console.log('Create Game')}
            variant="primary"
            fullWidth
          />
          
          {/* Upcoming Games Section */}
          <View style={tw`mt-6`}>
            <Text style={tw`text-xl font-bold text-black mb-4`}>Upcoming Games</Text>
            
            {upcomingGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </View>
        </View>
      </ScrollView>
      
      {/* Bottom Navigation (simplified) */}
      <View style={tw`flex-row bg-white border-t border-gray-light`}>
        <TouchableOpacity style={tw`flex-1 py-4 items-center`}>
          <Text style={tw`text-main font-medium`}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-1 py-4 items-center`}>
          <Text style={tw`text-gray-dark`}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-1 py-4 items-center`}>
          <Text style={tw`text-gray-dark`}>My Games</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-1 py-4 items-center`}>
          <Text style={tw`text-gray-dark`}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen; 