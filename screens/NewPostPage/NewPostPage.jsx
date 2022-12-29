import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Title from '../../components/Title';
import NewPost from '../../components/Posts/NewPost';


export default function NewPostPage() {
  return (
    <View style={styles.container}>
      <Title/>
      <NewPost/>
      
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
