import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Title from './components/Title';
import Post from './components/Posts/Post';
import Home from './screens/Home/Home';
import IndividualPost from './screens/IndividualPost/IndividualPost';
import FriendsList from './screens/FriendsList/FriendsList';

export default function App() {
  return (
    <><FriendsList/></>
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
