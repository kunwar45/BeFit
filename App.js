import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Pressable } from 'react-native';

// Pages:
import Home from './screens/HomePage/HomePage.jsx';
import IndividualPost from './screens/IndividualPostPage/IndividualPostPage';
import FriendsList from './screens/FriendsList/FriendsList';
import NewPostPage from './screens/NewPostPage/NewPostPage';


export default function App() {
  return (          
  <><NavBar/></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1E2C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
