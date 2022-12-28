import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Title from '../../components/Title';
import Post from '../../components/Posts/Post';

export default function Home() {
  return (
    <View style={styles.container}>
      <Title/>
      
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
  scrollView: {
    width: '100%',
  },
  contentContainer: {
    alignItems: 'center',
  }
});
