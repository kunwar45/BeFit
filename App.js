import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
//import Title from './components/Title';
//import Post from './components/Posts/Post';

// Pages:
import Home from './screens/HomePage/HomePage.jsx';
import IndividualPost from './screens/IndividualPostPage/IndividualPostPage';
import FriendsList from './screens/FriendsList/FriendsList';
import NewPostPage from './screens/NewPostPage/NewPostPage';


export default function App() {
  return (
    <><Home/></>
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
