import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Title from '../../components/Title';
import Post from '../../components/Posts/Post';
import NavBar from '../../components/NavBar';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Title/>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        
      </ScrollView>

      <NavBar/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1E2C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: '100%',
  },
  contentContainer: {
    alignItems: 'center',
  }
});
