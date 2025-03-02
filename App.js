import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Import your screens
import Home from './screens/Home';
import AnimeDetails from './screens/AnimeDetails';
import AnimeWatchlist from './screens/AnimeWatchlist';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator for Anime Details
function AnimeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="AnimeDetails" component={AnimeDetails} />
      <Stack.Screen name="AnimeWachlist" component={AnimeWatchlist}/>
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Watchlist') {
            iconName = 'bookmark-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={AnimeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Watchlist" component={AnimeWatchlist} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
