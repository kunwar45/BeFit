import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './components/Title';
import Post from './components/Post';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Post/>
      <StatusBar style="auto" />
    </View>
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
