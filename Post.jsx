import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Post() {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.text}>Post</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
  },
});
