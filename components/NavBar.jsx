import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomePage from './../screens/HomePage/HomePage';
import FriendsList from '../screens/FriendsList/FriendsList';
import NewPostPage from '../screens/NewPostPage/NewPostPage';

//Screen names
const homeName = "Home";
const friendsName = "Friends";
const newPostName = "NewPost";

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === newPostName) {
              iconName = focused ? 'newpost' : 'newpost-outline';

            } else if (rn === friendsName) {
              iconName = focused ? 'friends' : 'friends-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomePage} />
        <Tab.Screen name={newPostName} component={NewPostPage} />
        <Tab.Screen name={friendsName} component={FriendsList} />


      </Tab.Navigator>
    </NavigationContainer>
  );
}
